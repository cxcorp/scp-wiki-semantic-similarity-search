const fs = require("fs");
const readline = require("readline");

const openReadStream = () =>
  fs.createReadStream("./testfile.csv", {
    encoding: "utf-8",
  });

const openFileReader = () => {
  const stream = openReadStream();
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  return { stream, rl };
};

async function* forEachDataLineInCsv() {
  const { stream, rl } = openFileReader();

  let buf = [];

  let isFirstLine = true;
  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false;
      continue;
    }

    if (line.length > 0) {
      buf.push(line);
    }

    if (buf.length > 100) {
      yield* buf;
      buf.length = 0;
    }
  }

  if (buf.length > 0) {
    yield* buf;
  }

  stream.close();
}

async function getNthDataLine(n) {
  const { stream, rl } = openFileReader();

  const headerLineCount = 1;
  let nthLine = 0;
  let targetLine;
  for await (const line of rl) {
    if (nthLine++ - headerLineCount === n) {
      targetLine = line;
      break;
    }
  }

  stream.close();
  return targetLine;
}

async function getStatsForLink(link, corpus) {
  const index = corpus.indexOf(link);
  if (index < 0) throw new Error(`link ${link} not in corpus`);

  const line = await getNthDataLine(index);
  if (!line) throw new Error(`no data line for link ${link} at index ${index}`);

  return line
    .split(",")
    .map((n, i) => [i, parseFloat(n)])
    .sort(([, a], [, b]) => b - a);
}

async function countDataLines() {
  let lines = 0;
  for await (const line of forEachDataLineInCsv()) {
    lines++;
  }
  return lines;
}

async function main() {
  const corpus = fs
    .readFileSync("./corpus.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.trim());

  // const stats = await getStatsForLink("your-last-first-day", corpus);

  // const lines = await countDataLines();
  // const obj = Object.create(null);
  const writeStream = fs.createWriteStream("./matches.bin");
  const n_best = 50;
  const buf = Buffer.alloc(n_best * /*u16 */ (2 + /*f32*/ 4));

  for await (const line of forEachDataLineInCsv()) {
    const results = line
      .split(",")
      .map((n, i) => [i, parseFloat(n)])
      .sort(([, a], [, b]) => b - a)
      .slice(0, n_best + 1);
    results.shift();

    let ptr = 0;
    for (const [index, matchness] of results) {
      ptr = buf.writeUint16LE(index, ptr);
      ptr = buf.writeFloatLE(matchness, ptr);
    }

    writeStream.write(buf);
  }

  writeStream.end();

  // fs.writeFileSync("./matches.json", JSON.stringify(obj), "utf-8");

  // console.log(
  //   stats.slice(0, 50).map(([index, match]) => [match, corpus[index]])
  // );
  // console.log("lines", lines);
}

main();

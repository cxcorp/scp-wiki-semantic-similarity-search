const fs = require("fs");
const { parse } = require("csv-parse");
const { transform } = require("stream-transform");

const similaritiesCsv = "../cache/v4-testfile.csv";
const outputFile = "../../webapp/public/matches.bin";

const parser = parse({
  skip_empty_lines: true,
  delimiter: ",",
});

const fileReadStream = fs.createReadStream(similaritiesCsv, "utf-8");
const fileWriteStream = fs.createWriteStream(outputFile);

let isFirst = true;

const transformer = transform((record, callback) => {
  if (isFirst) {
    isFirst = false;
    callback(null, Buffer.alloc(0));
    return;
  }

  const sorted = record
    .map((v, i) => [parseFloat(v), i])
    .sort(([a], [b]) => b - a);
  const bestAndWorst = [
    ...sorted.slice(0, 45),
    ...sorted.slice(sorted.length - 5),
  ];

  const buf = Buffer.alloc(50 * (2 + 4));
  let idx = 0;
  for (let i = 0; i < 50; i++) {
    const [value, index] = bestAndWorst[i];
    idx = buf.writeUInt16LE(index, idx);
    idx = buf.writeFloatLE(value, idx);
  }

  callback(null, buf);
});

fileReadStream.pipe(parser).pipe(transformer).pipe(fileWriteStream);

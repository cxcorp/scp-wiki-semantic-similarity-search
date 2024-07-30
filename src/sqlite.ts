import type { Database } from "sql.js";
import sqljsWasmUrl from "sql.js/dist/sql-wasm.wasm?url";

const isWasmSupported = () => {
  try {
    if (
      typeof WebAssembly === "object" &&
      typeof WebAssembly.instantiate === "function"
    ) {
      const module = new WebAssembly.Module(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      );
      if (module instanceof WebAssembly.Module)
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
    }
  } catch (e) {
    /* empty */
  }
  return false;
};

const initSqlJs = async () => {
  if (isWasmSupported()) {
    const initSqlJs = await import("sql.js/dist/sql-wasm.mjs").then(
      (m) => m.default
    );
    return initSqlJs({
      locateFile: (path: string) => {
        if (path !== "sql-wasm.wasm") {
          throw new Error(`Unexpected path "${path}" in initSqlJs->locateFile`);
        }

        return sqljsWasmUrl;
      },
    });
  } else {
    const initSqlJs = await import("sql.js/dist/sql-asm.mjs").then(
      (m) => m.default
    );
    return initSqlJs();
  }
};

export async function initSqliteDb(sqlitePath: string) {
  const SQL = await initSqlJs();

  const dbFileBuf = await fetch(sqlitePath)
    .then((res) => res.arrayBuffer())
    .then((buf) => new Uint8Array(buf));

  const db = new SQL.Database(dbFileBuf);

  return db as Database;
}

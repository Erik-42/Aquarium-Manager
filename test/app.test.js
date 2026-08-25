import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe("aquarium-manager", () => {
  it("exposes the aquarium manager index in public/", () => {
    const index = path.join(__dirname, "..", "public", "index.html");
    assert.equal(fs.existsSync(index), true);
    const html = fs.readFileSync(index, "utf8");
    assert.match(html, /Aquarien Manager|Aquarium/i);
  });

  it("ships PWA assets next to the index", () => {
    const pub = path.join(__dirname, "..", "public");
    for (const name of ["sw.js", "manifest.json", "icon-192.png", "icon-512.png"]) {
      assert.equal(fs.existsSync(path.join(pub, name)), true, `missing ${name}`);
    }
  });

  it("has a Dockerfile that copies public/", () => {
    const df = path.join(__dirname, "..", "Dockerfile");
    assert.equal(fs.existsSync(df), true);
    const body = fs.readFileSync(df, "utf8");
    assert.match(body, /COPY\s+public\//);
  });
});

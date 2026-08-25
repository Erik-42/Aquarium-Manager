import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe("skeleton", () => {
  it("exposes a public index page", () => {
    const index = path.join(__dirname, "..", "public", "index.html");
    assert.equal(fs.existsSync(index), true);
    const html = fs.readFileSync(index, "utf8");
    assert.match(html, /basille|cicd|staging/i);
  });

  it("has a Dockerfile", () => {
    assert.equal(fs.existsSync(path.join(__dirname, "..", "Dockerfile")), true);
  });
});

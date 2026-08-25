const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('skeleton', () => {
  it('exposes a public index page', () => {
    const index = path.join(__dirname, '..', 'public', 'index.html');
    assert.equal(fs.existsSync(index), true);
    const html = fs.readFileSync(index, 'utf8');
    assert.match(html, /basille|cicd|staging/i);
  });

  it('has a Dockerfile', () => {
    assert.equal(fs.existsSync(path.join(__dirname, '..', 'Dockerfile')), true);
  });
});

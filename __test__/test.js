const assert = require("power-assert");
const BB = require("../dist/index");

describe("basic test", () => {
  test("it simply works", () => {
    const b = BB();
    // "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"
    // 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 8/8
    assert.equal(b.value(10), "██████████");
    assert.equal(b.value(10.1), "██████████");
    assert.equal(b.value(10.126), "██████████▏");
    assert.equal(b.value(10.25), "██████████▎");
    assert.equal(b.value(10.4), "██████████▍");
    assert.equal(b.value(10.5), "██████████▌");
    assert.equal(b.value(10.6), "██████████▌");
    assert.equal(b.value(10.874), "██████████▊");
    assert.equal(b.value(10.9), "██████████▉");
    assert.equal(b.value(11), "███████████");
    assert.equal(b.percentage(10), "██████████");
  });

  test("custom block block", () => {
    const b = BB({
      max: 12,
      stepBlocks: ["😞", "😔", "😟", "☹️", "😑", "😐", "😏", "🙂", "😀", "😆"]
    });

    assert.equal(b.value(10), "😆😆😆😆😆😆😆😆😆😆");
    assert.equal(b.value(10.125), "😆😆😆😆😆😆😆😆😆😆😞");
    assert.equal(b.value(10.2), "😆😆😆😆😆😆😆😆😆😆😔");
    assert.equal(b.value(10.3), "😆😆😆😆😆😆😆😆😆😆😟");
    assert.equal(b.value(10.4), "😆😆😆😆😆😆😆😆😆😆☹️");
    assert.equal(b.value(10.5), "😆😆😆😆😆😆😆😆😆😆😑");
    assert.equal(b.value(10.6), "😆😆😆😆😆😆😆😆😆😆😐");

    assert.equal(b.percentage(100), "😆😆😆😆😆😆😆😆😆😆😆😆")
  });

  test("empty block block", () => {
    const b = BB({
      stepBlocks: []
    });

    console.log(b.value(10), "");
  });
});
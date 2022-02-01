const { suite } = require("uvu");
const assert = require("uvu/assert");
const { toResult } = require("../src/index.ts");

const TestExample = suite("test example");
TestExample("Example renders", async () => {
  const { result } = toResult(true);
  assert.is(true, result);
});
TestExample.run();

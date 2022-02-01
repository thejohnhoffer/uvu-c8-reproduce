import { suite } from "uvu";
import * as assert from "uvu/assert";
import { toResult } from "../src/index.ts";

const TestExample = suite("test example");
TestExample("Example renders", async () => {
  const { result } = toResult(true);
  assert.is(true, result);
});
TestExample.run();

type Output = {
  result: boolean
};

export const toResult = (input: boolean) => {
  const output: Output = {
    result: input
  }
  return output;
}

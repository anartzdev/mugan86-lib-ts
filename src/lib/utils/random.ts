export const getRandomInRange = (from: number, to: number, fixed: number) => {
  return +(Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
};

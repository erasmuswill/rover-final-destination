module.exports = (position, movement) => {
  let newPosition = position;
  if (movement === "R") newPosition[2]++;
  else if (movement === "L") newPosition[2]--;
  else if (movement === "M")
    switch (newPosition[2]) {
      case 0:
        newPosition[1]++;
        break;
      case 1:
        newPosition[0]++;
        break;
      case 2:
        newPosition[1]--;
        break;
      case 3:
        newPosition[0]--;
        break;
      default:
        throw new Error("Invalid command");
    }
  else throw new Error("Invalid command");
  if (newPosition[2] < 0) newPosition[2] += 4;
  if (newPosition[2] > 3) newPosition[2] -= 4;
  if (newPosition[0] < 0 || newPosition[1] < 0)
    throw new Error("Position out of bounds");
  return newPosition;
};

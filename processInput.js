module.exports = data => {
  data = data.split("\n");
  if (!(data && data.length >= 3)) throw new Error("Arguments invalid");
  let grid, position, commands;
  grid = data[0].split(" ").map(v => parseInt(v));
  position = data[1].split(" ");
  commands = data[2].split("");
  console.log(grid, position, commands);
  if (grid.length != 2) throw new Error("Bounds invalid");
  if (position.length != 3) throw new Error("Position invalid");
  position[2] = processDirection(position[2]);
  position = position.map(v => parseInt(v));
  return { grid, position, commands };
};

const processDirection = v => ({ N: 0, E: 1, S: 2, W: 3 }[v]);

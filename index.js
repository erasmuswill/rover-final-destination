const stdin = process.stdin;
let data = "";
let grid, position, commands;
stdin.setEncoding("utf8");
stdin.on("data", line => (data += line));
stdin.on("end", () => processInput(data));
stdin.on("error", console.error);

const processInput = data => {
  data = data.split("\n");
  if (!(data && data.length >= 3)) throw new Error("Arguments invalid");
  grid = data[0].split(" ");
  position = data[1].split(" ");
  commands = data[2].split("");
  console.log(grid, position, commands);
  if (grid.length != 2) throw new Error("Bounds invalid");
  if (position.length != 3) throw new Error("Position invalid");
  return true;
};

module.exports = { processInput };

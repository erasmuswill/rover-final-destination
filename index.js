const move = require("./move");
const processInput = require("./processInput");

const stdin = process.stdin;
let data = "";
let grid, position, commands;
stdin.setEncoding("utf8");
stdin.on("data", line => (data += line));
stdin.on("end", () => {
  const { grid, position, commands } = processInput(data);
});
stdin.on("error", console.error);
const toString = ([x, y, angle]) =>
  x + " " + y + " " + ["N", "E", "S", "W"][angle];

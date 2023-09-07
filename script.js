const { read } = require("fs")
const { parse } = require("path")
let input = require("fs").readFileSync("valores", "utf-8")
let valor = input.split("\n")
let A = parseInt(valor.shift())
let B = parseInt(valor.shift())
let X = A + B
console.log("X = " + X)

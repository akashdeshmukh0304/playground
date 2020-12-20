'use strict';

const { fchown } = require("fs");
const process = require("process");
// const readline = require("readline");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
})

process.stdin.on("end", _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    })

    main();
})

function readline() {
    return inputString[currentLine++];
}
function main() {
    const x = readline().split(" ").map(n => parseInt(n));
    
    iterate()
    function iterate() {

    }

    for (let i = 0; i < x[1]; i++) {
        const num = readline().split(" ").map(n => parseInt(n));
        console.log(Math.max(...num));
    }
}
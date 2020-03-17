#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

let number;
let arr = [];

arr = process.argv.slice(2);
let arrN = arr.map((value,i)=>Number(value));
arrN.sort((a, b) => {
	if(a > b) return 1;
	else if(a < b) return -1;
	else return 0;
});

console.log(arrN);
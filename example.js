#!/usr/bin/env node

use strict';

// このファイルを修正して、プルリクエストしてください。
// let arr = [];
// arr = process.argv.slice(2);
// let arrN = arr.map((element)=>Number(element));
// const max = Math.max(...arrN);
// const min = Math.min(...arrN);
// const value  = (min+max)/2;
// console.log(Math.floor(value
const arr = process.argv.slice(2);
const startDate = new Date(arr[0],arr[1],arr[2]);
const endDate   = new Date(arr[3],arr[4],arr[5]);
const days = (endDate.getTime() - startDate.getTime()) / (1000*60*60*24);
console.log(Math.floor(days));

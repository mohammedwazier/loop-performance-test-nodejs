const crypto = require('crypto');
const mil = 4000000;
const arr = Array(mil);
let arrDat = [];
let penjumlahan = 0;

var fs = require('fs');

console.time('⏲️')
console.log(`Starting load ${mil} Data`);

fs.readFile('data.json',function(err,content){
  if(err) throw err;
  var parseJson = JSON.parse(content);

  // for(let data of parseJson){
  //   arrDat.push(data);
  // }
  // 7167.170ms(without loop)

  // for(let data in parseJson){
  //     arrDat.push(data);
  // }
  //12807.938ms (without loop)

  // parseJson.forEach((data) => {
      // arrDat.push(data);
  // })
  //6931.724ms (without console.log)

  // parseJson.map((data, key) => {
  //     arrDat.push(data);
  // });
  //6346.986ms (without console.log)

  // let iter = parseJson.length;
  // for (i=0; i < iter; i++){
      // arrDat.push(parseJson[i]);
  // }
  //6918.971ms without console.log


  console.log('End Load Data');
  // console.log('Total bilangan yang ada di dalam 5 juta data',penjumlahan);
  console.timeEnd('⏲️');
})



function fizzbuzz(n, fizz, buzz) {
  let arr = [];
  for(let i=1; i<=n; i++) {
    if (i%fizz==0 && i%buzz==0) arr.push("fizzbuzz");
    else if(i%fizz==0) arr.push("fizz");
    else if (i%buzz==0) arr.push("buzz");
    else arr.push(i);
  }
  let res = arr.toString();
  console.log(res);
}

function getValues() {
  let nInput = prompt("Hasta que número querés");
  let n = Number(nInput);
  let fizzInput = prompt("Qué número querés para fizz");
  let fizz = Number(fizzInput);
  let buzzInput = prompt("Qué número querés para buzz");
  let buzz = Number(buzzInput);
  fizzbuzz(n, fizz, buzz);
}

getValues();

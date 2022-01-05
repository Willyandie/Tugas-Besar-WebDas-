var arr = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];

let brg1 = document.getElementById('brg1').innerHTML.split(',');
arr = parseInt(brg1.join(''));
let brg2 = document.getElementById('brg2').innerHTML.split(',');
arr1 = parseInt(brg2.join(''));
let brg3 = document.getElementById('brg3').innerHTML.split(',');
arr2 = parseInt(brg3.join(''));
let brg5 = document.getElementById('brg4').innerHTML.split(',');
arr3 = parseInt(brg5.join(''));

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

function tambah1() {
  let sum = 0;
  document.getElementById('sp1').innerHTML = '';
  document.getElementById('sp4').innerHTML = '';
  let x = parseInt(document.getElementById('tam1').value);
  console.log(x);
  let y = x * arr;
  console.log(y);
  arr3 = [y];
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(y));
  document.getElementById('brg1').innerHTML = currency(y);
  console.log(arr4);
  let total = arr3.concat(arr4, arr5);
  console.log(total);
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
    console.log(sum);
    document.getElementById('brg4').innerHTML = currency(sum);
  }
}

function tambah2() {
  sum = 0;
  document.getElementById('sp4').innerHTML = '';
  document.getElementById('sp2').innerHTML = '';
  let z = parseInt(document.getElementById('tam2').value);
  console.log(z);
  let g = z * arr1;
  console.log(g);
  arr4 = [g];
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(g));
  document.getElementById('brg2').innerHTML = currency(g);
  console.log(arr4);
  let total2 = arr3.concat(arr4, arr5);
  console.log(total2);
  for (let i = 0; i < total2.length; i++) {
    sum += total2[i];
    console.log(sum);
    document.getElementById('brg4').innerHTML = currency(sum);
  }
}
function tambah3() {
  sum = 0;
  document.getElementById('sp4').innerHTML = '';
  document.getElementById('sp3').innerHTML = '';
  let h = parseInt(document.getElementById('tam3').value);
  console.log(h);
  let i = h * arr2;
  console.log(i);
  arr5 = [i];
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(i));
  document.getElementById('brg3').innerHTML = currency(i);
  console.log(arr4);
  let total3 = arr3.concat(arr4, arr5);
  console.log(total3);
  for (let i = 0; i < total3.length; i++) {
    sum += total3[i];
    console.log(sum);
  }
  document.getElementById('brg4').innerHTML = currency(sum);
}

var arr = [];
var arr1 = [];
var arr2 = [];

let brg1 = document.getElementById('brg1').innerHTML.split(',');
arr = parseInt(brg1.join(''));
let brg2 = document.getElementById('brg2').innerHTML.split(',');
arr1 = parseInt(brg2.join(''));
let brg3 = document.getElementById('brg3').innerHTML.split(',');
arr2 = parseInt(brg3.join(''));
let brg5 = document.getElementById('brg4').innerHTML.split(',');
total = parseInt(brg5.join(''));
let arr3 = 131000000;
let arr4 = 15000000;
let arr5 = 2650000;
let totalsem = 0;

function tambah1() {
  let ongkir = parseInt(document.getElementById('jasap').value);
  document.getElementById('sp1').innerHTML = '';
  document.getElementById('sp4').innerHTML = '';
  let x = parseInt(document.getElementById('tam1').value);
  console.log(x);
  let y = x * arr;
  arr3 = y;
  console.log(arr3);
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(y));
  document.getElementById('brg1').innerHTML = currency(y);
  let totalsem = arr3 + arr4 + arr5;
  console.log(totalsem);
  document.getElementById('brg4').innerHTML = currency(totalsem);

  console.log(ongkir);
  let totalakhir = ongkir + totalsem;
  console.log(totalakhir);
  document.getElementById('hasil').innerHTML = currency(totalakhir);
}

function tambah2() {
  let ongkir = parseInt(document.getElementById('jasap').value);
  document.getElementById('sp4').innerHTML = '';
  document.getElementById('sp2').innerHTML = '';
  let z = parseInt(document.getElementById('tam2').value);
  console.log(z);
  let g = z * arr1;
  console.log(g);
  arr4 = g;
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(g));
  document.getElementById('brg2').innerHTML = currency(g);
  let totalsem = arr3 + arr4 + arr5;
  console.log(totalsem);
  document.getElementById('brg4').innerHTML = currency(totalsem);

  console.log(ongkir);
  let totalakhir = ongkir + totalsem;
  console.log(totalakhir);
  document.getElementById('hasil').innerHTML = currency(totalakhir);
}
function tambah3() {
  let ongkir = parseInt(document.getElementById('jasap').value);
  document.getElementById('sp4').innerHTML = '';
  document.getElementById('sp3').innerHTML = '';
  let h = parseInt(document.getElementById('tam3').value);
  console.log(h);
  let i = h * arr2;
  console.log(i);
  arr5 = i;
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(i));
  document.getElementById('brg3').innerHTML = currency(i);
  let totalsem = arr3 + arr4 + arr5;
  console.log(totalsem);
  document.getElementById('brg4').innerHTML = currency(totalsem);

  console.log(ongkir);
  let totalakhir = ongkir + totalsem;
  console.log(totalakhir);
  document.getElementById('hasil').innerHTML = currency(totalakhir);
}

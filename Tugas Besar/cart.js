var arr = [];
var arr1 = [];
var arr2 = [];

let brg1 = document.getElementById('brg1').innerHTML.split(',');
arr = parseInt(brg1.join(''));
let brg2 = document.getElementById('brg2').innerHTML.split(',');
arr1 = parseInt(brg2.join(''));
let brg3 = document.getElementById('brg3').innerHTML.split(',');
arr2 = parseInt(brg3.join(''));

console.log(arr);
console.log(arr1);
console.log(arr2);

function tambah1() {
  document.getElementById('sp1').innerHTML = '';
  let x = parseInt(document.getElementById('tam1').value);
  console.log(x);
  let y = x * arr;
  console.log(y);
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(y));
  document.getElementById('brg1').innerHTML = currency(y);
}
function tambah2() {
  document.getElementById('sp2').innerHTML = '';
  let z = parseInt(document.getElementById('tam2').value);
  console.log(z);
  let g = z * arr1;
  console.log(g);
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(g));
  document.getElementById('brg2').innerHTML = currency(g);
}
function tambah3() {
  document.getElementById('sp3').innerHTML = '';
  let h = parseInt(document.getElementById('tam3').value);
  console.log(h);
  let i = h * arr2;
  console.log(i);
  const currency = function (number) {
    return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
  };
  console.log(currency(i));
  document.getElementById('brg3').innerHTML = currency(i);
}

/*const money = 2000000;
const currency = function (number) {
  return new Intl.NumberFormat('en-id', { style: 'currency', currency: 'Idr', minimumFractionDigits: 0 }).format(number);
};
console.log(currency(money));*/

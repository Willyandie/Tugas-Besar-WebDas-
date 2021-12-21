//Fungsi Boolean JavaScript
//(c) 2021 Andreas Widjaja

var x,y,z,w;

// Fungsi 01: f(x,y,z) = y’(x+z’)+x’
// SOP: f = x'y'z' + x'y'z + x'yz' + x'yz + xy'z' + xy'z
// POS: f = (x'+y'+z)(x'+y'+z')

function F01(x,y,z){
    return (   ~y&(x|~z)|~x   ) &1;
}

document.write("Fungsi No.01:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F01(x,y,z)+"<br>");
}

function F01SOP(x,y,z){
    return (   ~x&~y&~z | ~x&~y&z | ~x&y&~z | ~x&y&z | x&~y&~z | x&~y&z   ) &1;
}

document.write("Fungsi No.01 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F01SOP(x,y,z)+"<br>");
}

function F01POS(x,y,z){
    return (   (~x|~y|z)&(~x|~y|~z)   ) &1;
}

document.write("Fungsi No.01 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F01POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 02: f(x,y,z) = (x’y+z’)(x+y’)
// SOP: f = x'y'z' + xy'z' + xyz'
// POS: f = (x+y+z`)(x+y`+z)(x+y`+z`)(x`+y+z`)(x`+y`+z`)

function F02(x,y,z){
    return (  (~x&y|~z)&(x|~y)   ) &1;
}

document.write("Fungsi No.02:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F02(x,y,z)+"<br>");
}

function F02SOP(x,y,z){
    return (~x&~y&~z | x&~y&~z | x&y&~z) &1;
}

document.write("Fungsi No.02 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F02SOP(x,y,z)+"<br>");
}

function F02POS(x,y,z){
    return ((x|y|~z)&(x|~y|z)&(x|~y|~z)&(~x|y|~z)&(~x|~y|~z)) &1;
}

document.write("Fungsi No.02 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F02POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 03: f(x,y,z) = xy’(x’+yz)’
// SOP: f = xy`z` + xy`z
// POS: f = (x+y+z)(x+y+z')(x+y'+z)(x+y'+z')(x'+y'+z)(x'+y'+z')

function F03(x,y,z){
    return (  x&~y&~(~x|y&z)   ) &1;
}

document.write("Fungsi No.03:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F03(x,y,z)+"<br>");
}

function F03SOP(x,y,z){
    return (x&~y&~z | x&~y&z) &1;
}

document.write("Fungsi No.03 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F03SOP(x,y,z)+"<br>");
}

function F03POS(x,y,z){
    return ((x|y|z)&(x|y|~z)&(x|~y|z)&(x|~y|~z)&(~x|~y|z)&(~x|~y|~z)) &1;
}

document.write("Fungsi No.03 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F03POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 04: f(x,y,z) = y(x+z’)’(y’+z)
// SOP: f = x'yz
// POS: f = (x+y+z)(x+y+z')(x+y'+z)(x'+y+z)(x'+y+z')(x'+y'+z)(x'+y'+z')

function F04(x,y,z){
    return ( y&~(x|~z)&(~y|z) ) &1;
}

document.write("Fungsi No.04:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F04(x,y,z)+"<br>");
}

function F04SOP(x,y,z){
    return (~x&y&z) &1;
}

document.write("Fungsi No.04 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F04SOP(x,y,z)+"<br>");
}

function F04POS(x,y,z){
    return ((x|y|z)&(x|y|~z)&(x|~y|z)&(~x|y|z)&(~x|y|~z)&(~x|~y|z)&(~x|~y|~z)) &1;
}

document.write("Fungsi No.04 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F04POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 05: f(x,y,z) = (x’(y+z’)+xy’)’
// SOP: f = x'y'z + xyz' + xyz
// POS: f = (x+y+z)(x+y'+z)(x+y'+z')(x'+y+z)(x'+y+z')

function F05(x,y,z){
    return ( ~(~x&(y|~z)|x&~y) ) &1;
}

document.write("Fungsi No.05:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F05(x,y,z)+"<br>");
}

function F05SOP(x,y,z){
    return (~x&~y&z | x&y&~z | x&y&z) &1;
}

document.write("Fungsi No.05 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F05SOP(x,y,z)+"<br>");
}

function F05POS(x,y,z){
    return ((x|y|z)&(x|~y|z)&(x|~y|~z)&(~x|y|z)&(~x|y|~z)) &1;
}

document.write("Fungsi No.05 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F05POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 06: f(x,y,z) = yz(x’+y’(x+z))
// SOP: f = x'yz
// POS: f = (x+y+z)(x+y+z')(x+y'+z)(x'+y+z)(x'+y+z')(x'+y'+z)(x'+y'+z')

function F06(x,y,z){
    return ( y&z&(~x|~y&(x|z)) ) &1;
}

document.write("Fungsi No.06:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F06(x,y,z)+"<br>");
}

function F06SOP(x,y,z){
    return (~x&y&z) &1;
}

document.write("Fungsi No.06 SOP:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F06SOP(x,y,z)+"<br>");
}

function F06POS(x,y,z){
    return ((x|y|z)&(x|y|~z)&(x|~y|z)&(~x|y|z)&(~x|y|~z)&(~x|~y|z)&(~x|~y|~z)) &1;
}

document.write("Fungsi No.06 POS:"+"<br>");
for(i=0;i<=7;i++){
    x = (i>>2) & 1;
    y = (i>>1) & 1;
    z = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" --> F="+F06POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 07: f(x,y,z,w) = xy+w’z
// SOP: f = x'y'zw' + x'yzw' + xy'zw' + xyz'w' + xyz'w + xyzw' + xyzw
// POS: f = (x+y+z+w)(x+y+z+w')(x+y+z'+w')(x+y'+z+w)(x+y'+z+w')(x+y'+z'+w')(x'+y+z+w)(x'+y+z+w')(x'+y+z'+w')

function F07(x,y,z,w){
    return ( x&y|~w&z ) &1;
}

document.write("Fungsi No.07:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F07(x,y,z,w)+"<br>");
}

function F07SOP(x,y,z,w){
    return (~x&~y&z&~w | ~x&y&z&~w | x&~y&z&~w | x&y&~z&~w | x&y&~z&w | x&y&z&~w | x&y&z&w) &1;
}

document.write("Fungsi No.07 SOP:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F07SOP(x,y,z,w)+"<br>");
}

function F07POS(x,y,z){
    return ((x|y|z|w)&(x|y|z|~w)&(x|y|~z|~w)&(x|~y|z|w)&(x|~y|z|~w)&(x|~y|~z|~w)&(~x|y|z|w)&(~x|y|z|~w)&(~x|y|~z|~w)) &1;
}

document.write("Fungsi No.07 POS:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F07POS(x,y,z)+"<br>");
}

document.write("<hr>")

// Fungsi 08: f(x,y,z,w) = x(y+w’z)+(wy)’
// SOP: f = x'y'z'w' + x'y'z'w + x'y'zw'  + x'y'zw  + x'yz'w'  + x'yzw'  + xy'z'w'  + xy'z'w  + xy'zw'  + xy'zw  + xyz'w' + xyz'w  + xyzw'  + xyzw 
// POS: f = (x+y'+z+w')(x+y'+z'+w')

function F08(x,y,z,w){
    return ( x&(y|~w&z)|~(w&y) ) &1;
}

document.write("Fungsi No.08:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F08(x,y,z,w)+"<br>");
}

function F08SOP(x,y,z,w){
    return (~x&~y&~z&~w | ~x&~y&~z&w | ~x&~y&z&~w  | ~x&~y&z&w  | ~x&y&~z&~w  | ~x&y&z&~w  | x&~y&~z&~w  | x&~y&~z&w  | x&~y&z&~w  | x&~y&z&w  | x&y&~z&~w | x&y&~z&w  | x&y&z&~w  | x&y&z&w ) &1;
}

document.write("Fungsi No.08 SOP:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F08SOP(x,y,z,w)+"<br>");
}

function F08POS(x,y,z){
    return ((x|~y|z|~w)&(x|~y|~z|~w)) &1;
}

document.write("Fungsi No.08 POS:"+"<br>");
for(i=0;i<=15;i++){
    x = (i>>3) & 1;
    y = (i>>2) & 1;
    z = (i>>1) & 1;
    w = (i>>0) & 1;
    document.write("x="+x+" y="+y+" z="+z+" w="+w+"   F="+F08POS(x,y,z)+"<br>");
}
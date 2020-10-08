function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 return x;
}

function gcd_three_numbers(input) {

   var gcd, a, b;
   a = input[ 0 ];
   for ( var i = 1; i < gcd; i++ ) {
       b = input[ i ];
       a = gcd_two_numbers( a, b );
   }
   return a;
}
console.log(gcd_three_numbers([8,16,64]));
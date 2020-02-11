
EJERCICIO 1

function printUpTo(x) {
  if(x<0){
    console.log("numero negativo")
    return false;
    }
    
    for(var i=1; i<=x; i++){
      console.log(i)
    }
  
}
printUpTo(1000);
y = printUpTo(-10);
console.log(y);

_______________________________________

EJERCICIO 2

function printSum(x) {
  var sum = 0;
  for(var i=0; i<=x; i++){
    console.log(i)
    sum=sum+i
  }
  
  
  return sum
}


y = printSum(255)
console.log(y)

_________________________________________

EJERCICIO 3

function printSumArray(x) {
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum=sum+x[i]
  }
  return sum;
  
}
console.log( printSumArray([1,2,3]) );

____________________________________________________________________
BONUS

function numeromayor(x) {

  var mayor=x[0]
   
  for(var i=1; i<x.length; i++) {
    if (x[i]>mayor){
      mayor=x[i];
    } 
  } 
  return mayor; 
}
a=numeromayor([1, 30, 5, 7])
console.log(a);
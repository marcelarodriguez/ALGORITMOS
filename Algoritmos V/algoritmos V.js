Ejercicio 1

function reset(x){
  for(var i=0 ; i< x.length; i++){
    if(x[i]<0){
      x[i]=0;
    }
  }
  return x;
}
z= reset([1,2,-1,-3]);
console.log(z);

_____________________________________

Ejercicio 2

function moveradelante(x){
  var temp=[]
  for(var i=1 ; i< x.length; i++){    
    temp[i-1] = x[i];
    }
  
  x=temp;
  x.push(0);
  return x;
  
}

arr=moveradelante([1,2,3,4,1,2,4]);
console.log(arr);

______________________________________

Ejercicio 3

function returnReverso(x){
  var temp=[]
    for(var i=x.length-1; i>=0; i--){
      temp.push(x[i])
    }
  return temp;  
}
  
  arr= returnReverso([1,2,3,6,9,10,12]);
  console.log (arr)

__________________________________________

Ejercicio 4

function repetirValores(x){
  var temp=[]
  
    for(var i=0; i<x.length; i++){
      temp.push(x[i])
      temp.push(x[i]);
    }
  return temp;  
}
  
  arr= repetirValores([4,"Ulysses", 42, false]);
  console.log (arr)


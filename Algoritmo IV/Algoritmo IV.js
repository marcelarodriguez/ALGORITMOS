Ejercicio 1

function mayor(x,y){
  var contador=0
  for (var i=0; i<x.length; i++){
    if(x[i]>y){
      console.log(x[i]);
      contador=contador+1;
    }
   }
  return (contador);
}
z=mayor([2,4,6,8,9,-3,-7],3)
console.log(z)

____________________________________
Ejercicio 2

function a(arr){
  var max= arr[0]
  var min= arr[0]
  var prom= 0
  var sum=0
  for (var i=0; i<arr.length; i++){
    if(max<arr[i]){
      max=arr[i];
    }
    if(min>arr[i]){
      min=arr[i];
    }    
    sum=(arr[i]+sum);
  }
    var prom=sum/arr.length;
    console.log(max);
    console.log(min);
    console.log(prom);
}
z=a([3, 7, 8, 6, -3]);

________________________________________

Ejercicio 3

function a(arr){
  var arr2=[]
  for (var i=0; i<arr.length; i++){
    if(arr[i]>=0){
      arr2[i]=arr[i];
    }
    else{
      arr2[i]="dojo"
   }
  }
  return arr2;
 
}
z=a([2,4,6,8,9,-3,-7]);
console.log(z);

________________________________________

Ejercicio 4

var arr= [];
function RemoverRango(x,y,z){
  for( var i=0; i<x.length; i++){
        if(i < y || i > z){
          arr.push(x[i]);
        }
  }
    return arr
}

arr=RemoverRango([20,30,40,50,60,70],2,4,);
console.log(arr)





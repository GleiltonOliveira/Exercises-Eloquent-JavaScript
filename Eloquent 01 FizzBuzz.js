
for( var cont = 1 ; cont <= 100 ; cont++){

 // inseri FizzBuzz nos divisores 3 e 5.
  if (((cont % 3) === 0) && ((cont % 5)=== 0) ){
        
        console.log("FizzBuzz");
    }

    else if( cont % 3 === 0){
        console.log("Fizz");
    }
    else if (cont % 5 === 0 ){
        console.log("Buzz");
    }
else{
    console.log(cont);
}
 
}
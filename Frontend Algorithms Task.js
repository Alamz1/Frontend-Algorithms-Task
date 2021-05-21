//convertFahrToCelsius

function convertFahrToCelsius(fahrenheit){
    if(typeof fahrenheit === "boolean"){
     console.log(`[${fahrenheit}] is not a valid number but a/an ${typeof(fahrenheit)}.`);
     return `[${fahrenheit}] is not a valid number but a/an ${typeof(fahrenheit)}.`;
   }
   else if(Number(fahrenheit >=0)){
       var input = convert(fahrenheit);
       return input;
   }
   
   else if(typeof fahrenheit === "string"){
     var number = parseInt(fahrenheit);
     if(number === 0 || !isNaN(number)){
      var value1 = convert(number);
      return value1;
     }
     else if( isNaN(number)){
       var value = JSON.stringify(fahrenheit);
     console.log(`'${input} is not a valid number but a/an ${typeof(fahrenheit)}.'`);
     return `'${input} is not a valid number but a/an ${typeof(fahrenheit)}.'`
     }
   }
   else if(Array.isArray(fahrenheit)){
     console.log(`'[${fahrenheit}] is not a valid number but a/an array.'`);
     return `'[${fahrenheit}] is not a valid number but a/an array.'`}
   else{
     var input = JSON.stringify(fahrenheit);
     console.log(`'${input} is not a valid number but a/an ${typeof(fahrenheit)}.'`);
     return `'${input} is not a valid number but a/an ${typeof(fahrenheit)}.'`;
   }
 };

 function convert(f){
  const fToCel = ((f - 32) * 5 / 9).toFixed(4);
  var message = (`${f} \xB0F =  ${fToCel} \xB0C.`)
      console.log(`${message}`);
      return `${message}`
 }

convertFahrToCelsius(0);
convertFahrToCelsius(1);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});
convertFahrToCelsius("w");





//checkYuGiOh
function checkYuGiOh(n){
 
  if(!Number(n)){
    var parameter = JSON.stringify(n);
    console.log(`invalid parameter: ${parameter}`);
    return  `invalid parameter: ${parameter}`;
  }
  else{
    var mList = [];
    for(var i=1; i<= n; i++) {
    if(i % 2 === 0 ){
      mList.push("yu");
    }
    else if( i % 3 === 0 ){
      mList.push("gi");
    }
    else if( i % 5 === 0){
      mList.push("oh");
    }
    else if(i % 2 === 0 && i % 3 === 0 ){
      mList.push("yu-gi");
    }
    else if(i % 2 === 0 &&  i % 5 === 0){
      mList.push("yu-oh");
    }
    else if(i % 3 === 0 && i % 5 === 0){
      mList.push("gi-oh");
    }
    else if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      mList.push("yu-gi-oh");
    }
    else {mList.push(i)}
}
  console.log(mList);
  return mList;
  }
};

checkYuGiOh(5);
checkYuGiOh(10);
checkYuGiOh("fizzbuzz is meh");
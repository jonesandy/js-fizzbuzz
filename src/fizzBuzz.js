var Javabuzz = function(){

};

Javabuzz.prototype.isDivisibleByThree = function(num) {
  if (num % 3 === 0){
    return "Java";
  } else {
    return num;
  }
  
};

Javabuzz.prototype.isDivisibleByFive =  function(num) {
  if (num % 5 === 0){
    return "Buzz";
  } else {
    return num;
  }
  
};
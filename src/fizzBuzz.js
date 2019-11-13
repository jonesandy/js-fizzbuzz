var Javabuzz = function(){

};

Javabuzz.prototype._isDivisibleBy = function(num, divisor) {
  return (num % divisor === 0)
};

Javabuzz.prototype.isDivisibleByThree = function(num){
  if (this._isDivisibleBy(num, 3)) {
    return true;
  }
};

Javabuzz.prototype.isDivisibleByFive = function(num){
  if (this._isDivisibleBy(num, 5)) {
    return true;
  }
};

Javabuzz.prototype.isDivisibleByFifteen = function(num){
  if (this._isDivisibleBy(num, 15)) {
    return true;
  }
};

Javabuzz.prototype.game = function(num){
  if (this.isDivisibleByFifteen(num)){
    return "JavaBuzz";
  } else if (this.isDivisibleByThree(num)){
    return "Java";
  } else {
    return num;
  }

};
describe("fizzbuzz", function(){
  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function(){

    it('is divisable by 3', function(){
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('is not divisable by 4', function(){
      expect(javabuzz._isDivisibleBy(3, 4)).toBe(false);
    });

    it('returns Java given 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('returns Buzz given 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('returns JavaBuzz given 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('playing the game', function(){

    it('says JavaBuzz when given 15', function(){
      expect(javabuzz.game(15)).toEqual("JavaBuzz");
    });

    it('says Java when given 3', function(){
      expect(javabuzz.game(3)).toEqual("Java");
    });

    it('says Buzz when given 5', function(){
      expect(javabuzz.game(5)).toEqual("Buzz");
    });

    it('says returns 4 when given 4', function(){
      expect(javabuzz.game(4)).toEqual(4);
    });
  });

});
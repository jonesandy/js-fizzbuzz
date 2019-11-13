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

    it('is divisable by 5', function(){
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });

    it('is not divisable by 4', function(){
      expect(javabuzz._isDivisibleBy(4, 5)).toBe(false);
    });


  });
});
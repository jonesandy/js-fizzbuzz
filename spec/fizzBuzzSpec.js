describe("fizzbuzz", function(){
  var javabuzz;

  describe('knows when a number is', function(){

    it('is divisable by 3', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe("Java");
    });

    it('is not divisable by 4', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(4)).toBe(4);
    });

    it('is divisable by 5', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe("Buzz");
    });

    it('is not divisable by 4', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(4)).toBe(4);
    });

  });
});
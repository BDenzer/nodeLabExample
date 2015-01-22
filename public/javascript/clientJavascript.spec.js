
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("Not Kittens!");
    });

    it('the result should be 2', function(){
        expect(returnAverage(2,2,2)).toBe(2);
    });

    it('the result should be 4.0', function(){
        expect(returnGradePoint("A").toBe(4.0));
    });
});


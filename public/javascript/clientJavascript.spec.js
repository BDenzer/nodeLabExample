
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
        expect(returnAverage(2,2,2,6)).toBe(2);
    });

    it('the result should be 4.0', function(){
        expect(returnGradeValue("A")).toBe(4.0);
    });

    it('the result should be 2.0', function(){
        expect(returnGradeValue("C")).toBe(2.0);
    });

    it('the result should be 12', function(){
        expect(returnGradePoint(4,3)).toBe(12);
    });
    it('the result should be 10', function(){
        expect(returnGradePoint(5,2)).toBe(10);
    });

});


/**
 * Created by Ben on 1/27/2015.
 */
describe('testing basic functions', function(){

    it('the result should be 2', function(){
        expect(returnAverage(2,2,2,6)).toBe(1);
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

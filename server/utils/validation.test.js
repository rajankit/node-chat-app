const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var s = 23;
        var is = isRealString(s);
        expect(is).toEqual(false);
    });

    it('should reject string with only spaces', () => {
        var s = '    ';
        var is = isRealString(s);
        expect(is).toEqual(false);
    });
    it('should all string with non-space characters', () => {
        var s = '    ankit';
        var is = isRealString(s);
        expect(is).toEqual(true);
    });


});
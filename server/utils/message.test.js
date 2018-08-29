var expect = require('expect');

var { generateMessage,generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Ankit';
        var text = 'Hey Buddy';
        var res = generateMessage(from,text);
        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct gelocation object', () => {
        var latitude = 12.2346;
        var longitude = 45.54;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var res = generateLocationMessage('Admin',latitude,longitude);
        expect(res.url).toEqual(url);
        expect(typeof res.createdAt).toBe('number');
    });
});
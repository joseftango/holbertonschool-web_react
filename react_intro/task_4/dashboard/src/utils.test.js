import { getFooterCopy, getFullYear, getLatestNotification } from './utils';
const assert = require('assert');


describe('test getFullYear function', () => {
    it('it should return the correct year', () => {
        const currentYear = new Date().getFullYear();
        assert.equal(getFullYear(), currentYear);
    });
});

describe('test getFooterCopy function', () => {
    it(' it should return the correct string when the argument is true', () => {
        const result = getFooterCopy(true);
        assert.equal(result, "Holberton School");
    });

    it('it should return the correct string when the argument is false', () => {
        const result = getFooterCopy(false);
        assert.equal(result, "Holberton School main dashboard");
    });
});

describe('getLatestNotification function', () => {
    it('should return the correct string', () => {
        const notification = "<strong>Urgent requirement</strong> - complete by EOD";
        const result = getLatestNotification();
        assert.equal(result, notification);    
    });
});

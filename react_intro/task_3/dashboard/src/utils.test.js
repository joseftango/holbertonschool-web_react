import { getFooterCopy, getFullYear, getLatestNotification } from '../../../task_2/dashboard/src/utils';

describe('test getFullYear function', () => {
    it('it should return the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).to.equal(currentYear);
    });
});

describe('test getFooterCopy function', () => {
    it(' it should return the correct string when the argument is true', () => {
        const result = getFooterCopy(true);
        expect(result).to.equal("Holberton School");
    });

    it('it should return the correct string when the argument is false', () => {
        const result = getFooterCopy(false);
        expect(result).to.equal("Holberton School is the best school in the world");
    });
});

describe('getLatestNotification function', () => {
    it('should return the correct string', () => {
        const notification = "<strong>Urgent requirement</strong> - complete by EOD";
        const result = getLatestNotification();
        expect(result).to.equal(notification);
    });
});

import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear', () => {
    it('return the current year', () => {
        const current_year = new Date().getFullYear();
        expect(getFullYear()).toEqual(current_year);
    });
});

describe('getFooterCopy', () => {
    it('return the correct string when the argiument is true', () => {
        const footer1 = getFooterCopy(true);
        expect(footer1).toEqual('Holberton School');
    });
});

describe('getFooterCopy', () => {
    it('return the correct string when the argiument is false', () => {
        const footer2 = getFooterCopy(false);
        expect(footer2).toEqual('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('return the correct string', () => {
        const stringNotification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toEqual(stringNotification);
    });
});


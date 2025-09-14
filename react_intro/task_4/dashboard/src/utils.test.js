import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("getFullYear returns the current year", () => {
  const year = new Date().getFullYear();
  expect(getFullYear()).toBe(year);
});

test("getFooterCopy returns correct string when isIndex is true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("getFooterCopy returns correct string when isIndex is false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});


test('cheking returned string by getLatestNotification', ()=> {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

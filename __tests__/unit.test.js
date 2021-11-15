// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('1-1 Check Empty Phone Number', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});
test('1-2 Check Short Phone Number', () => {
    expect(functions.isPhoneNumber('111-111')).toBe(false);
});
test('1-3 Check Correct Phone Number 1', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});
test('1-4 Check Correct Phone Number 2', () => {
    expect(functions.isPhoneNumber('222-222-2222')).toBe(true);
});
test("2-1 Check Empty Email", () => {
    expect(functions.isEmail('')).toBe(false);
});
test("2-2 Check Wrong Format Email", () => {
    expect(functions.isEmail('@')).toBe(false);
});
test("2-3 Check Wrong Format Email", () => {
    expect(functions.isEmail("a@a.com")).toBe(true);
});
test("2-4 Check Wrong Format Email", () => {
    expect(functions.isEmail("b@b.com")).toBe(true);
});
test("3-1 Check Empty Password", () => {
    expect(functions.isStrongPassword('')).toBe(false);
});
test("3-2 Check Not Strong Password", () => {
    expect(functions.isStrongPassword("0")).toBe(false);
});
test("3-3 Check Strong Password", () => {
    expect(functions.isStrongPassword("aaaaaaaaaa")).toBe(true);
});
test("3-4 Check Strong Password", () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});
test("4-1 Check Empty Date", () => {
    expect(functions.isDate('')).toBe(false);
});
test("4-2 Check Wrong Date", () => {
    expect(functions.isDate("01/01/01")).toBe(false);
});
test("4-3 Check Correct Date", () => {
    expect(functions.isDate("01/01/0101")).toBe(true);
});
test("4-4 Check Correct Date", () => {
    expect(functions.isDate("01/01/1111")).toBe(true);
});
test('5-1 Check Empty Number', () => {
    expect(functions.isHexColor('')).toBe(false);
});
test('5-2 Check Wrong Format', () => {
    expect(functions.isHexColor('####')).toBe(false);
});
test('5-3 Check Correct Format', () => {
    expect(functions.isHexColor('#111111')).toBe(true);
});
test('5-4 Check Correct Format', () => {
    expect(functions.isHexColor('#222222')).toBe(true);
});
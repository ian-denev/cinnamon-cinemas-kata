const { allocateSeats, fillAuditorium } = require("./index");
const { toBeOneOf } = require("jest-extended");
expect.extend({ toBeOneOf });

describe("allocateSeats Testing Suite", () => {
    test("requestedSeats is supplied", () => {
        const currentlyTakenSeats = 0;
        expect(() => allocateSeats(currentlyTakenSeats, undefined)).toThrow("missing argument: requestedSeats");
    });
    test("currentlyTakenSeats is supplied", () => {
        const requestedSeats = 4;
        expect(() => allocateSeats(undefined, requestedSeats)).toThrow("missing argument: currentlyTakenSeats");
    });
    test("requestedSeats must be a number", () => {
        const currentlyTakenSeats = 0;
        expect(() => allocateSeats(currentlyTakenSeats, "str")).toThrow("requestedSeats must be a Number");
    });
    test("currentlyTakenSeats must be a number", () => {
        const requestedSeats = 4;
        expect(() => allocateSeats("str", requestedSeats)).toThrow("currentlyTakenSeats must be a Number");
    });
    test("1 <= requestedSeats <= 3", () => {
        const currentlyTakenSeats = 0;
        const requestedSeats = 4;
        expect(() => allocateSeats(currentlyTakenSeats, requestedSeats)).toThrow("only between 1 and 3 seats can be allocated at once");
    });
    test("all seats are already taken", () => {
        const currentlyTakenSeats = 15;
        const requestedSeats = 2;
        expect(() => allocateSeats(currentlyTakenSeats, requestedSeats)).toThrow("all seats are already taken");
    });
    test("not enough free seats", () => {
        const currentlyTakenSeats = 13;
        const requestedSeats = 3;
        expect(() => allocateSeats(currentlyTakenSeats, requestedSeats)).toThrow("not enough free seats are available");
    });
})

describe("fillAuditorium Testing Suite", () => {
    test("auditorium is filled with 13, 14 or 15 seats", () => {
        const currentlyTakenSeats = 0;
        expect(fillAuditorium(currentlyTakenSeats)).toBeOneOf([13, 14, 15]);
    });
})

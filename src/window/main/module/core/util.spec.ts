import { Util } from "./util";

describe("util", () => {
    let util: Util;

    beforeEach(() => {
        util = new Util();
    });

    describe("is undefined", () => {

        it("should be undefined", () => {
            const obj: any = {};
            expect(util.isUndefined(obj.property)).toBeTruthy();
        });

        it("should not be undefined", () => {
            const obj = {};
            expect(util.isUndefined(obj)).toBeFalsy();
        });

    });

    describe("is null", () => {

        it("should be null", () => {
            const obj: any = null;
            expect(util.isNull(obj)).toBeTruthy();
        });

        it("should be null if undefined", () => {
            const obj: any = {};
            expect(util.isNull(obj.property)).toBeTruthy();
        });

        it("should not be null", () => {
            const obj = {};
            expect(util.isNull(obj)).toBeFalsy();
        });

    });

    describe("is empty", () => {

        it("should be empty array", () => {
            const array: any[] = [];
            expect(util.isEmpty(array)).toBeTruthy();
        });

        it("should be empty string", () => {
            const text = "";
            expect(util.isEmpty(text)).toBeTruthy();
        });

        it("should be empty if undefined", () => {
            const obj: any = {};
            expect(util.isEmpty(obj.property)).toBeTruthy();
        });

        it("should be empty if null", () => {
            const obj: any = null;
            expect(util.isEmpty(obj)).toBeTruthy();
        });

        it("should not be empty array", () => {
            const array = ["item1"];
            expect(util.isEmpty(array)).toBeFalsy();
        });

        it("should not be empty string", () => {
            const text = "value";
            expect(util.isEmpty(text)).toBeFalsy();
        });

    });
});

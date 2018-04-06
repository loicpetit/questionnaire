import * as debug from "./debug";

describe("debug", () => {

    describe("isDebug", () => {
        let env: any;

        beforeEach(() => {
            env = {};
        }),

        it("should be true if ELECTRON_DEBUG is set to true", () => {
            //  given
            env.ELECTRON_DEBUG = "  true   ";
            process.env = env;
            //  when
            const isDebug = debug.isDebug();
            //  then
            expect(isDebug).toBeTruthy();
        });

        it("should be true if ELECTRON_DEBUG is undefined", () => {
            //  given
            process.env = env;
            //  when
            const isDebug = debug.isDebug();
            //  then
            expect(isDebug).toBeFalsy();
        });

        it("should be false if ELECTRON_DEBUG is different of true", () => {
            //  given
            env.ELECTRON_DEBUG = "something   ";
            process.env = env;
            //  when
            const isDebug = debug.isDebug();
            //  then
            expect(isDebug).toBeFalsy();
        });
    });

});

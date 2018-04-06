import { Main } from "./main";

describe("main", () => {

    describe("isDebug", () => {

        it("should be false by default", () => {
            //  given
            let main = new Main();
            //  when
            const isDebug = main.isDebug();
            //  then
            expect(isDebug).toBeFalsy();
        });

    });

});

/// <reference path="fourslash.ts" />

/*
    // @Filename: a.ts
    ////export class [|C|] {
    ////    [|constructor|](){}
    ////}
    ////new [|C|]();

    // @Filename: b.ts
    ////import {C} from "./a";
    ////new [|C|]();

    //TODO: also look for super

    //verify.numberOfErrorsInCurrentFile(0);
    const [r0, r1, r2, r3, r4] = test.ranges();
    verify.referencesOf(r1, [r2, r3]);
*/

////class C { [|constructor|]() {} }
////class D extends C {
////    constructor() {
////        [|super|]();
////    }
////}

verify.numberOfErrorsInCurrentFile(0);
const [r0, r1] = test.ranges();
verify.referencesOf(r0, [r1]);

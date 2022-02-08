/*
export interface TypescriptModel {
    //N'accepte aucun type mais tous les types l'acceptent
    testType: never;
}
 */

//Never type is useful in function that never return a result
//like endless function or when throwing an error
function testType() {
    throw new Error();
}

let windowStates: "open" | "closed" | "minimized";

console.log(windowStates);
//NOT POSSIBLE
//windowStates = "prout";

windowStates = "open";
console.log(windowStates);

//Function that can take a type or another
function getLength(obj: string | string[]) {
    return obj.length;
}

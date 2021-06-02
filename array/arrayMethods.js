//----------------------- MAP ----------------------------
const aStringList = ["chocolat", "asimov", "kraken"];

//Create a new array
//Doesn't change original array
const newStringList = aStringList.map(aFunction)

function aFunction(str){
    return str + " wow";
}

console.log(aStringList);
console.log(newStringList);

//----------------------- FLAT MAP -----------------------
//After the map, make the result be an array
//You can only flat one level

//Here, [6, 2] will not be flattened
const flatNumberList = [[5], [2], [6, 2], [10], [15]];

const newFlatNumberList = flatNumberList.flatMap(nb => [nb * 3]);

console.log(newFlatNumberList);

//---------------------- FILTER -------------------------
const aNumberList = [1, 7, 28, 45, 76, 87];

//Put in the new list only elements who respect the condition
const newNumberList = aNumberList.filter(nb => filterFunction(nb, 20, 50));

function filterFunction(value, min, max){
    return value > min && value < max;
}
console.log(aNumberList);
console.log(newNumberList);

//------------------------ SORT ------------------------------
//By default, sorts string values (alphabetical order) with the UTF-16 value
//of each element
const sortList = ["kenobi", "ashoka", "grievous", "dark vador", "dark maul"];

sortList.sort();
console.log(sortList);

//reverse the order
sortList.reverse();
console.log(sortList);

newNumberList.sort(sortNumbers);
//Can define the sort with another function
//here descending order
function sortNumbers(a, b){
    return b - a;
}
console.log(newNumberList);


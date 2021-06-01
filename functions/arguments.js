
function testArgs(v1, v2){
    console.log(arguments)
}

function addPouet(str) {
    return str + ' - pouet';
}

const original = 'Bonjour ';
const result = addPouet(original)
console.log(original)
console.log(result)


function addPouetOnObjUnsafe(obj) {
    obj.hello = obj.hello + ' - pouet';
    return obj;
}


function addPouetOnObjSafe(obj) {
    return  {
        ...obj,
        hello: obj.hello + ' - pouet'
    }
}

const original2 = {hello: 'Bonjour '};
const result2 = addPouetOnObjSafe(original2)
console.log(original2)
console.log(result2)


const bigObject = {
    hello: 'World',
    content: [
        'a', 'b'
    ],
    content2: {
        d: 'e'
    }
}

const object2 = {
    ...bigObject,
    hello: 'Borld',
    content: [...bigObject.content],
    content2: {...bigObject.content2, z:'y'}
    // content: bigObject.content.slice()
}

object2.content.push('d');

console.log(bigObject)
console.log(object2)

// lodash deepclone
// lodash

// Privilégier immutabilité: change pas de valeur: const, par faire d'assignation de champs ...

// Object.freeze()
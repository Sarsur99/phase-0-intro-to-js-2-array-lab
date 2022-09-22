// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) =>{
    cats.push("Ralph");
}

const destructivelyPrependCat = (name) =>{
    cats.unshift("Bob");
}

const destructivelyRemoveLastCat = () =>{
    cats.pop();
}
const destructivelyRemoveFirstCat = () =>{
    cats.shift();
}
const appendCat = (name) =>{
    let newArray = [...cats, name]
    return newArray;
}

const prependCat = (name) => {
    let newArray2 = [name, ...cats]
    return newArray2;
}

function removeLastCat(){
    let removeLast = cats.slice(0,2);
    return removeLast;
}

const removeFirstCat = () => {
    let removeFirst = cats.slice(1)
    return removeFirst;
}


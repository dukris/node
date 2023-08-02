import {retrieveProperty} from "./enum-deletion.js";

export const createImmutableObject = (obj) => {
    if (typeof obj != 'object') {
        throw new TypeError("Input format is wrong!")
    }
    const copied = JSON.parse(JSON.stringify(obj));
    Object.getOwnPropertyNames(obj)
        .forEach(key => {
            retrieveProperty(copied, key).writable = false;
        })
    return copied;
}

const obj = {
    name: 'Name',
    age: 30
}
const im = createImmutableObject(obj);
console.log(im);
console.log(Object.getOwnPropertyDescriptors(im))
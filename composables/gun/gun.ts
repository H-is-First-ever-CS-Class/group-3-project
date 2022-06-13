import GUN from "gun/gun";
import SEA from "gun/sea";
import LOAD from "gun/lib/load";
import OPEN from "gun/lib/open";

const gun = new GUN();

if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    window.gun = gun;
}

const getIndexedObjectFromArray = (arr: any[]) => {
    return arr.reduce((acc, item, ind) => {
        return {
            ...acc,
            [ind]: item,
        }
    }, {});
};

const getArrayFromIndexedObject = (indexedObj: object) => {
    return Object.values(indexedObj);
};

export default gun;
export { SEA, getIndexedObjectFromArray, getArrayFromIndexedObject, LOAD, OPEN };
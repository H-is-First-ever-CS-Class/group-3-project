import GUN from "gun/gun";
import SEA from "gun/sea";
import { PossibleJSONType } from "../blockchain";

const gun = new GUN();

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
export { SEA, getIndexedObjectFromArray, getArrayFromIndexedObject };
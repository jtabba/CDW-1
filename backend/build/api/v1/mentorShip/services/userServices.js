var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectId } from 'mongodb';
import { getCollection } from '../../../../database/db';
export const getAllDataService = () => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield getCollection('users');
    const allData = yield (collection === null || collection === void 0 ? void 0 : collection.find({}).toArray());
    console.log('collection', allData);
    return allData;
});
export const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield getCollection('users');
    const userData = yield (collection === null || collection === void 0 ? void 0 : collection.findOne({
        _id: new ObjectId(id)
    }));
    console.log('user', userData);
    return userData;
});

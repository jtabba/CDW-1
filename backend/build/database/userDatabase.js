var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connectToDb } from './db';
const getAllUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield connectToDb('Users');
    return collection === null || collection === void 0 ? void 0 : collection.find({}).toArray();
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield connectToDb('Users');
    yield (collection === null || collection === void 0 ? void 0 : collection.insertOne(userData));
});
export default { getAllUserData, createUser };

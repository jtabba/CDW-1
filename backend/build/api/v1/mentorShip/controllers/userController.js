var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllDataService, getSingleUser } from '../services/userServices';
export const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield getAllDataService();
    return res.send({
        status: 200,
        message: 'Success',
        data: allData
    });
});
export const getSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield getSingleUser(req.body.userId);
    return res.send({
        status: 200,
        message: 'Success',
        data: userData
    });
    // for testing of single use one of the following IDs and add it to postman body as "userId": "id here"
    // {
    //     "_id": "64e738b63ef7a62f2d9a3d60",
    //     "name": "Bob"
    // },
    // {
    //     "_id": "64e740b422d2034f57c25504",
    //     "name": "Jeff"
    // }
    // Testing for postman
    // body
    // {
    // "userId": "64e738b63ef7a62f2d9a3d60"
    // endpoint: http://localhost:8080/api/v1/getUser
    //  }
});

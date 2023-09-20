var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllDataService, postSingleUser } from '../services/userServices';
export const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield getAllDataService();
    return res.send({
        status: 200,
        message: 'Success',
        data: allData
    });
});
export const getSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Get single was hit');
    res.sendStatus(200);
    // const userData = await getSingleUser(req.params.userId)
    // return res.send({
    //     status: 200,
    //     message: 'Success',
    //     data: userData
    // })
    // export const getSingle = async (req: Request, res: Response) => {
    //     console.log('Route handler for /getUser is executed.');
    //     try {
    //         const userData = await getSingleUser(req.body.userId);
    //         if (!userData) {
    //             return res.status(404).json({
    //                 status: 404,
    //                 message: 'User not found',
    //                 data: null,
    //             });
    //         }
    //         return res.status(200).json({
    //             status: 200,
    //             message: 'Success',
    //             data: userData,
    //         });
    //     } catch (error) {
    //         console.error('Error in /getUser:', error);
    //         return res.status(500).json({
    //             status: 500,
    //             message: 'Internal server error',
    //             data: error.message,
    //         });
    //     }
    // }
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
export const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const insertedData = yield postSingleUser(req.body);
    return res.send({
        status: 201,
        message: 'Registration is done',
        data: insertedData
    });
});

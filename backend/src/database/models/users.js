var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MongoClient = require("mongodb").MongoClient;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uri = "mongodb+srv://noahmilliken:creamfilling@oreocluster.kasbgor.mongodb.net/?retryWrites=true&w=majority";
                    client = new MongoClient(uri);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 8]);
                    return [4 /*yield*/, client.connect()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, deleteUsersWithLongPasswords(client, "_")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, listDatabases(client)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, client.close()];
                case 7:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
function deleteUsersWithLongPasswords(client, param) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(param);
                    return [4 /*yield*/, client
                            .db("userDatabase")
                            .collection("users")
                            .deleteMany({ userName: { $regex: param } })];
                case 1:
                    result = _a.sent();
                    console.log("".concat(result.deletedCount, " document(s) was/were deleted"));
                    return [2 /*return*/];
            }
        });
    });
}
function deleteListingByName(client, userName) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .deleteOne({ name: userName })];
                case 1:
                    result = _a.sent();
                    console.log("".concat(result.deletedCount, " document(s) was/were deleted"));
                    return [2 /*return*/];
            }
        });
    });
}
function upsertListingByName(client, nameOfUser, updatedUser) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .updateOne({ name: nameOfUser }, { $set: updatedUser }, { upsert: true })];
                case 1:
                    result = _a.sent();
                    console.log("".concat(result.matchedCount, " document(s) matchet the query  criteria"));
                    if (result.upsertedCount) {
                        console.log("".concat(result.upsertedCount, " documents were upserted."));
                    }
                    console.log("".concat(result.modifiedCount, " document was/were updated."));
                    return [2 /*return*/];
            }
        });
    });
}
function updateUserByName(client, nameOfUser, updatedUser) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .updateOne({ name: nameOfUser }, { $set: updatedUser })];
                case 1:
                    result = _a.sent();
                    console.log("".concat(result.matchedCount, " document(s) matched the criteria"));
                    console.log("".concat(result.modifiedCount, " document was/were updated."));
                    return [2 /*return*/];
            }
        });
    });
}
function findOneUserByName(client, nameOfUser) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .findOne({ name: nameOfUser })];
                case 1:
                    result = _a.sent();
                    if (result) {
                        console.log("found user with the name ".concat(nameOfUser));
                        console.log(result);
                    }
                    else {
                        console.log("No listings found with the name ".concat(nameOfUser));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createMultipleUsers(client, newUsers) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .insertMany(newUsers)];
                case 1:
                    result = _a.sent();
                    console.log("".concat(result.insertedCount, " new users created with id(s): ").concat(result.insertedIs));
                    return [2 /*return*/];
            }
        });
    });
}
function createUser(client, newListing) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .db("userDatabase")
                        .collection("users")
                        .insertOne(newListing)];
                case 1:
                    result = _a.sent();
                    console.log("New user created with id: ".concat(result.insertedId));
                    return [2 /*return*/];
            }
        });
    });
}
function listDatabases(client) {
    return __awaiter(this, void 0, void 0, function () {
        var databasesList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db().admin().listDatabases()];
                case 1:
                    databasesList = _a.sent();
                    console.log("Databases:");
                    databasesList.databases.forEach(function (db) {
                        console.log("_ ".concat(db.name));
                    });
                    return [2 /*return*/];
            }
        });
    });
}

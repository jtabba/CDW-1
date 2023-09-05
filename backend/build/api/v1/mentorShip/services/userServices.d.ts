interface userDetail {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    location: string;
}
export declare const getAllDataService: () => Promise<import("mongodb").WithId<import("bson").Document>[] | undefined>;
export declare const getSingleUser: (id: string) => Promise<import("mongodb").WithId<import("bson").Document> | null | undefined>;
export declare const postSingleUser: (args: userDetail) => Promise<import("mongodb").InsertOneResult<import("bson").Document> | undefined>;
export {};

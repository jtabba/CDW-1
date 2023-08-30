export declare const getAllDataService: () => Promise<import("mongodb").WithId<import("bson").Document>[] | undefined>;
export declare const getSingleUser: (id: string) => Promise<import("mongodb").WithId<import("bson").Document> | null | undefined>;

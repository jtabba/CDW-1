import { Request, Response } from 'express';
export declare const getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getSingle: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;

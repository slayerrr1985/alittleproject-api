import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private readonly prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    testDatabase(): Promise<{
        success: boolean;
        message: string;
        result: unknown;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        result?: undefined;
    }>;
    getAllUsuarios(): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            nombre: string;
            apellidos: string;
            username: string;
        }[];
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        data?: undefined;
    }>;
}

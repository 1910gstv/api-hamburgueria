import { CartStatus } from "@prisma/client";

export interface ICart {
    id: string;
    user_id: string;
    status: CartStatus;
    total: string;
}
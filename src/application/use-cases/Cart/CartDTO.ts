import { CartStatus } from "@prisma/client";

export interface CreateCartDTO {
    user_id: string;
    items:{
        product_id: string;
        quantity: number;
        observation?: string;
    }[];
    status: string;
}

export interface ICartResponse {
  id: string;
  user_id: string;
  status: CartStatus;
  total: number;
  items: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    quantity: number;
    price: number;
  }>;
}
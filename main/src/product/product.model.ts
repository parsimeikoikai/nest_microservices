import { Schema } from '@nestjs/mongoose';

@Schema()
export class Product {
    id:number;
    title:string;
    image:string;
    likes:string;
}

import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    id:number;
    title:string;
    image:string;
    likes:string;
}
export const ProductSchema  = SchemaFactory.createForClass(Product);
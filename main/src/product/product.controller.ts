import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { Product } from './product.model';
import { HttpService } from '@nestjs/axios';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private httpService: HttpService,
  ) {}
  @Get()
  async all() {
    return this.productService.all();
  }

  @Post(':id/like')
  async like(@Param('id') id) {
    const product = await this.productService.findOne(id);

    this.httpService
      .post(`http://localhost:3500/api/product/${id}/like`, {})
      .subscribe((res) => {
        console.log(res);
      });

    return this.productService.update(id, {
      likes: product.likes + 1,
    });
  }

  @EventPattern('product_created')
  async productCreated(product: Product) {
    await this.productService.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_updated')
  async productUpdated(product: Product) {
    await this.productService.update(product.id, {
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_deleted')
  async productDeleted(product: Product) {
    await this.productService.delete(product.id);
  }
}

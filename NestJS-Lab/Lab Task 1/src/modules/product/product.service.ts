import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(productData: Partial<Product>) {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  async getAllProducts() {
    return await this.productRepository.find();
  }

  async getProductById(id: number) {
    return await this.productRepository.findOne({
      where: { id },
    });
  }

  async updateProduct(
    id: number,
    productData: Partial<Product>,
  ) {
    const product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) {
      return null;
    }

    Object.assign(product, productData);

    return await this.productRepository.save(product);
  }

  async deleteProduct(id: number) {
    const result = await this.productRepository.delete(id);

    return (result.affected ?? 0) > 0;
  }
}
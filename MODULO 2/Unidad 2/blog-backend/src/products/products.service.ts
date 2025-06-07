import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../categories/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateProductDto) {
    const category = await this.categoryRepo.findOne({ where: { id: dto.categoryId } });
    if (!category) {
      throw new NotFoundException(`Categoría con ID ${dto.categoryId} no encontrada`);
    }
    const newProduct = this.productRepo.create({ ...dto, category });
    return this.productRepo.save(newProduct);
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    if (dto.categoryId) {
      const category = await this.categoryRepo.findOne({ where: { id: dto.categoryId } });
      if (!category) {
        throw new NotFoundException(`Categoría con ID ${dto.categoryId} no encontrada`);
      }
      product.category = category;
    }

    Object.assign(product, dto);
    return this.productRepo.save(product);
  }

  async findOne(id: number) {
    return this.productRepo.findOne({ where: { id } });
  }

  async findAll() {
    return this.productRepo.find();
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}

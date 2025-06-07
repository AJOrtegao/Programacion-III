import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Importa el módulo de TypeORM con la entidad Category
  controllers: [CategoriesController], // Controladores de la categoría
  providers: [CategoriesService], // Servicios de la categoría
})
export class CategoriesModule {}
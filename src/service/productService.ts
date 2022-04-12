import { ProductDto } from "../dto/productDto";
import productRepository from "../repository/productRepository";
import bcrypt from 'bcrypt';

class ProductService {
    async getAll() {
        const products = await productRepository.get();
        return products;
    }

    async create(product: ProductDto) {
        const id = await productRepository.getId(product.id);
        if(id) {
            throw new Error("Id já cadastrado");
        }
        return await productRepository.create(product);
    }

    
}
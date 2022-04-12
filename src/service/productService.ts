import { ProductDto } from "../dto/productDto";
import productRepository from "../repository/productRepository";

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

    async update(id: string, dados: ProductDto){
        const buscaId = await productRepository.getId(id);
        if(!buscaId) {
            throw new Error('Id não encontrado!');
        }
        return await productRepository.update(id, dados);
    }

    async delete(id: string) {
        const buscaId = productRepository.getId(id);
        if(!buscaId) {
            throw new Error('Id não encontrado!');
        }
        return await productRepository.delete(id);
    }
}

export default new ProductService();
import { ProductDto } from "../dto/productDto";
import { Product } from "../schema/productSchema";

class ProductRepository {
  async get(): Promise<ProductDto[]> {
    return await Product.find();
  }

  async getId(id: string) {
    return await Product.findOne({ id });
  }

  async create(product: ProductDto) {
    return await Product.create(product);
  }

  async update(id: string, dados: ProductDto) {
    return await Product.updateOne({ id }, dados);
  }

  async delete(id: string) {
    return await Product.remove({ id });
  }
}

export default new ProductRepository();
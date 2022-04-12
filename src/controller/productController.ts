import { ProductDto } from "../dto/productDto";
import HttpResponse from "../helpers/http-response";
import productService from "../service/productService";

class ProductController {
    async getAll(req: any, res: any): Promise<any> {
        try {
            const products = await productService.getAll();
            res.send(HttpResponse.ok(products));
        } catch (error) {
            res.send(HttpResponse.badRequest(error));
        }
    }

    async create(req: any, res:any) {
        try {
            const product: ProductDto = req.body;
            const productCreated: ProductDto = await productService.create(product);
            res.send(HttpResponse.badRequest(productCreated));
        } catch (error) {
            res.send(HttpResponse.badRequest(error));
        }
    }

    async update(req:any, res:any) {
        try {
          const id: string = req.params.id;
          const dados: ProductDto = req.body;
          await productService.update(id, dados);
          res.send(HttpResponse.ok({message: "Product update"}));
        } catch (error) {
          res.send(HttpResponse.badRequest(error));
        }
    }

    async delete(req: any, res: any) {
        try {
            const id: string = req.params.id;
            await productService.delete(id);
            res.send(HttpResponse.ok({message: "Produto deletado"}));
        } catch (error) {
            res.send(HttpResponse.badRequest(error));
        }
    }
}

export default new ProductController();
import { Router } from "express";
import ProductController from "../controller/productController";
import productCreate from "../validation/productCreate";

const routesProduct = Router();

routesProduct.get("/", ProductController.getAll);
routesProduct.post("/", productCreate, ProductController.create);
routesProduct.put("/:email", ProductController.update);
routesProduct.delete("/:email", ProductController.delete);

export default routesProduct;

import {Router} from "express";
import {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actulizarProducto,
    eliminarProducto
} from "../controllers/productController.js";

const router = Router();

router.get("/",obtenerProductos);
router.get("/:id",obtenerProducto);
router.post("/crear",crearProducto);
router.put("/:id",actulizarProducto);
router.delete("/:id",eliminarProducto);

export default router;

import {
    getAllProducts,
    getProductByld,
    createProduct,
    updateProduct,
    deleteProduct
}from "../models/productModel.js";

export const obtenerProductos = async (req, res) => {
    const productos = await getAllProducts();
    res.json(productos);
};

export const obtenerProducto = async (req, res) => {
    const {id}=req.params;
    const producto = await getProductByld(id);
    res.json(producto);
};

export const crearProducto = async (req, res) => {
    const nuevo = await createProduct(req.body);
    res.status(201).json(nuevo);
};

export const actulizarProduct = async(req, res) => {
    const {id} = req.params
    const actulizado = await updateProduct(id, req.body);
    res.json(actulizado);
};

export const eliminarProducto = async(req, res) => {
    const {id} = req.params;
    const resultado = await deleteProduct(id);
    res.json(resultado);
};
import pool from "../config/db.js";

export const getAllProducts = async () => {
    const result = await pool.query("SELECT*FROM productos ORDER BY id ASC");
    return result.rows;
};

export const getProductByld = async (id) => {
    const result = await pool.query("SELECT*FROM productos WHERE id = $1", {id});
    return result.rows[0];
};

export const createProduct = async ({nombre,precio,descripcion,stock}) => {
    const result = await pool.query("INSERT INTO productos (nombre, precio, descripcion, stock) VALUES ($1,$2,$3,$4) RETURNING*",[nombre,precio,descripcion,stock]);
    return result.rows[0];
};

export const updateProduct = async (id, {nombre,precio,descripcion,stock}) => {
    const result = await pool.query("UPDATE productos SET nombre=$1,precio$2,descripcion=$3,stock=#4 WHERE id==$5 RETURNING*", [nombre,precio.descripcion,stock,id]);
    return SpeechRecognitionResultList.rows[0];
};

export const deleteProduct = async (id) => {
    await pool.query("DELETE FROM productos WHERE id = $1", [id]);
    return{message:"Producto eliminado correctamente"};
};
import axios from "axios";

const insertarProducto = async (body) => {
  const data = await axios
    .post("http://localhost:8081/api/v1.1/productos", body)
    .then((r) => r.data);
};

const obtenerProductos = async () => {
  const data = await axios
    .get("http://localhost:8081/api/v1.1/productos")
    .then((r) => r.data);
  return data;
}

//fachada
export const insertarProductoFachada = async (body) => {
  return await insertarProducto(body);
};

export const obtenerProductosFachada = async () => {
  return await obtenerProductos();
};

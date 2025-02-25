import axios from "axios";

const insertarDetalle = async (body) => {
    const data = await axios
        .post("http://localhost:8081/api/v1.1/detalles", body)
        .then(r => r.data);
    return data;
}

export const insertarDetalleFachada = async (body) => {
    return await insertarDetalle(body);
};
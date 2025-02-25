import axios from "axios";

const insertarVenta = async (body) => {
    const data = await axios
        .post("http://localhost:8081/api/v1.1/ventas", body)
        .then(r => r.data);


}


export const insertarVentaFachada = async (body) => {
    return await insertarVenta(body);
}
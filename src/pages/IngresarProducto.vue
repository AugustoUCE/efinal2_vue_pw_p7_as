<template>
    <div class="container">
        <h1>Producto</h1>
        <div class="form">
            <form @submit.prevent="">

                <label for="codigoBarras"><strong>codigo de barras</strong></label>
                <input type="text" id="codigoBarras" v-model="codigoBarras">
                <label for="nombre"><strong>Nombre</strong></label>
                <input type="text" id="nombre" v-model="nombre">
                <label for="categoria"><strong>categoria</strong></label>
                <input type="text" id="categoria" v-model="categoria">
                <label for="stock"><strong>stock</strong></label>
                <input type="number" id="stock" v-model="stock">
                <label for="precio"><strong>Precio</strong></label>
                <input type="number" id="precio" v-model="precio">

                <div>
                    <button type="button" @click="insertarProducto()">Guardar</button>
                </div>

            </form>


        </div>

    </div>
</template>
<script>
import { insertarProductoFachada } from '@/client/ApiProducto.js'

export default {
    methods: {
        async insertarProducto() {
            const body = {
                codigoBarras: this.codigoBarras,
                nombre: this.nombre,
                categoria: this.categoria,
                stock: this.stock,
                precio: this.precio
            }
            await insertarProductoFachada(body);
            alert( 'Producto insertado correctamente');

        },

    },

}
</script>
<style>
.container,.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    background-color: aquamarine;
}
@media (max-width: 768px) {
  .container,.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    background-color: aquamarine;
}
}

</style>
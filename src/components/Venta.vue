<template>
    <div>
        <form @submit.prevent="">
            <label for="codigoBarras"><strong>codigo de barras</strong></label>
            <input type="text" id="codigoBarras" v-model="codigoBarras">
            <label for="cantidad"><strong>cantidad</strong></label>
            <input type="number" id="cantidad" v-model="cantidad">
            <div>
                <button type="button" @click="agregar()">Guardar</button>
            </div>


        </form>
    </div>
</template>
<script>
import { insertarDetalleFachada } from '@/client/ApiDetalle.js'
export default {
    data() {
        return {
            codigoBarras: '',
            cantidad: ''
        }
    },
    methods: {
        async agregar() {
            const body = {
                codigoBarras: this.codigoBarras,
                cantidad: this.cantidad
            }
            await insertarDetalleFachada(body);
            alert('Detalle insertado correctamente');

        },

    },

}
</script>
<style>
.container,form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    background-color: aquamarine;
}
@media (max-width: 768px) {
  .container,form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    background-color: aquamarine;
}
}
</style>
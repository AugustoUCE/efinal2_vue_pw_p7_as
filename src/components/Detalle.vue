<template >
    <div class="container">
        <form @submit.prevent="">
            <label for="numeroventa"><strong>numero de venta</strong></label>
            <input type="number" id="numeroventa" v-model="numeroventa">
            <label for="cedula"><strong>cedula</strong></label>
            <input type="number" id="cedula" v-model="cedula">
            <div>
                <button type="button" @click="insertarVenta()"><strong>guardar</strong></button>
            </div>

        </form>

    </div>
</template>
<script>
import { insertarVentaFachada } from '@/client/ApiVenta.js'
export default {
    data() {
        return {
            numeroventa: '',
            cedula: ''
        }
    },
    methods: {
        async insertarVenta() {
            const body = {
                numeroventa: this.numeroventa,
                cedula: this.cedula
            }
            await insertarVentaFachada(body);
            alert('Venta insertada correctamente');

        },

    },
    
}
</script>
<style >
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
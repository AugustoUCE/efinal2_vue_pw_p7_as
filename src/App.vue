<template>

<div>
  
  <IngresarProducto/>
  <Venta />
  <Detalle />
</div>
<div>

  <RealizarVenta/>
</div>
</template>

<script>

import IngresarProducto from '@/pages/IngresarProducto.vue'
import RealizarVenta from '@/pages/RealizarVenta.vue'
import Venta from '@/components/Venta.vue'
import Detalle from '@/components/Detalle.vue'
export default {
  name: 'App',
  components: {
    
  IngresarProducto,
  RealizarVenta,
 
  
    
  }
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

<template>
  <v-container class="product-list">
    <h2 class="product-list__title">Nuestros Productos</h2>

    <!-- Filtro por categoría -->
    <div class="product-list__filters">
      <v-btn
        v-for="categoria in categorias"
        :key="categoria"
        :color="categoriaActual === categoria ? 'primary' : ''"
        :variant="categoriaActual === categoria ? 'elevated' : 'outlined'"
        rounded="xl"
        class="filter-btn"
        @click="filtrarPor(categoria)"
      >
        {{ categoria }}
      </v-btn>
    </div>

    <!-- Estado de carga -->
    <div v-if="cargando" class="product-list__status">
      <v-progress-circular indeterminate color="primary" />
      <p>Cargando productos...</p>
    </div>

    <!-- Estado de error -->
    <v-alert
      v-else-if="error"
      type="error"
      class="my-4"
    >
      {{ error }}
    </v-alert>

    <!-- Sin resultados -->
    <v-alert
      v-else-if="productosFiltrados.length === 0"
      type="info"
      class="my-4"
    >
      😕 No hay productos en esta categoría.
    </v-alert>

    <!-- Grilla de productos -->
    <v-row v-else>
      <v-col
        v-for="product in productosFiltrados"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters('productos', [
      'productosFiltrados',
      'categorias',
      'estaCargando',
      'hayError'
    ]),
    ...mapGetters('filtros', [
      'categoriaActual'
    ]),
    cargando() {
      return this.estaCargando
    },
    error() {
      return this.hayError
    }
  },
  methods: {
    ...mapActions('productos', [
      'obtenerProductos'
    ]),
    ...mapActions('filtros', [
      'filtrarPor'
    ])
  },
  mounted() {
    this.obtenerProductos()
  }
}
</script>

<style scoped>
.product-list {
  max-width: 1400px;
  margin: 30px auto;
  padding: 0 20px;
}

.product-list__title {
  font-size: 1.8rem;
  color: #35495e;
  margin-bottom: 20px;
  text-align: center;
}

.product-list__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 25px;
}

.filter-btn {
  margin: 4px;
}

.product-list__status {
  text-align: center;
  padding: 40px;
  font-size: 1.1rem;
  color: #666;
}
</style>
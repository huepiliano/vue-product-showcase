<template>
  <v-card class="product-card" elevation="3" rounded="lg">
    <v-btn
      class="product-card__fav"
      :icon="esFavorito(product.id) ? 'mdi-heart' : 'mdi-heart-outline'"
      :color="esFavorito(product.id) ? 'red' : 'grey'"
      variant="text"
      @click="toggleFavorito(product)"
    />
    <v-img
      :src="product.image"
      :alt="product.title"
      height="200"
      contain
      class="product-card__image"
    />
    <v-card-text>
      <v-chip color="primary" size="small" class="mb-2">
        {{ product.category }}
      </v-chip>
      <p class="product-card__title">{{ product.title }}</p>
      <p class="product-card__price">${{ product.price }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('favoritos', [
      'esFavorito'
    ])
  },
  methods: {
    ...mapActions('favoritos', [
      'toggleFavorito'
    ])
  },
  mounted() {
    console.log('ProductCard montado para:', this.product.title)
  }
}
</script>

<style scoped>
.product-card {
  position: relative;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__fav {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

.product-card__image {
  background-color: #f9f9f9;
  padding: 10px;
}

.product-card__title {
  font-size: 0.95rem;
  color: #35495e;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 8px 0;
}

.product-card__price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #42b883;
}
</style>
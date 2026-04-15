import { mount } from '@vue/test-utils'
import ProductCard from '../components/ProductCard.vue'
import { createStore } from 'vuex'

// Creamos un store de prueba
const store = createStore({
  modules: {
    favoritos: {
      namespaced: true,
      state: {
        favoritos: []
      },
      getters: {
        esFavorito: (state) => (id) => {
          return state.favoritos.some(p => p.id === id)
        }
      },
      actions: {
        toggleFavorito: jest.fn()
      }
    }
  }
})

// Producto de prueba
const productoPrueba = {
  id: 1,
  title: 'Producto de prueba',
  price: 29.99,
  category: 'electrónica',
  image: 'https://fakestoreapi.com/img/test.jpg'
}

describe('ProductCard.vue', () => {
  it('renderiza correctamente el título del producto', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: productoPrueba
      },
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('Producto de prueba')
  })

  it('renderiza correctamente el precio del producto', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: productoPrueba
      },
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('29.99')
  })

  it('renderiza correctamente la categoría del producto', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: productoPrueba
      },
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('electrónica')
  })
})
import { mount } from '@vue/test-utils'
import ProductList from '../components/ProductList.vue'
import { createStore } from 'vuex'

// Creamos un store de prueba que simula un error de API
const crearStore = (error = null, cargando = false) => createStore({
  modules: {
    productos: {
      namespaced: true,
      state: {
        productos: [],
        cargando,
        error
      },
      getters: {
        productosFiltrados: () => [],
        categorias: () => ['Todas'],
        estaCargando: (state) => state.cargando,
        hayError: (state) => state.error
      },
      actions: {
        obtenerProductos: jest.fn()
      }
    },
    filtros: {
      namespaced: true,
      state: {
        categoriaSeleccionada: 'Todas'
      },
      getters: {
        categoriaActual: (state) => state.categoriaSeleccionada
      },
      actions: {
        filtrarPor: jest.fn()
      }
    }
  }
})

describe('ProductList.vue — manejo de errores', () => {
  it('muestra mensaje de error cuando la API falla', () => {
    const store = crearStore('Hubo un problema al cargar los productos. Intenta de nuevo más tarde.')
    const wrapper = mount(ProductList, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('Hubo un problema al cargar los productos')
  })

  it('muestra mensaje de carga cuando está cargando', () => {
    const store = crearStore(null, true)
    const wrapper = mount(ProductList, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('Cargando productos')
  })
})
import axios from 'axios'

const state = {
  productos: [],
  cargando: false,
  error: null
}

const getters = {
  todosLosProductos: (state) => state.productos,
  estaCargando: (state) => state.cargando,
  hayError: (state) => state.error,
  productosFiltrados: (state, getters, rootState) => {
    const categoria = rootState.filtros.categoriaSeleccionada
    if (categoria === 'Todas') {
      return state.productos
    }
    return state.productos.filter(p => p.category === categoria)
  },
  categorias: (state) => {
    const cats = state.productos.map(p => p.category)
    return ['Todas', ...new Set(cats)]
  }
}

const mutations = {
  SET_PRODUCTOS(state, productos) {
    state.productos = productos
  },
  SET_CARGANDO(state, valor) {
    state.cargando = valor
  },
  SET_ERROR(state, mensaje) {
    state.error = mensaje
  }
}

const actions = {
  async obtenerProductos({ commit }) {
    commit('SET_CARGANDO', true)
    commit('SET_ERROR', null)
    try {
      const respuesta = await axios.get('https://fakestoreapi.com/products')
      commit('SET_PRODUCTOS', respuesta.data)
    } catch (err) {
      commit('SET_ERROR', 'Hubo un problema al cargar los productos. Intenta de nuevo más tarde.')
      console.error(err)
    } finally {
      commit('SET_CARGANDO', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
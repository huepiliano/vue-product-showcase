const state = {
  favoritos: []
}

const getters = {
  todosFavoritos: (state) => state.favoritos,
  esFavorito: (state) => (id) => {
    return state.favoritos.some(p => p.id === id)
  },
  totalFavoritos: (state) => state.favoritos.length
}

const mutations = {
  AGREGAR_FAVORITO(state, producto) {
    state.favoritos.push(producto)
  },
  QUITAR_FAVORITO(state, id) {
    state.favoritos = state.favoritos.filter(p => p.id !== id)
  }
}

const actions = {
  toggleFavorito({ commit, state }, producto) {
    const existe = state.favoritos.some(p => p.id === producto.id)
    if (existe) {
      commit('QUITAR_FAVORITO', producto.id)
    } else {
      commit('AGREGAR_FAVORITO', producto)
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
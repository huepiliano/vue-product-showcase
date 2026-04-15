const state = {
  categoriaSeleccionada: 'Todas'
}

const getters = {
  categoriaActual: (state) => state.categoriaSeleccionada
}

const mutations = {
  SET_CATEGORIA(state, categoria) {
    state.categoriaSeleccionada = categoria
  }
}

const actions = {
  filtrarPor({ commit }, categoria) {
    commit('SET_CATEGORIA', categoria)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
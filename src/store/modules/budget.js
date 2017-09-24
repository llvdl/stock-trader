const state = {
  budget: 10000
}

const getters = {
  budget: state => state.budget
}

const mutations = {
  adjustBudget (state, amount) {
    state.budget += amount
  },
  setBudget (state, amount) {
    state.budget = amount
  }
}

export default {
  state,
  getters,
  mutations
}

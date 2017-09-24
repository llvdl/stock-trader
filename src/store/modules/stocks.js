const state = {
  stocks: [
    { name: 'IBM', price: 50},
    { name: 'Microsoft', price: 75},
    { name: 'Apple', price: 80},
    { name: 'Samsung', price: 40}
  ]
}

const actions = {
  nextDay: ({commit, state}) => {
    for (const stock of state.stocks) {
      var percentage = 0;
      for (let i = 0; i < 10; ++i) {
        percentage += (-5 + (Math.random() * 10));
      }

      commit('setStockPrice', {name: stock.name, price: stock.price * (1 + (percentage / 100))})
    }
  }
}

const getters = {
  stocks: state => state.stocks
}

const mutations = {
  setStocks (state, stocks) {
    state.stocks = stocks
  },
  setStockPrice (state, {name, price}) {
    for (const stock of state.stocks) {
      if (stock.name === name) {
        stock.price = price
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

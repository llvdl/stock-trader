const state = {
  stocks: []
}

const getters = {
  portfolio: state => {
    let items = []
    for (const item of state.stocks) {
      items.push(Object.assign({}, item))
    }

    return items
  }
}

const mutations = {
  addToPortfolio(state, {name, quantity}) {
    console.log('name:', name, ' qty:', quantity)

    let stock = state.stocks.find(el => el.name === name)

    if (stock === undefined) {
      stock = {name: name, quantity: 0}
      state.stocks.push(stock)
    }

    stock.quantity += quantity
  },
  removeFromPortfolio(state, {name, quantity}) {
    let stock = state.stocks.find(el => el.name === name)
    stock.quantity -= quantity

    if (stock.quantity < 0) {
      throw 'Negative amount of stocks is not allowed'
    }

    if (stock.quantity === 0) {
      state.stocks.splice(state.stocks.indexOf(stock), 1)
    }
  },
  setPortfolio(state, portfolio) {
    state.stocks = portfolio
  }
}

export default {
  state,
  getters,
  mutations
}

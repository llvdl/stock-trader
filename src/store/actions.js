import Storage from '../storage/storage'

export const buy = ({getters, commit}, payload) => {
  let stock = getters.stocks.find(el => el.name === payload.name)
  let quantity = parseInt(payload.quantity)

  commit('adjustBudget', -(stock.price * quantity))
  commit('addToPortfolio', {name: payload.name, quantity: quantity})
}

export const sell = ({getters, commit}, payload) => {
  let stock = getters.stocks.find(el => el.name === payload.name)
  let quantity = parseInt(payload.quantity)

  commit('adjustBudget', stock.price * quantity)
  commit('removeFromPortfolio', {name: payload.name, quantity: quantity})
}

export const save = ({getters}) => {
  Storage.save({
    budget: getters.budget,
    stocks: getters.stocks,
    portfolio: getters.portfolio
  })
}

export const load = ({commit}) => {
  Storage.load().then(data => {
    if (data === null) {
      return
    }

    commit('setBudget', data.budget)
    commit('setStocks', data.stocks)
    commit('setPortfolio', data.portfolio)
  })
}

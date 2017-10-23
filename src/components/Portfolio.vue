<template>
  <div>
    <p v-if="items.length === 0">Your portfolio is empty. Go to Stocks to buy stocks.</p>
    <portfolio-item
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :quantity="item.quantity"
      :price="item.price"
      @sell="sell(item.name, $event)"
      >
    </portfolio-item>
  </div>
</template>

<script>
  import PortfolioItem from './PortfolioItem.vue'

  export default {
    methods: {
      sell(name, quantity) {
        this.$store.dispatch('sell', {name, quantity})
        this.amount = 0
      }
    },
    computed: {
      items() {
        const portfolio = this.$store.getters.portfolio
        for (const item of portfolio) {
          const stock = this.$store.getters.stockByName(item.name)
          item.price = stock.price
        }

        return this.$store.getters.portfolio
      }
    },
    components: {
      'portfolio-item': PortfolioItem
    }
  }
</script>

<template>
  <div>
    <stock
      v-for="stock in stocks"
      :key="stock.name"
      :name="stock.name"
      :price="stock.price"
      :budget="budget"
      @buy="buy(stock.name, $event)"
    >
    </stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
      computed: {
        stocks() {
          return this.$store.getters.stocks
        },
        budget() {
          return this.$store.getters.budget
        }
      },
      methods: {
        buy(name, quantity) {
          this.$store.dispatch('buy', {name, quantity})
        }
      },
      components: {
        stock: Stock
      }
  }
</script>

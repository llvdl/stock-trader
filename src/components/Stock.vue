<template>
  <div class="panel">
    <header>
      <h1>{{ name }} <small>(Price: {{ price | price }})</small></h1>
    </header>
    <div class="body">
      <input v-model="amount" :class="{error: amount * price > budget}" type="text">
      <button @click="buy">Buy</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'budget'],
    data() {
      return {
        amount: 0
      }
    },
    methods: {
      buy() {
        if (this.amount > 0 && this.amount * this.price <= this.budget) {
          this.$emit('buy', this.amount)
          this.amount = 0
        }
      }
    }
  }
</script>

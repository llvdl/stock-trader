<template>
  <div class="panel">
    <header>
      <h1>{{ name }} <small>(Price: {{ price | price }} | Quantity: {{ quantity }})</small></h1>
    </header>

    <div class="body">
      <input :class="{ error: amount > quantity }" v-model="amount" type="text">
      <button @click="sell()">Sell</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'quantity'],
    data() {
      return {
        amount: 0
      }
    },
    methods: {
      sell() {
        if (this.amount > 0 && this.amount <= this.quantity) {
          this.$emit('sell', this.amount)
        }
      }
    }
  }
</script>

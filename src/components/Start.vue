<template>
  <div>
    <h1>Trade or View your Portfolio</h1>

    <p>You may save or load your data.</p>
    <p>Click on "End day" to begin a new day!</p>

    <hr/>

    <h2>Your funds: {{ budget | price }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      budget() {
          return this.$store.getters.budget
      }
    }
  }
</script>

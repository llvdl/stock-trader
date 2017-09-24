<template>
  <div class="header">
    <h1><router-link :to="{ name: 'home' }" tag="a">Stock Trader</router-link></h1>
    <router-link :to="{ name: 'portfolio' }" tag="a">Portfolio</router-link>
    <router-link :to="{ name: 'stocks' }" tag="a">Stocks</router-link>
    <div class="pull-right">
      <button @click="nextDay">Next Day</button> |
      <button @click="save">Save</button>
      <button @click="load">Load</button> |
      <strong>Funds: {{ budget | price }}</strong>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      nextDay() {
        this.$store.dispatch('nextDay')
      },
      save() {
        this.$store.dispatch('save')
      },
      load() {
        this.$store.dispatch('load')
      }
    },
    computed: {
      budget() {
        return this.$store.getters.budget
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    overflow: hidden;
  }

  a {
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }

  .header {
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #eee;

    padding: 15px;

    a {
      color: #666;
    }

    h1 {
      margin: 0;
      display: inline-block;

      font-size: 144%;
      font-weight: normal;

      a {
        line-height: 18px;
      }
    }

    .pull-right {
      float: right;
      line-height: 2em;
    }
  }

  .separate::after {
    content: '|'
  }
</style>

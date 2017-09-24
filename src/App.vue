<template>
  <div id="app">
    <app-header></app-header>

    <transition
      enter-active-class="animated fadeInDown fast"
      leave-active-class="animated fadeOutUp fast"
      mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import './assets/animate.css'
  import Header from './components/Header.vue'

  export default {
    components: {
      'app-header': Header
    }
  }
</script>

<style lang="scss">
  #app {
    .animated.fast {
      animation-duration: .2s;
    }

    width: 960px;
    margin: 0 auto;

    button {
      border: 1px solid #333;
      background-color: #cdc;
      padding: 4px;
      border-radius: 4px;

      &:hover {
        background-color: #ded;
      }
    }

    input.error {
      background-color: red;
      color: white;
    }

    div.panel {
      display: inline-block;
      box-sizing: border-box;

      width: calc(50% - 8px);
      margin-top: 15px;
      border: 1px solid #333;
      border-radius: 4px;

      &:nth-of-type(even) {
        margin-left: 8px;
      }
      &:nth-of-type(odd) {
        margin-right: 8px;
      }

      header {
        background-color: #cdc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        h1 {
          margin: 0;
          padding: 8px;
          color: #363;
          font-size: 112%;
          font-weidth: bold;
        }
      }

      .body {
        padding: 8px;
      }
    }
  }

  body {
    background-color:#fefefe;
  }


</style>

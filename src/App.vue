<template>
  <div>
    <Button label="Click Me" @onClick="handleClick" />
  </div>
</template>

<script lang="ts">  
  import Vue from 'vue';
  import Button from './components/Buttons/Button.vue';

  export default Vue.extend({
    name: "App",
    components: { Button },
    methods: {
      handleClick() {
        console.log('Clicked from Vite Vue2 app')
      }
    }
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

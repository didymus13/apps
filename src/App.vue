<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

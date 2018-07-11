<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu/MainMenu'
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<template lang="html">
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">Apps!</div>
      <a role="button" class="navbar-burger" :class="{'is-active': isActive}" @click="isActive = !isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
        <router-link :to="{ name: 'math', params: {} }" class="navbar-item">Math for Kids!</router-link>
        <router-link :to="{ name: 'encounter-calculator', params: {} }" class="navbar-item">Encounter Calculator</router-link>
        <router-link :to="{ name: 'initiative-tracker', params: {} }" class="navbar-item">Initiative Tracker</router-link>
      </div>

      <div class="navbar-end">
        <locale-switcher></locale-switcher>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher'

export default {
  components: {
    LocaleSwitcher
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

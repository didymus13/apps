<template lang="html">
  <nav class="navbar">
    <div class="navbar-brand">
      <!-- <div class="navbar-item"> -->
        <navbar-item label="StéphaneDoiron.com" link-name="home"></navbar-item>
      <!-- </div> -->
      <a role="button" class="navbar-burger" :class="{'is-active': menu.isActive}" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': menu.isActive}">
      <div class="navbar-start">
        <navbar-item label="Math for Kids!" link-name="math"></navbar-item>
        <navbar-item label="Encounter Calculator" link-name="encounter-calculator"></navbar-item>
      </div>

      <div class="navbar-end">
        <locale-switcher></locale-switcher>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher'
import NavbarItem from '@/components/MainMenu/NavbarItem'
import {mapMutations, mapState} from 'vuex'

export default {
  components: {
    LocaleSwitcher,
    NavbarItem
  },
  computed: {
    ...mapState(['menu'])
  },
  methods: {
    ...mapMutations(['toggleMenu'])
  }
}
</script>

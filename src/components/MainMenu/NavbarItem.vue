<template>
  <router-link :to="{ name: linkName, params: {} }" class="navbar-item">
    <span @click="closeMenu">
    <slot>{{ label }}</slot>
  </span>
  </router-link>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    linkName: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  },
  methods: {
    ...mapMutations(['closeMenu'])
  }
}
</script>

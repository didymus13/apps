<template lang="html">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" @click="isActive = !isActive" :class="{'is-active': isActive}">{{ $i18n.locale()}}</a>
    <div class="navbar-dropdown">
      <a class="navbar-item" @click="setLocale('en')">English</a>
      <a class="navbar-item" @click="setLocale('fr')">Français</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    setLocale (lang) {
      this.$i18n.set(lang)
    }
  }
}
</script>

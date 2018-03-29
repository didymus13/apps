<template lang="html">
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">Apps!</div>
      <div class="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'math', params: {} }" class="navbar-item">Math for Kids!</router-link>
        <router-link :to="{ name: 'encounter-calculator', params: {} }" class="navbar-item">Encounter Calculator</router-link>
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
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

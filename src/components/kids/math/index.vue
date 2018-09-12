<template lang="html">
  <div id="math">
    <section class="hero is-primary is-medium">
      <div class="hero-body math-hero-photo">
        <div class="container">
          <h1 class="title">
            Math practice for kids!
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li><router-link :to="{ name: 'math-addition', params: {} }">{{ $t('Addition') }}</router-link></li>
              <li><router-link :to="{ name: 'math-subtraction', params: {} }">{{ $t('Subtraction') }}</router-link></li>
              <li><router-link :to="{ name: 'math-multiplication', params: {} }">{{ $t('Multiplication') }}</router-link></li>
              <!-- <li><router-link :to="{ name: 'math-division', params: {} }">Division</router-link></li> -->
              <li><router-link :to="{ name: 'math-config', params: {} }">{{ $t('Config') }}</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <!-- end hero -->

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .math-hero-photo {
    background-image: url('/static/math.jpeg');
    background-size: cover;
  }
</style>

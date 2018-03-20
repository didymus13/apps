<template>
  <section id="config">
    <h1 class="title">{{ $t('Configuration') }}</h1>
    <div class="container">
      <div class="field is-horizontal">
        <label for="minimum" class="label">{{ $t('Minimum') }}</label>
        <div class="control">
          <input type="number" class="input" name="minimum" id="minimum" v-model="numberMin">
        </div>
      </div>

      <div class="field is-horizontal">
        <label for="maximum" class="label">{{ $t('Maximum') }}</label>
        <div class="control">
          <input type="number" class="input" name="maximum" id="maximum" v-model="numberMax">
        </div>
      </div>

      <div class="field">
        <input type="checkbox" name="useTotalForLimit" id="useTotalForLimit" class="switch is-rounded" v-model="useTotalForLimit">
        <label for="useTotalForLimit">{{ $t('useTotalForLimit') }}</label>
      </div>

      <div class="field">
        <input type="checkbox" name="wholeAnswersOnly" id="wholeAnswersOnly" class="switch is-rounded" v-model="wholeAnswersOnly">
        <label for="wholeAnswersOnly">{{ $t('wholeAnswersOnly') }}</label>
      </div>

      <div class="field">
        <input type="checkbox" name="positiveAnswersOnly" id="positiveAnswersOnly" class="switch is-rounded" v-model="positiveAnswersOnly">
        <label for="positiveAnswersOnly">{{ $t('positiveAnswersOnly') }}</label>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapMutations } = createNamespacedHelpers('math')

export default {
  name: 'config',
  computed: {
    ...mapGetters(['isConfigValid']),
    numberMin: {
      get () {
        return this.$store.state.math.config.numberMin
      },
      set (e) {
        this.setConfigItem({field: 'numberMin', value: parseInt(e)})
      }
    },
    numberMax: {
      get () {
        return this.$store.state.math.config.numberMax
      },
      set (e) {
        this.setConfigItem({field: 'numberMax', value: parseInt(e)})
      }
    },
    useTotalForLimit: {
      get () {
        return this.$store.state.math.config.useTotalForLimit
      },
      set (e) {
        this.setConfigItem({field: 'useTotalForLimit', value: e})
      }
    },
    wholeAnswersOnly: {
      get () {
        return this.$store.state.math.config.wholeAnswersOnly
      },
      set (e) {
        this.setConfigItem({field: 'wholeAnswersOnly', value: e})
      }
    },
    positiveAnswersOnly: {
      get () {
        return this.$store.state.math.config.positiveAnswersOnly
      },
      set (e) {
        this.setConfigItem({field: 'positiveAnswersOnly', value: e})
      }
    }
  },
  methods: {
    ...mapMutations(['setConfigItem'])
  }
}
</script>

<template lang="html">
  <div id="character-list">
    <slot></slot>

    <div class="field is-horizontal">
      <div class="field">
        <input type="number" class="input"
          :placeholder="$t('Init')"
          :value="character.init"
          @input="character.init = parseFloat($event.target.value)"/>
      </div>
      <div class="control">
        <input type="text" class="input" v-model="character.name" :placeholder="$t('Name')" />
      </div>

      <div class="control">
        <label for="" class="label">
        <input type="checkbox" name="" id="" class="checkbox" v-model="character.isPc">
        {{ $t('Is PC?') }}
        </label>
      </div>
      <div class="control">
        <button class="button is-primary" @click="add" :disabled="!isValid">{{ $t('Add to initiative')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      character: {}
    }
  },
  computed: {
    isValid () {
      return !!(this.character.name && this.character.init)
    }
  },
  methods: {
    add () {
      if (!this.isValid) {
        return
      }
      this.$emit('add', _.clone(this.character))
      this.reset()
    },
    reset () {
      this.character = {}
    }
  }
}
</script>

<style lang="scss" scoped>
#character-list {
  display: flex;
  flex-direction: column;
}
</style>

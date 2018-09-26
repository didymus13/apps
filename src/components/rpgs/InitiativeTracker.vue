<template lang="html">
  <section class="section">
    <h1 class="title is-1">Initiative Tracker</h1>

    <h2 class="subtitle is-3">
      Round: {{ round }}
      <button class="button is-success" @click="nextPlayer">{{ $t('Next player') }}</button>
    </h2>

    <ul>
      <li v-for="(char, i) in sortedCharacters" :key="i" :class="{'has-text-weight-bold': char.isPc}">
        <span class="fas fa-fw fa-arrow-right" v-show="i == current"></span>
        <span class="fas fa-fw" v-show="i != current"></span>
        {{ char.init }} : {{ char.name }} <span class="delete" @click="remove(char.cuid)"></span>
      </li>
    </ul>

    <div class="field has-addons">
      <div class="control">
        <input type="text" class="input" v-model="character.name" :placeholder="$t('Name')" />
      </div>
      <div class="control">
        <input type="number" class="input"
          :placeholder="$t('Init')"
          :value="character.init"
          @input="character.init = parseFloat($event.target.value)" @keyup.enter="add"/>
      </div>
      <div class="control">
        <label for="" class="label">
        <input type="checkbox" name="" id="" class="checkbox" v-model="character.isPc">
        {{ $t('Is PC?') }}
        </label>
      </div>
      <div class="control">
        <button class="button is-primary" @click="add">{{ $t('Add to initiative')}}</button>
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t('Notes') }}</label>
      <div class="control">
        <textarea class="textarea" v-model="notes" rows="8" cols="80" :placeholder="$t('Put your notes here')"></textarea>
      </div>
    </div>
    <button class="button is-danger" @click="clear">{{ $t('Clear encounter')}}</button>
  </section>
</template>

<script>
import _ from 'lodash'
import cuid from 'cuid'

export default {
  data () {
    return {
      characters: [
        { init: 12, name: 'Mister Tester', isPc: false, cuid: cuid() },
        { init: 23, name: 'Captain Spectacular', isPc: true, cuid: cuid() },
        { init: 9, name: 'Faceless Goon', isPc: false, cuid: cuid() }
      ],
      character: {},
      turn: 0,
      round: 1,
      current: 0,
      notes: ''
    }
  },
  computed: {
    sortedCharacters () {
      let sorted = _.sortBy(this.characters, 'init')
      return _.reverse(sorted)
    }
  },
  methods: {
    add () {
      this.characters.push(_.cloneDeep(this.character))
      this.resetCharacter()
    },
    resetCharacter () {
      this.character = {
        cuid: cuid()
      }
    },
    clear () {
      this.characters = []
    },
    nextPlayer () {
      this.current++
      if (this.current >= this.characters.length) {
        this.current = 0
        this.round++
      }
    },
    remove (cuid) {
      let offset = _.findIndex(this.characters, {cuid: cuid})
      this.characters.splice(offset, 1)
    }
  },
  mounted () {
    this.resetCharacter()
  }
}
</script>

<style lang="scss">

</style>

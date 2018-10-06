<template lang="html">
  <section class="section">
    <h1 class="title is-1">Initiative Tracker</h1>

    <h2 class="subtitle is-3">
      <button class="button is-success" @click="nextPlayer" :title="$t('Next player')">
        <i class="fas fa-step-forward"></i>
      </button>
      Round: {{ round }} ({{ currentPlayer.name }})
    </h2>

    <round-tracker :round="round" :max="20"></round-tracker>

    <character-list @add="characters.push($event)">
      <character v-for="(character, i) in sortedCharacters" :character="character" :is-current="i == current" :key="character.cuid">
      </character>
    </character-list>

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
import RoundTracker from './RoundTracker'
import CharacterList from './CharacterList'
import Character from './Character'

export default {
  components: {
    CharacterList,
    Character,
    RoundTracker
  },
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
      notes: '',
      rounds: _.range(1, 21)
    }
  },
  computed: {
    sortedCharacters () {
      let sorted = _.sortBy(this.characters, 'init')
      return _.reverse(sorted)
    },
    currentPlayer () {
      return _.nth(this.sortedCharacters, this.current)
    }
  },
  methods: {
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

<template>
  <section class="section">
    <div>
      Hero goes here
      <h1 class="title is-1">Starfinder Encounter Calculator</h1>
    </div>

    <div class="columns">
      <!-- Player Character Information -->
      <div class="column">
        <h3 class="subtitle is-3">
          Average Player Level: {{ averagePlayerLevel }}
          <button class="button is-primary is-small" @click="addPlayer">Add player</button>
        </h3>

        <div v-for="(player, i) in players" :key="i">
          <div class="columns">
            <div class="field column">
              <label class="label"># Players</label>
              <div class="control">
                <input type="number" class="input" placeholder="# players" v-model="player.num">
              </div>
            </div>
            <div class="field column">
              <label class="label">for level</label>
              <div class="control">
                <input type="number" class="input" placeholder="level" v-model="player.level">
              </div>
            </div>
            <div class="column">
              <span class="delete" @click="deletePlayer(i)"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <h3 class="subtitle is-3">Encounter Cr: {{ encounterCR }}
          <button class="button is-primary is-small" @click="addMonster">Add Monster</button>
        </h3>
        <!-- Monster Information -->
          <div v-for="(monster, i) in monsters" :key="i">
            <div class="columns">
              <div class="field column">
                <label class="label"># Monsters</label>
                <div class="control">
                  <input type="number" class="input" placeholder="# monsters" v-model="monster.num">
                </div>
              </div>
              <div class="field column">
                <label class="label">for CR</label>
                <div class="control">
                  <input type="number" class="input" placeholder="CR" v-model="monster.cr">
                </div>
              </div>
              <div class="column">
                <span class="delete" @click="deleteMonster(i)"></span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      players: [{num: 1, level: 2}, {num: 3, level: 4}],
      monsters: [{num: 1, cr: 1}, {num: 1, cr: 1}]
    }
  },
  computed: {
    numPlayers () {
      return _.sum(_.map(this.players, 'num'))
    },
    encounterCR () {
      return 99
    },
    averagePlayerLevel () {
      let levels = 0
      _.map(this.players, (player) => {
        levels += player.num * player.level
      })
      return _.round(levels / this.numPlayers)
    }
  },
  methods: {
    addPlayer () {
      this.players.push({num: 1, level: 1})
    },
    deletePlayer (i) {
      this.players.splice(i, 1)
    },
    addMonster () {
      this.monsters.push({num: 1, cr: 1})
    },
    deleteMonster (i) {
      this.monsters.splice(i, 1)
    }
  }
}
</script>

<style>
</style>

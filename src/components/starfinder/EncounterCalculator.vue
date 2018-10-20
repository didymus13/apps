<template>
  <section>
    <section class="hero is-dark is-medium starfinder-bg">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">YASEC</h1>
          <h3 class="subtitle is-3">Yet another Starfinder encounter calculator</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
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

          <!-- Monster Section -->
          <div class="column">
            <h3 class="subtitle is-3">Encounter Cr: {{ encounterCR }} XP: {{ totalXp }}
              <button class="button is-primary is-small" @click="addMonster">Add Monster</button>
              Budget: {{ xpBudget }}
              <div class="select">
                <select v-model="difficulty">
                  <option :value="-1">Easy</option>
                  <option :value="0">Average</option>
                  <option :value="1">Challenging</option>
                  <option :value="2">Hard</option>
                  <option :value="3">Epic</option>
                </select>
              </div>
            </h3>
            <!-- Monster Information -->
            <div v-for="(monster, i) in monsters" :key="i">
              <div class="columns">
                <div class="field column">
                  <label class="label"># Monsters</label>
                  <div class="control">
                    <select class="select" v-model="monster.num">
                      <option v-for="(num, i) in [1, 2, 3, 4, 6, 8, 12, 16]" :value="num" :key="i">
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="field column">
                  <label class="label">of CR</label>
                  <div class="control">
                    <input type="text" class="input" placeholder="CR" v-model="monster.cr">
                  </div>
                  <p class="help">Effective CR: {{ effectiveMonsterCr(monster) }} XP: {{ effectiveMonsterXp(monster) }}</p>
                </div>
                <div class="column">
                  <span class="delete" @click="deleteMonster(i)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import _ from 'lodash'
const xpChart = require('./xpPerCr.json')

export default {
  data () {
    return {
      players: [{num: 4, level: 1}],
      monsters: [{num: 1, cr: '1'}],
      crChart: xpChart,
      difficulty: 0
    }
  },
  computed: {
    numPlayers () {
      return _.sum(_.map(this.players, 'num'))
    },
    xpBudget () {
      let apl = this.averagePlayerLevel > 0 ? this.averagePlayerLevel.toString() : '1/2'
      let i = _.findIndex(this.crChart, { cr: apl })
      let cr = _.nth(this.crChart, i + this.difficulty)
      return cr.xp
    },
    encounterCR () {
      let i = _.findIndex(this.crChart, { xp: this.totalXp })
      let cr = _.nth(this.crChart, i)
      return cr.cr
    },
    totalXp () {
      let total = 0
      _.map(this.monsters, (monster) => {
        total += this.effectiveMonsterXp(monster)
      })
      return total
    },
    averagePlayerLevel () {
      let levels = 0
      _.map(this.players, (player) => {
        levels += player.num * player.level
      })
      let apl = _.round(levels / this.numPlayers)
      if (this.numPlayers < 4) apl--
      if (this.numPlayers >= 6) apl++
      return apl
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
      this.monsters.push({num: 1, cr: '1'})
    },
    deleteMonster (i) {
      this.monsters.splice(i, 1)
    },
    calcCrOffset (num) {
      let offset = 0
      if (num === 1) offset = 0
      if (num >= 2 && num <= 4) offset = num
      if (num === 6) offset = 5
      if (num === 8) offset = 6
      if (num === 12) offset = 7
      if (num === 16) offset = 8
      return offset
    },
    calcEffectiveMonsterCr (monster) {
      let offset = this.calcCrOffset(parseInt(monster.num))
      let i = _.findIndex(this.crChart, {cr: monster.cr})
      return _.nth(this.crChart, i + offset)
    },
    effectiveMonsterCr (monster) {
      let cr = this.calcEffectiveMonsterCr(monster)
      return cr.cr
    },
    effectiveMonsterXp (monster) {
      let cr = this.calcEffectiveMonsterCr(monster)
      return cr.xp
    }
  }
}
</script>

<style lang="scss" scoped>
.starfinder-bg {
  background-position: center;
  background-size: cover;
  background-image: url('/static/starfinder-gm.jpg');
  .title, .subtitle {
    text-shadow: 2px 2px black;
  }
}
</style>

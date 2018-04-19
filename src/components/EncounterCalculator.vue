<template>
  <div id="encounter-calculator">
    <section class="hero is-primary is-medium">
        <div class="hero-body encounter-hero-photo">
            <div class="container">
                <h1 class="title">
                    YAEC: Yet Another Encounter Calculator
                </h1>
                <h2 class="subtitle">
                    for Dungeons and Dragons 5th edition
                </h2>
            </div>
        </div>
    </section>

      <div class="container">
        <div class="columns">
          <!-- Player Character party -->
          <div class="column" id="player-characters">
            <h3>PCs</h3>
              <div class="field has-addons" v-for="(player, index) in players" :key="index">
                <p class="control">
                  <label class="label">Characters</label>
                  <input type="number" class="input" v-model="player.number" placeholder="1">
                </p>
                <p class="control">
                  <label class="label">Level</label>
                  <input type="number" class="input" v-model="player.level" placeholder="level">
                </p>
                <p class="control" v-if="index == 0">
                  <label class="label">Add?</label>
                  <button class="button is-primary" @click="players.push({number: 1, level: 1})">
                    <span class="fa fa-plus"></span>
                  </button>
                </p>
                <p class="control" v-if="players.length > 1">
                  <label class="label">Del?</label>
                  <button class="button is-danger" @click="players.splice(index, 1)">
                    <span class="fa fa-trash"></span>
                  </button>
                </p>
                </div>

                <p>
                  Thresholds:
                  <span class="tag is-success">{{ easyThreshold }}</span>
                  <span class="tag is-warning">{{ mediumThreshold }}</span>
                  <span class="tag is-danger">{{ hardThreshold }}</span>
                  <span class="tag is-black">{{ deadlyThreshold }}</span>
                </p>
              </div>

          <!-- Encounter monsters -->
          <div class="column" id="encounter">
              <h3>Encounter composition</h3>
              <div class="field has-addons" v-for="(monster, index) in monsters" :key="index">
                <p class="control">
                  <label class="label">Monsters</label>
                  <input type="number" class="input" v-model="monster.number" placeholder="1">
                </p>
                <p class="control">
                  <label class="label">XP</label>
                  <input type="number" class="input" v-model="monster.xp" placeholder="XP">
                </p>
                <p class="control" v-if="index == 0">
                  <label class="label">Add</label>
                  <button class="button is-primary" @click="monsters.push({number: 1, xp: 25})">
                    <span class="fa fa-plus"></span>
                  </button>
                </p>
                <p class="control" v-if="monsters.length > 1">
                  <label class="label">Del?</label>
                  <button class="button is-danger" @click="monsters.splice(index, 1)">
                    <span class="fa fa-trash"></span>
                  </button>
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <span class="icon"><span class="fa fa-thermometer"></span></span>
                  Difficulty:
                  <span class="tag" :class="{'is-info': isTrivial, 'is-success': isEasy, 'is-warning': isMedium, 'is-danger': isHard, 'is-black': isDeadly}">
                    {{ encounterDifficulty }} : {{ difficultyQualifier }}
                  </span>
                </div>
                <div class="column"><strong>Award: {{ totalMonsterXp }} XP</strong></div>
              </div>
          </div>
        </div>

        <div>
          <progress class="progress" :class="{'is-info': isTrivial, 'is-success': isEasy, 'is-warning': isMedium, 'is-danger': isHard, 'is-black': isDeadly}" :value="encounterDifficulty" :max="deadlyThreshold">
            {{encounterDifficulty}}
          </progress>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <h2 class="subtitle">Instructions</h2>
          <p>
              The calculator will calculate values on the fly. Just put in the number of characters in the party
            and their levels (You can group them by level if you want). Below the party section you will see
            the calculated threshold values for <span class="tag is-success">easy</span>,
            <span class="tag is-warning">medium</span>, <span class="tag is-danger">hard</span> and
            <span class="tag is-black">deadly</span> encounters.
          </p>
          <p>
            To build the encounter, put in the number of monsters and their respective XP values. The app will calculate
            the XP award given as well as the difficulty of the planned encounter taking into account party size and
            encounter size as well.
          </p>
          <p>
            Below the whole thing is a progress bar that illustrates the relative difficulty between
            <span class="tag is-info">trivial</span> and <span class="tag is-black">deadly</span> encounter
            thresholds for the party.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="subtitle">Credits: </h2>
          <p>This calculator has been heavily inspired by
          <a href="http://dhmstark.co.uk/rpgs/encounter-calculator-5th/">http://dhmstark.co.uk/rpgs/encounter-calculator-5th/</a>.
          I've been using that for years. I needed to learn Vuejs so I decided to implement my own version of his/her
          fine utility.
          </p>
          <p>
              And of course, without <a href="http://dnd.wizards.com/dungeons-and-dragons">Dungeons and Dragons 5th
              edition</a>, there would be no Encounter Calculator.
          </p>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      players: [
        {number: 1, level: 1}
      ],
      monsters: [
        {number: 1, xp: 25}
      ],
      thresholds: [
        {level: 1, easy: 25, medium: 50, hard: 75, deadly: 100},
        {level: 2, easy: 50, medium: 100, hard: 150, deadly: 200},
        {level: 3, easy: 75, medium: 150, hard: 225, deadly: 400},
        {level: 4, easy: 125, medium: 250, hard: 375, deadly: 500},
        {level: 5, easy: 250, medium: 500, hard: 750, deadly: 1100},
        {level: 6, easy: 300, medium: 600, hard: 900, deadly: 1400},
        {level: 7, easy: 350, medium: 750, hard: 1100, deadly: 1700},
        {level: 8, easy: 450, medium: 900, hard: 1400, deadly: 2100},
        {level: 9, easy: 550, medium: 1100, hard: 1600, deadly: 2400},
        {level: 10, easy: 600, medium: 1200, hard: 1900, deadly: 2800},
        {level: 11, easy: 800, medium: 1600, hard: 2400, deadly: 3600},
        {level: 12, easy: 1000, medium: 2000, hard: 3000, deadly: 4500},
        {level: 13, easy: 1100, medium: 2200, hard: 3400, deadly: 5100},
        {level: 14, easy: 1250, medium: 2500, hard: 3800, deadly: 5700},
        {level: 15, easy: 1400, medium: 2800, hard: 4300, deadly: 6400},
        {level: 16, easy: 1600, medium: 3200, hard: 4800, deadly: 7200},
        {level: 17, easy: 2000, medium: 3900, hard: 5900, deadly: 8800},
        {level: 18, easy: 2100, medium: 4200, hard: 6300, deadly: 9500},
        {level: 19, easy: 2400, medium: 4900, hard: 7300, deadly: 10900},
        {level: 20, easy: 2800, medium: 5700, hard: 8500, deadly: 12700}
      ]
    }
  },
  methods: {
    calculateThresholds (difficulty) {
      let t = this.thresholds
      let total = 0
      this.players.forEach(function (player) {
        total += t[player.level - 1][difficulty] * player.number
      })
      return total
    }
  },
  computed: {
    // Calculated encounter Difficulty
    encounterDifficulty () {
      return parseInt(this.encounterMultiplier * this.totalMonsterXp)
    },
    totalMonsterXp () {
      let total = 0
      this.monsters.forEach(function (monster) {
        total = total + monster.number * monster.xp
      })
      return total
    },
    numberOfMonsters () {
      let total = 0
      this.monsters.forEach(function (monster) {
        total += parseInt(monster.number)
      })
      return total
    },
    encounterMultiplier () {
      let offset = this.partySizeOffset
      let multipliers = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
      if (this.numberOfMonsters <= 1) return multipliers[1 + offset]
      if (this.numberOfMonsters === 2) return multipliers[2 + offset]
      if (this.numberOfMonsters >= 3 && this.numberOfMonsters <= 6) return multipliers[3 + offset]
      if (this.numberOfMonsters >= 7 && this.numberOfMonsters <= 10) return multipliers[4 + offset]
      if (this.numberOfMonsters >= 11 && this.numberOfMonsters <= 14) return multipliers[5 + offset]
      return multipliers[6 + offset]
    },
    partySizeOffset () {
      if (this.partySize < 3) return 1
      if (this.partySize > 5) return -1
      return 0
    },
    partySize () {
      let total = 0
      this.players.forEach(function (player) {
        total += parseInt(player.number)
      })
      return total
    },
    // Player Threshold Calculator
    easyThreshold () {
      return this.calculateThresholds('easy')
    },
    mediumThreshold () {
      return this.calculateThresholds('medium')
    },
    hardThreshold () {
      return this.calculateThresholds('hard')
    },
    deadlyThreshold () {
      return this.calculateThresholds('deadly')
    },
    // Encounter difficulty checks
    isTrivial () {
      return this.encounterDifficulty < this.easyThreshold
    },
    isEasy () {
      return this.easyThreshold <= this.encounterDifficulty && this.encounterDifficulty < this.mediumThreshold
    },
    isMedium () {
      return this.mediumThreshold <= this.encounterDifficulty && this.encounterDifficulty < this.hardThreshold
    },
    isHard () {
      return this.hardThreshold <= this.encounterDifficulty && this.encounterDifficulty < this.deadlyThreshold
    },
    isDeadly () {
      return this.encounterDifficulty >= this.deadlyThreshold
    },
    difficultyQualifier () {
      if (this.isTrivial) return 'trivial'
      if (this.isEasy) return 'easy'
      if (this.isMedium) return 'medium'
      if (this.isHard) return 'hard'
      return 'deadly'
    }
  }
}
</script>

<style lang="scss" scoped>
  .encounter-hero-photo {
    background-image: url('/static/dnd_header.jpg');
    background-size: cover;
  }
</style>

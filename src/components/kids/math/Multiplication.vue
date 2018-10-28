<template lang="html">
  <div id="multiplication">
    <h1 class="title">{{ $t('Multiplication') }}</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        {{ this.problem.number1 }} x {{ this.problem.number2 }} =
      </div>
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <input type="number" name="answer" id="answer" class="input" v-model="answer" @keyup.enter="verify">
          </p>
          <p class="control">
            <button class="button is-primary" @click="verify">{{ $t('Answer') }}</button>
          </p>
        </div>
      </div>
    </div>
    <answer-result v-show="hasAnswers" />
    <progress-bar v-show="hasAnswers" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ProgressBar from './ProgressBar'
import AnswerResult from './AnswerResult'
const _ = require('lodash')
const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('math')

export default {
  components: {
    ProgressBar,
    AnswerResult
  },

  data () {
    return {
      answer: ''
    }
  },

  computed: {
    ...mapState(['problem', 'config', 'progress']),
    ...mapGetters(['hasAnswers', 'percentCorrect']),
    solution () {
      return this.problem.number1 * this.problem.number2
    }
  },

  methods: {
    ...mapActions(['checkAnswer']),
    ...mapMutations(['setProblem']),
    createProblem () {
      this.setProblem({
        number1: this.config.forcedNumber ? this.config.forcedNumber : _.random(this.config.numberMin, this.config.numberMax),
        number2: _.random(this.config.numberMin, this.config.numberMax)
      })
    },
    verify () {
      this.checkAnswer({answer: this.answer, solution: this.solution})
      this.createProblem()
      this.resetForm()
    },
    resetForm () {
      this.answer = ''
    }
  },

  mounted () {
    this.createProblem()
  }
}
</script>

export default {
  namespaced: true,
  state: {
    result: {
      wasCorrect: false,
      correct: 0,
      total: 0
    },
    problem: {
      number1: 0,
      number2: 0
    },
    config: {
      numberMin: 0,
      numberMax: 12,
      forcedNumber: null,
      useTotalForLimit: true,
      wholeAnswersOnly: true,
      positiveAnswersOnly: true
    }
  },

  getters: {
    isConfigValid: state => {
      return state.config.numberMin <= state.config.numberMax
    },
    percentCorrect: (state, getters) => {
      if (!getters.hasAnswers) {
        return 0
      }
      let percent = state.result.correct / state.result.total * 100
      return Math.round(percent)
    },
    hasAnswers: state => {
      return state.result.total > 0
    },
    isCorrect: state => {
      return state.result.wasCorrect
    }
  },

  actions: {
    checkAnswer: ({commit}, {answer, solution}) => {
      let isCorrect = Number(answer) === Number(solution)
      commit('setWasCorrect', isCorrect)
      if (isCorrect) {
        commit('incrementCorrect')
      }
      commit('incrementTotal')
    }
  },

  mutations: {
    setConfigItem (state, {field, value}) {
      state.config[field] = value
    },
    setProblem (state, value) {
      state.problem = value
    },
    incrementCorrect (state) {
      state.result.correct++
    },
    incrementTotal (state) {
      state.result.total++
    },
    setWasCorrect (state, value) {
      state.result.wasCorrect = value
    },
    setForcedNumber (state, value) {
      state.forcedNumber = value > 0 ? value : ''
    }
  }
}

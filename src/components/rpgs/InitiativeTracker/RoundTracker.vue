<template>
  <ul class="rounds">
    <li class="round" v-for="num in rounds" :key="num" :class="{'is-active': num == round}">
      {{ num }}
    </li>
  </ul>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    round: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 20
    }
  },
  computed: {
    rounds () {
      return _.range(1, this.max + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.rounds {
  float: right;
  width: 2rem;
  display: flex;
  flex-direction: column;

  .round {
    border: 1px solid grey;
    text-align: center;

    &.is-active {
      background-color: cyan;
    }
  }
}
</style>

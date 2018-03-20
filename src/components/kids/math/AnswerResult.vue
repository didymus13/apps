<template lang="html">
    <span :class="{'has-text-success': isCorrect, 'has-text-danger': !isCorrect}">
      <span class="fas fa-10x" :class="{'fa-thumbs-up': isCorrect, 'fa-thumbs-down': !isCorrect}"></span>
    </span>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapGetters} = createNamespacedHelpers('math')

export default {
  computed: {
    ...mapGetters(['isCorrect'])
  }
}
</script>

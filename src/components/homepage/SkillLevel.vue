<template>
  <div class="level">
    <div class="level-item">{{ label }}</div>
    <div class="level-item">
      <progress class="progress is-small" :value="value" :max="max">{{ percent }}%</progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 100
    }
  },
  computed: {
    percent () {
      return this.value / this.max * 100
    }
  }
}
</script>

<template lang="html">
  <div class="character" :class="{'is-pc': character.isPc, 'is-npc': character.isNpc, 'is-active': isCurrent}">
    <div class="init">{{ character.init }}</div>
    <div class="name">{{ character.name }}</div>
    <div class="">
      <button class="button is-danger"  @click="$emit('remove', character.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.character {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 3rem;
  line-height: 3rem;
  background-color: orange;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  &.is-pc {
    background-color: cyan;
  }
  &.is-npc {
    background-color: blue;
  }
  .init {
    transition: 0.3s;
    border: 1px solid black;
    border-radius: 999px;
    background-color: white;
    width: 3rem;
    height: 3rem;
    text-align: center;
    margin-right: 1rem;
    background-color: darken(white, 10%);
  }
  &.is-active {
    .init {
      background: white;
      font-weight: bold;
    }
  }
}
</style>

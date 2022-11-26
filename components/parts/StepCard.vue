<template lang="pug">
.step-card
  .step-left
    .step-number step{{ stepNumber }}
    .step-image
  .step-right
    .step-text
      p(v-for="text in stepTexts" :key="text") {{ text }}
</template>

<script setup lang="ts">
interface Props {
  stepNumber: number,
  stepTexts: string[],
}

const Props = withDefaults(defineProps<Props>(), {
  stepNumber: 1,
  stepTexts: () => [],
})
</script>

<style lang="sass" scoped>
.step-card
  display: flex
  align-items: center
  background-color: lightgrey
  padding: 10px 20px
  margin-bottom: 10px
  .step-left
    position: relative
    margin-right: 15px
    .step-number
      font-size: 12px
      font-weight: bold
      background-color: white
      padding: 13px 3px
      border-radius: 50%
      position: absolute
      top: -5px
      left: -15px
    .step-image
      width: 100px
      height: 80px
      background-color: $base-grey
      background-size: cover
      background-position: center center
  .step-right
    .step-text
      font-size: 14px
      font-weight: bold
      text-align: left
      white-space: nowrap
</style>
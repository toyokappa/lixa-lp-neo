<template lang="pug">
.cta-btn-line
  .btn-area
    .btn-text
      .first-text
        div
          span.emphasis-lg LINE
          span で
        div
          span 申し込む
      .second-text
        .d-flex.align-items-center
          span.emphasis-circle.me-1 簡単
          div
            span.emphasis-md 30
            span 秒で完了！
</template>

<style lang="sass" scoped>
.cta-btn-line
  text-align: center
  letter-spacing: 0.05em
  .btn-area
    width: 340px
    height: 110px
    background: $green-gradient
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border-radius: 10px
    position: relative
    margin: 0 auto
    .btn-text
      .emphasis-lg
        font-size: 48px
        color: #ffe0a4
      .emphasis-md
        font-size: 24px
      .emphasis-circle
        font-size: 12px
        color: white
        background-color: black
        text-shadow: none
        padding: 4px 6px
        border-radius: 100%
        border: 1px white solid
      .first-text
        color: white
        font-size: 24px
        font-weight: bold
        line-height: 1.25
        text-align: center
        text-shadow: $text-border-green
        width: 100%
        position: absolute
        top: -20px
        right: 50%
        transform: translateX(50%)
      .second-text
        font-size: 14px
        font-weight: bold
        text-shadow: $text-border-white
        position: absolute
        top: 70px
        right: 50%
        transform: translateX(50%)
</style>
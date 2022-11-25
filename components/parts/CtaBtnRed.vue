<template lang="pug">
.cta-btn-red
  .btn-area
    .btn-text
      .first-text
        div
          span.emphasis-lg 無料体験
          span に
        div
          span 申し込む
      .second-text
        .d-flex.align-items-center
          span.emphasis-circle.me-1 簡単
          div
            span.emphasis-md 30
            span 秒で完了！
    .instructor-photo
  .bubble-area
    .bubble-text 無理な勧誘は一切ナシ！相談だけでもOK！
</template>

<style lang="sass" scoped>
.cta-btn-red
  text-align: center
  letter-spacing: 0.05em
  .btn-area
    width: 340px
    height: 110px
    background: linear-gradient(180deg, #FF7B7B 0%, #F43939 44.27%, #F43939 100%)
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
        text-shadow:1px 1px 0 $accent-color, -1px -1px 0 $accent-color, -1px 1px 0 $accent-color, 1px -1px 0 $accent-color, 0px 1px 0 $accent-color,  0-1px 0 $accent-color, -1px 0 0 $accent-color, 1px 0 0 $accent-color
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
    .instructor-photo
      width: 70px
      height: 70px
      background-color: $base-grey
      border: 3px solid $accent-color
      border-radius: 50%
      position: absolute
      bottom: -8px
      left: -8px
  .bubble-area
    font-size: 15px
    font-weight: bold
    display: inline-block
    padding: 5px 10px
    border: 2px solid black
    border-radius: 10px
    margin: 20px 0 0
    position: relative
    &:before, &:after
      border: solid transparent
      position: absolute
      bottom: 100%
      content: ""
    &:before
      left: 16px
      border-top-width: 6px
      border-bottom-width: 6px
      border-left-width: 3px
      border-right-width: 3px
      border-bottom-color: white
      z-index: 2
    &:after
      left: 14px
      border-top-width: 10px
      border-bottom-width: 10px
      border-left-width: 5px
      border-right-width: 5px
      border-bottom-color: black
      z-index: 1
</style>
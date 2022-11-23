<template lang="pug">
.cta-btn-green
  .bubble-orange
    .bubble-text まずは
  .main-text
    span.emphasis-orange 無料
    span 体験
  .bubble-white-left
    .bubble-text
      p 体組成計で
      p.emphasis-orange 今のカラダの傾向
      p がわかる
  .bubble-white-center
    .bubble-text
      p カウンセリングで
      p.emphasis-orange アナタに最適な
      p
        span.emphasis-orange プラン
        span がわかる
  .bubble-white-right
    .bubble-text
      p トレーニング
      p
        span 体験で
        span.emphasis-orange LIXAの良さ
      p がわかる
  .btn-box
    .btn-area
      .first-text
        span.emphasis-yellow 無料体験
        span の
        div お申し込みはこちら！
      .second-text.me-3
        .emphasis-circle.me-1 簡単
        div
          span.emphasis-md 30
          span 秒
      .triangle-right.ms-auto
    .d-flex.align-items-center
      img
      span 相談だけでもOK！
    .d-flex.align-items-center
      img
      span 無理な勧誘は一切行いません！
</template>

<style lang="sass" scoped>
.cta-btn-green
  text-align: center
  letter-spacing: 0.05em
  .main-text
    font-size: 48px
    font-weight: bold
  .emphasis-orange
    color: $emphasis-orange
  .btn-box
    .btn-area
      background: linear-gradient(180deg, #9FF05F 0%, #1BAC3B 33.33%)
      width: 320px
      padding: 5px
      border-radius: 36px
      display: flex
      align-items: center
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      .first-text
        text-align: left
        font-size: 14px
        font-weight: bold
        color: white
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25)
        order: 2
        .emphasis-yellow
          font-size: 24px
          color: $emphasis-yellow
      .second-text
        font-size: 12px
        font-weight: bold
        color: $emphasis-orange
        background-color: white
        height: 57px
        padding: 5px
        border-radius: 36px
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25)
        display: flex
        align-items: center
        order: 1
        .emphasis-circle
          width: 36px
          height: 36px
          color: white
          background-color: $emphasis-orange
          border-radius: 50%
          display: flex
          align-items: center
          justify-content: center
        .emphasis-md
          font-size: 24px
      .triangle-right
        content: ""
        height: 12px
        border: 12px solid transparent
        border-left: 12px solid white
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))
        order: 3
</style>
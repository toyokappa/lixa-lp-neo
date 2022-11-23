<template lang="pug">
.cta-btn-green
  .main-text
    span.emphasis-orange 無料
    span 体験
    .bubble-orange
      img.bubble-image(src="@/assets/images/bubble_orange.png")
      .bubble-text まずは
  .bubble-area
    .bubble-white
      img.bubble-image(src="@/assets/images/bubble_white_left.png")
      .bubble-text
        p 体組成計で
        p.emphasis-orange 今のカラダの傾向
        p がわかる
    .bubble-white
      img.bubble-image(src="@/assets/images/bubble_white_center.png")
      .bubble-text
        p カウンセリングで
        p.emphasis-orange アナタに最適な
        p
          span.emphasis-orange プラン
          span がわかる
    .bubble-white
      img.bubble-image(src="@/assets/images/bubble_white_right.png")
      .bubble-text
        p トレーニング
        p
          span 体験で
          span.emphasis-orange LIXAの良さ
        p がわかる
  .btn-box
    .btn-area.mb-3
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
    .check-area.d-flex.justify-content-center
      div
        .check-list.d-flex.align-items-center.mb-2
          img.check.me-2(src="@/assets/images/check.png")
          span.text 相談だけでもOK！
        .check-list.d-flex.align-items-center
          img.check.me-2(src="@/assets/images/check.png")
          span.text 無理な勧誘は一切行いません！
</template>

<style lang="sass" scoped>
.cta-btn-green
  text-align: center
  letter-spacing: 0.05em
  background-color: #FFE7B8
  padding: 60px 0 30px
  .main-text
    font-size: 48px
    font-weight: bold
    position: relative
    .bubble-orange
      position: absolute
      top: -58px
      left: 50px
      .bubble-image
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))
        height: 50px
        width: auto
      .bubble-text
        color: white
        font-size: 14px
        font-weight: bold
        width: 100%
        position: absolute
        top: 28px
        left: 50%
        transform: translateX(-50%)
  .emphasis-orange
    color: $emphasis-orange
  .bubble-area
    display: flex
    justify-content: center
    .bubble-white
      position: relative
      z-index: 1
      &:nth-child(2)
        margin: 0 3px
      .bubble-image
        width: 120px
        height: auto
      .bubble-text
        font-size: 12px
        font-weight: bold
        width: 100%
        position: absolute
        bottom: 10px
        left: 50%
        transform: translateX(-50%)
  .btn-box
    width: 350px
    padding: 45px 0 20px
    background-color: white
    border-radius: 10px
    margin: -30px auto 0
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))
    z-index: 1
    .btn-area
      background: linear-gradient(180deg, #9FF05F 0%, #1BAC3B 33.33%)
      width: 320px
      padding: 5px
      border-radius: 36px
      display: flex
      align-items: center
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      margin: 0 auto
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
    .check-list
      .check
        height: 16px
        width: auto
      .text
        font-size: 14px
        font-weight: bold
</style>
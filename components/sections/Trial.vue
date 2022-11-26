<template lang="pug">
parts-gold-title
  p.caption その前に、あなたの人生を変える
  p.emphasis-md 無料体験のご案内
section#trial
  .emphasis-md.mb-2 無料体験では何をやる？
  .caption.mb-2 60分間で下記の3ステップを体験いただきます。
  .container.step-section
    .step-card
      .step-left
        .step-number step1
        .step-image
      .step-right
        .step-text
          p 体組成計で
          p アナタの今のカラダの
          p 状態をチェック
    .step-card
      .step-left
        .step-number step2
        .step-image
      .step-right
        .step-text
          p カウンセリングで
          p アナタに最適なトレーニング
          p プランをご提案
    .step-card
      .step-left
        .step-number step3
        .step-image
      .step-right
        .step-text
          p 女子トレーナーと実際の
          p トレーニングを行い
          p LIXAの良さを体感
  .container.campaign-section
    parts-campaign-card
  parts-cta-btn-red
</template>

<style lang="sass" scoped>
.caption
  font-size: 14px
.emphasis-md
  font-size: 20px
  font-weight: bold
.emphasis-lg
  font-size: 36px
#trial
  text-align: center
  letter-spacing: 0.05em
  padding: 30px 0
  .step-section
    margin-bottom: 30px
    .step-card
      display: flex
      align-items: center
      background-color: lightgrey
      padding: 10px 20px
      margin-bottom: 10px
      .step-left
        position: relative
        margin-right: 20px
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
  .campaign-section
    margin-bottom: 40px
    .campaign-card
      background-color: $dark-color
      padding: 30px 0 20px
      .campaign-card-text
        background: $gold-gradient
        background-clip: text
        -webkit-text-fill-color: transparent
</style>
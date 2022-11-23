<template lang="pug">
section#trainers
  h2.section-title
    p アナタとトレーニングを共にする
    p.emphasis-md
      span.emphasis-yellow 女子トレーナー
      span たち
  .container.mb-4
    .trainer-list.row.g-3
      .col-6
        .trainer
          .name YUKI
      .col-6
        .trainer
          .name HAZUKI
      .col-6
        .trainer
          .name MARIA
      .col-6
        .trainer
          .name MARINA
  h3.cta-text
    p 彼女たちと楽しく
    p トレーニングしませんか？
  parts-cta-btn-red
</template>

<style lang="sass" scoped>
#trainers
  padding-bottom: 30px
  letter-spacing: 0.05em
  .section-title
    font-size: 12px
    font-weight: bold
    text-align: center
    line-height: 1.4
    color: white
    background-color: $accent-color
    width: 100%
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)
    padding: 20px
    margin-bottom: 30px
    .emphasis-md
      font-size: 16px
    .emphasis-yellow
      color: $emphasis-yellow
  .trainer-list
    .trainer
      width: 100%
      height: 200px
      background-color: $base-grey
      position: relative
      .name
        font-size: 16px
        font-weight: bold
        position: absolute
        bottom: 7px
        left: 14px
  .cta-text
    font-size: 16px
    font-weight: bold
    text-align: center
    line-height: 1.4
    margin-bottom: 30px
</style>
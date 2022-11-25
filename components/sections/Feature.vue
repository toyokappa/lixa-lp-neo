<template lang="pug">
section#feature
  .section-title
    p
      span トレーニングは
      span.emphasis-red 週2回
    p
      span 女子トレーナーと
      span.emphasis-red 楽しく60分
  .container
    .feature-section
      .feature-box
        .feature-image
        .feature-title 女子トレーナーが密着指導
      .feature-detail 所属トレーナーは女子のみ！正しいフォームを密着指導！女子目線でモテるカラダ作りを徹底的にアドバイスします。
    .feature-section
      .feature-box
        .feature-image
        .feature-title 個室なので気にせず通える
      .feature-detail 予約制の完全個室なのでプライベートな空間で安心してご利用いただけます。感染対策もバッチリなのでご安心ください。
    .feature-section
      .feature-box
        .feature-image
        .feature-title 初心者向けのプログラムも充実
      .feature-detail 筋トレを全くやったことがない！という方でも安心して通えるよう、初心者向けのプログラムもご用意しております。
</template>

<style lang="sass" scoped>
#feature
  color: white
  letter-spacing: 0.05em
  background-color: $dark-color
  padding: 30px 0 10px
  .section-title
    font-size: 20px
    font-weight: bold
    text-decoration: underline
    text-underline-offset: 6px
    text-align: center
    line-height: 1.8
    margin-bottom: 20px
  .emphasis-red
    color: $accent-color
  .feature-section
    font-size: 14px
    margin-bottom: 20px
    .feature-box
      margin-bottom: 10px
      .feature-image
        height: 200px
        background-color: $base-grey
        border: 2px solid $accent-color
      .feature-title
        font-weight: bold
        text-align: center
        color: white
        background-color: $accent-color
        padding: 10px 0

</style>
<template lang="pug">
section#hero
  .hero-area
    .hero-image
    h1.main-copy
      div.copy-lg 群馬初！
      div 男性人気No.1！
      div 美女が教えるパーソナルジム
      div 前橋下石倉にグランドオープン！
  parts-cta-btn-red
</template>

<style lang="sass" scoped>
#hero
  padding-bottom: 30px
  .hero-area
    position: relative
    margin-bottom: 36px
    .hero-image
      width: 100%
      height: 300px
      background-color: $base-grey
    .main-copy
      font-size: 20px
      font-weight: bold
      text-align: right
      line-height: 1.5
      padding: 0 5px
      position: absolute
      right: 0
      bottom: 0
      .copy-lg
        font-size: 32px
    @media (min-width: $pc-width)
      .hero-image
        height: 640px
      .main-copy
        font-size: 36px
        text-align: left
        top: 0
        left: 0
        .copy-lg
          font-size: 54px
</style>
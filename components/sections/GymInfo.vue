<template lang="pug">
section#gymInfo
  .container
    .section-title.text-center.mb-3 店舗情報
    .title 営業時間
    .content.mb-3 7:00〜22:00
    .title 住所
    .content.mb-4
      p 〒371-0842
      p 群馬県前橋市下石倉町12-4
      p AZBL BOXを利用
      p.caption.mt-1 ※ ご予約なしでのご来店はお控えくださいませ。
  .map
</template>

<style lang="sass" scoped>
#gymInfo
  color: white
  background-color: $dark-color
  padding: 30px 0 0
  .section-title
    font-size: 20px
    font-weight: bold
  .title
    font-size: 14px
    font-weight: bold
    margin-bottom: 5px
  .content
    font-size: 14px
  .caption
    font-size: 12px
  .map
    height: 240px
    background-color: $base-grey
</style>
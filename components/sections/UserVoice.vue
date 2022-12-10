<template lang="pug">
parts-gold-title
  .emphasis-md 体験者の声
section#userVoice
  .container
    .row.g-4
      .col-12
        .user-card
          .user-card-header
            .user-icon
            .user-info
              span.value 男性M
              span.unit さん(43歳)
          .user-card-body
      .col-12
        .user-card
          .user-card-header
            .user-icon
            .user-info
              span.value 男性M
              span.unit さん(43歳)
          .user-card-body
      .col-12
        .user-card
          .user-card-header
            .user-icon
            .user-info
              span.value 男性M
              span.unit さん(43歳)
          .user-card-body
</template>

<style lang="sass" scoped>
.emphasis-md
  font-size: 20px
#userVoice
  letter-spacing: 0.05em
  background-color: $dark-color
  padding: 30px 0
  .user-card
    background-color: white
    padding: 20px
    border-radius: 5px
    .user-card-header
      display: flex
      align-items: center
      justify-content: center
      .user-icon
        height: 40px
        width: 40px
        background-color: $base-grey
        border-radius: 50%
        margin-right: 10px
      .user-info
        font-weight: bold
        .value
          font-size: 16px
        .unit
          font-size: 12px
@media screen and (min-width: $pc-width)
  .emphasis-md
    font-size: 32px
  #userVoice
    .user-card
      width: 600px
      padding: 20px
      border-radius: 5px
      margin: 0 auto
      .user-card-header
        .user-icon
          height: 60px
          width: 60px
        .user-info
          .value
            font-size: 20px
          .unit
            font-size: 16px
</style>
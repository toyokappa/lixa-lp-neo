<template lang="pug">
parts-gold-title 体験者の声
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
</style>
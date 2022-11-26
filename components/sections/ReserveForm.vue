<template lang="pug">
section#reserveForm
  .cta-form
    .section-area
    .section-text
      .first-text
        div
          span.emphasis-lg フォーム
          span で
        div
          span 申し込む
      .second-text
        .d-flex.align-items-center
          span.emphasis-circle.me-1 簡単
          div
            span.emphasis-md 30
            span 秒で完了！
  .container
    form
      .mb-4
        label.form-label(for="reserveName")
          span.me-2 お名前
          span.badge.bg-original 必須
        input#reserveName.form-control(
          type="text"
          :class="{ 'is-invalid:': false }"
        )
      .mb-4
        label.form-label(for="reserveEmail")
          span.me-2 メールアドレス
          span.badge.bg-original 必須
        input#reserveName.form-control(
          type="email"
          :class="{ 'is-invalid:': false }"
        )
      .mb-4
        label.form-label(for="reserveDate1")
          span.me-2 体験希望日時
          span.badge.bg-original 必須
        input#reserveDate1.form-control.mb-2(
          type="text"
          :class="{ 'is-invalid:': false }"
          placeholder="第1希望日"
        )
        input#reserveDate2.form-control.mb-2(
          type="text"
          :class="{ 'is-invalid:': false }"
          placeholder="第2希望日"
        )
        input#reserveDate3.form-control(
          type="text"
          :class="{ 'is-invalid:': false }"
          placeholder="第3希望日"
        )
      .mb-4
        label.form-label(for="reserveMessage") ご質問など
        textarea#reserveMessage.form-control(
          rows="5"
        )
      .mb-4
        .form-check
          input#reservePolicy.form-check-input(
            type="checkbox"
            :class="{ 'is-invalid:': false }"
          )
          label.form-check-label(for="reservePolicy")
            a.policy-link(
              href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
              target="_blank"
              rel="noopener"
            ) プライバシーポリシー
            span に同意します。
      .btn-complete
        .btn-area 上記の内容で申し込む
</template>

<style lang="sass" scoped>
#reserveForm
  padding: 30px 0
  .bg-original
    background-color: $accent-color
  .cta-form
    text-align: center
    letter-spacing: 0.05em
    margin-bottom: 20px
    position: relative
    .section-area
      width: 100%
      height: 120px
      background: linear-gradient(180deg, #A7D5FF 0%, #68B3F9 39.58%)
      clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)
      padding: 20px
      position: relative
    .section-text
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
        text-shadow: 1px 1px 0 #68B3F9, -1px -1px 0 #68B3F9, -1px 1px 0 #68b3f9, 1px -1px 0 #68b3f9, 0px 1px 0 #68b3f9,  0-1px 0 #68b3f9, -1px 0 0 #68b3f9, 1px 0 0 #68b3f9
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
  .policy-link
    color: $accent-color
    text-decoration: none
  .btn-complete
    text-align: center
    letter-spacing: 0.05em
    .btn-area
      font-size: 24px
      font-weight: bold
      color: white
      background: $green-gradient
      width: 100%
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      border-radius: 10px
      padding: 10px
</style>
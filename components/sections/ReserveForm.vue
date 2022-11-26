<template lang="pug">
section#reserveForm
  parts-cta-section-blue
  .container
    form
      .mb-4
        label.form-label(for="reserveName")
          span.me-2 お名前
          span.badge.bg-original 必須
        input#reserveName.form-control(
          type="text"
          v-model="name"
          name="name"
          :class="{ 'is-invalid': nameError }"
        )
        .invalid-feedback(v-if="nameError") {{ nameError }}
      .mb-4
        label.form-label(for="reserveEmail")
          span.me-2 メールアドレス
          span.badge.bg-original 必須
        input#reserveName.form-control(
          type="email"
          v-model="email"
          name="email"
          :class="{ 'is-invalid': emailError }"
        )
        .invalid-feedback(v-if="emailError") {{ emailError }}
      .mb-4
        label.form-label(for="reserveDate1")
          span.me-2 体験希望日時
          span.badge.bg-original 必須
        .input-group.mb-2
          select.form-select(
            v-model="date1Month"
            name="date1Month"
            :class="{ 'is-invalid': monthError }"
          )
            option(
              v-for="month in months"
              :key="month + '月'"
              :value="month"
            ) {{ month }}
          span.input-group-text 月
          select.form-select(
            v-model="date1Day"
            name="date1Day"
            :class="{ 'is-invalid': dayError }"
          )
            option(
              v-for="day in days"
              :key="day + '日'"
              :value="day"
            ) {{ day }}
          span.input-group-text 日
          select.form-select(
            v-model="date1Hour"
            name="date1Hour"
            :class="{ 'is-invalid': hourError }"
          )
            option(
              v-for="hour in hours"
              :key="hour + '時'"
              :value="hour"
            ) {{ hour }}
          span.input-group-text 時
        .invalid-feedback(v-if="monthError") {{ monthError }}
        .invalid-feedback(v-if="dayError") {{ dayError }}
        .invalid-feedback(v-if="hourError") {{ hourError }}
        .input-group.mb-2
          select.form-select(
            v-model="date2Month"
            name="date2Month"
          )
            option(
              v-for="month in months"
              :key="month + '月'"
              :value="month"
            ) {{ month }}
          span.input-group-text 月
          select.form-select(
            v-model="date2Day"
            name="date2Day"
          )
            option(
              v-for="day in days"
              :key="day + '日'"
              :value="day"
            ) {{ day }}
          span.input-group-text 日
          select.form-select(
            v-model="date2Hour"
            name="date2Hour"
          )
            option(
              v-for="hour in hours"
              :key="hour + '時'"
              :value="hour"
            ) {{ hour }}
          span.input-group-text 時
        .input-group.mb-2
          select.form-select(
            v-model="date3Month"
            name="date3Month"
          )
            option(
              v-for="month in months"
              :key="month + '月'"
              :value="month"
            ) {{ month }}
          span.input-group-text 月
          select.form-select(
            v-model="date3Day"
            name="date3Day"
          )
            option(
              v-for="day in days"
              :key="day + '日'"
              :value="day"
            ) {{ day }}
          span.input-group-text 日
          select.form-select(
            v-model="date3Hour"
            name="date3Hour"
          )
            option(
              v-for="hour in hours"
              :key="hour + '時'"
              :value="hour"
            ) {{ hour }}
          span.input-group-text 時
      .mb-4
        label.form-label(for="reserveMessage") ご質問など
        textarea#reserveMessage.form-control(
          rows="5"
        )
      .mb-4
        .form-check
          input#reservePolicy.form-check-input(
            type="checkbox"
            v-model="policy"
            name="policy"
            :class="{ 'is-invalid': policyError }"
          )
          label.form-check-label(for="reservePolicy")
            a.policy-link(
              href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
              target="_blank"
              rel="noopener"
            ) プライバシーポリシー
            span に同意します。
          .invalid-feedback.mb-2(v-if="policyError") {{ policyError }}
      button.btn-complete(
        type="submit"
        :disabled="!meta.valid"
      ) 上記の内容で申し込む
</template>

<script setup lang="ts">
import { useField, useForm, configure } from "vee-validate"
import { localize } from "@vee-validate/i18n"

const months = Array.from(Array(12).keys(), x => x + 1)
const days = Array.from(Array(31).keys(), x => x + 1)
const hours = Array.from(Array(16).keys(), x => x + 7)

const { meta } = useForm()
const { value: name, errorMessage: nameError } = useField(
  "name",
  "required",
)
const { value: email, errorMessage: emailError } = useField(
  "email",
  "required|email",
)
const { value: date1Month, errorMessage: monthError } = useField(
  "date1.month",
  "required",
)
const { value: date1Day, errorMessage: dayError } = useField(
  "date1.day",
  "required",
)
const { value: date1Hour, errorMessage: hourError } = useField(
  "date1.hour",
  "required",
)
const { value: date2Month } = useField("date2.month")
const { value: date2Day } = useField("date2.day")
const { value: date2Hour } = useField("date2.hour")
const { value: date3Month } = useField("date3.month")
const { value: date3Day } = useField("date3.day")
const { value: date3Hour } = useField("date3.hour")
const { value: message } = useField("message")
const { value: policy, errorMessage: policyError } = useField(
  "policy",
  "required",
)

configure({
  generateMessage: localize({
    ja: {
      names: {
        name: 'お名前',
        email: 'メールアドレス',
        'date1.month': '第一希望の月',
        'date1.day': '第一希望の日',
        'date1.hour': '第一希望の時間',
        message: 'ご質問など',
        policy: 'プライバシーポリシーへの同意'
      }
    },
  }),
})

</script>

<style lang="sass" scoped>
#reserveForm
  padding: 30px 0
  .bg-original
    background-color: $accent-color
  .policy-link
    color: $accent-color
    text-decoration: none
  .btn-complete
    font-size: 24px
    font-weight: bold
    text-align: center
    letter-spacing: 0.05em
    color: white
    background: $green-gradient
    width: 100%
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border: none
    border-radius: 10px
    padding: 10px
    &:disabled
      background: lightgrey 
</style>
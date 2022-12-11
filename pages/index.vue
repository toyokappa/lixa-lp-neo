<template lang="pug">
sections-hero
sections-trainers
sections-problem
sections-feature
sections-user-voice
parts-cta-btn-green
sections-diet
parts-cta-btn-green
sections-program
sections-trial
sections-gym-info
</template>

<script setup lang="ts">
useHead({
  // afimaのトラッキングタグ
  script: [
    { src: "https://storage.googleapis.com/afima_media/js/afima.js" },
    { children: 'aAS();' }
  ]
})
</script>
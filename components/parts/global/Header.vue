<template lang="pug">
header.header-nav.navbar
  nav.container
    nuxt-link.navbar-bland.logo(to="/") LIXA
</template>

<style lang="sass" scoped>
header
  .logo
    font-size: 32px
    font-weight: bold
    color: $accent-color
    text-decoration: none
</style>
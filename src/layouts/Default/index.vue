<template>
  <div :class="$style.layout" >
    <!--<Nav/>-->
    <Logo class="pt-5 pl-5" />
    <v-main>
      <slot></slot>
      <!--<Alert/>-->
    </v-main>
  </div>
</template>
<style lang="scss" module scoped src="./style.scss"></style>
<script src="./setup.js"></script>

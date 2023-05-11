<template>
  <LayoutDefault>
    <v-col
      cols="12"
      md="4"
      class="pl-5"
    >
      <v-text-field
        variant="underlined"
        :counter="10"
        label="First name"
        required
      ></v-text-field>
      <v-text-field
        variant="underlined"
        :counter="10"
        label="Last name"
        required
      ></v-text-field>
      <v-text-field
        variant="underlined"
        label="E-mail"
        required
      ></v-text-field>
    </v-col>
    <div :class="$style.pdfpreview">
      <div :class="$style.template">
        <div :class="$style.header">
          <h1>Коммерческое предложение на разработку
сайта для группы компании «Центр Речевых
Технологий»</h1>
          <div :class="$style.col">
            <p>Контактное лицо  со стороны Исполнителя</p>
            <p>Евгений Смирнов</p>
            <p>jenya@roky.rocks</p>
            <p>+7 917 036 12 10</p>
          </div>
          <div :class="$style.col">
            <img src="" alt="">
            <p>ROKY</p>
            <p>8 800 201 1486</p>
            <p>www.roky.rocks; hello@roky.rocks</p>
          </div>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<style lang="scss" scoped module src="./style.scss">
</style>
<script src='./setup.js'></script>

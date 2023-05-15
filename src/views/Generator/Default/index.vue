<template>
  <LayoutDefault>
    <v-col class="pl-0" cols="2" md="2">
      <v-text-field
        v-model="docData.time"
        class=""
        variant="underlined"
        label="Кол-во рабочих недель"
        required
        clearable
        type="number"
        hint="Введите кол-во недель"
        @click:append-outer="removeStep(stepIndex, stageIndex)"
      ></v-text-field>
      <v-text-field
        v-model="docData.time"
        class=""
        variant="underlined"
        label="Контактное лицо"
        required
        clearable
        hint="Введите кол-во недель"
        @click:append-outer="removeStep(stepIndex, stageIndex)"
      ></v-text-field>
      <v-text-field
        v-model="docData.time"
        class=""
        variant="underlined"
        label="Email контактного лица"
        required
        clearable
        type="number"
        hint="Введите кол-во недель"
        @click:append-outer="removeStep(stepIndex, stageIndex)"
      ></v-text-field>
      <v-text-field
        v-model="docData.time"
        class=""
        variant="underlined"
        label="Телефон контактного лица"
        required
        clearable
        type="number"
        hint="Введите кол-во недель"
        @click:append-outer="removeStep(stepIndex, stageIndex)"
      ></v-text-field>
    </v-col>
    <v-text-field
      variant="underlined"
      label="Заголовок документа"
      v-model="docData.docTitle"
      required
    ></v-text-field>
    <v-row class="mb-10">
      <v-col
      cols="6"
      md="6"
      >
        <v-expansion-panels>
          <v-expansion-panel
          >
            <v-expansion-panel-header>
              <div class="d-flex align-center">
                <p class="mb-0">Этапы</p>
                <v-icon @click.stop="addStage" class="ml-2">mdi-plus</v-icon>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(stage,stageIndex) in docData.stages" class="" :key="stageIndex"
                >
                  <v-expansion-panel-header>
                    <v-text-field
                      :append-outer-icon="'mdi-delete'"
                      variant="underlined"
                      label="Название"
                      v-model="stage.title"
                      required
                      clearable
                      hint="Введите название этапа"
                      @click:append-outer="removeStage(index)"
                    ></v-text-field>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="mb-2 pl-3">
                      <div class="mb-2 d-flex align-center">
                        <p class="mb-0">Срок разработки ( Недели )</p>
                        <v-icon @click.stop="addStep(stageIndex)" class="ml-2">mdi-plus</v-icon>
                      </div>
                      <v-row class="pl-3">
                        <v-text-field
                          class="pl-2"
                          variant="underlined"
                          v-model="stage.start"
                          label="Начало ( Неделя )"
                          required
                          clearable
                          type="number"
                          :maxlength="stage.end"
                          hint="Введите кол-во недель"
                          @click:append-outer="removeStep(stepIndex, stageIndex)"
                        ></v-text-field>
                        <v-text-field
                          class="pl-2"
                          variant="underlined"
                          v-model="stage.end"
                          label="Конец ( Неделя )"
                          required
                          clearable
                          type="number"
                          :minlength="stage.start"
                          hint="Введите кол-во недель"
                          @click:append-outer="removeStep(stepIndex, stageIndex)"
                        ></v-text-field>
                      </v-row>
                    </div>
                    <div class="mb-2 pl-3">
                      <div class="d-flex align-center">
                        <p class="mb-0">Шаги</p>
                        <v-icon @click="addStep(stageIndex)" class="ml-2">mdi-plus</v-icon>
                      </div>
                      <v-text-field
                        class="pl-2"
                        v-for="(step,stepIndex) in stage.steps" :key="stepIndex"
                        :append-outer-icon="'mdi-delete'"
                        variant="underlined"
                        label="Заголовок"
                        v-model="stage.steps[stepIndex]"
                        required
                        clearable
                        hint="Введите название этапа"
                        @click:append-outer="removeStep(stepIndex, stageIndex)"
                      ></v-text-field>
                    </div>
                    <div class="pl-3">
                      <div class="d-flex align-center">
                        <p class="mb-0">Специалисты</p>
                        <v-icon @click="addStep(stageIndex)" class="ml-2">mdi-plus</v-icon>
                      </div>
                      <v-select
                        class="pl-2"
                        v-model="docData.stages[stageIndex].team"
                        name="type"
                        chips
                        return-object
                        :item-text="'type'"
                        :item-value="'type'"
                        :items="docData.specialists"
                        label="Select"
                        multiple
                        :change="changeTeam"
                        hint="Pick your favorite states"
                        persistent-hint
                      ></v-select>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
      cols="4"
      md="5">
        <div class="pl-3">
          <v-expansion-panels>
            <v-expansion-panel
            >
              <v-expansion-panel-header>
                <div class="d-flex align-center">
                  <p class="mb-0">Специалисты</p>
                  <v-icon @click.stop="addSpecialist()" class="ml-2">mdi-plus</v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row v-for="(specialist, index) in docData.specialists" class="">
                  <v-text-field
                    class="mr-5"
                    cols="4"
                    variant="underlined"
                    label="Заголовок"
                    v-model="specialist.type"
                    required
                    clearable
                    hint="Введите название этапа"
                  ></v-text-field>
                  <v-text-field
                    cols="4"
                    variant="underlined"
                    label="Заголовок"
                    v-model="specialist.cost"
                    required
                    clearable
                    hint="Введите название этапа"
                  ></v-text-field>
                <v-icon @click="removeSpecialist(index, specialist.type)">mdi-delete</v-icon>
              </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
    <div :class="$style.preview">
      <div id="element-to-convert" :class="$style.pdfpreview">
        <div :class="$style.template">
          <div :class="$style.header">
            <h1 :class="$style.title">{{ docData.docTitle }}</h1>
            <div :class="$style.row">
              <div :class="$style.col">
                <div class="">
                  <p>Контактное лицо <br> со стороны Исполнителя</p>
                </div>
                <div class="">
                  <p>Евгений Смирнов</p>
                  <p>jenya@roky.rocks</p>
                  <p>+7 917 036 12 10</p>
                </div>
              </div>
              <div :class="$style.col">
                <img src="@/assets/images/ROKY.png" alt="">
                <div class="">
                  <p>ROKY</p>
                  <p>8 800 201 1486</p>
                  <p>www.roky.rocks; hello@roky.rocks</p>
                </div>
              </div>
            </div>
          </div>
          <div :class="[$style.table, $style.price]">
            <h2>Стоимость работ по проекту</h2>
            <table border="1">
              <thead>
                <tr>
                  <td align="right" width="20%"></td>
                  <td align="right" width="10%">Стоимость</td>
                  <td align="center" width="14pt" :colspan="+docData.time">Последовательность работ (рабочие недели)</td>
                </tr>
                <tr>
                  <td align="right" width="20%"></td>
                  <td align="right" width="10%"></td>
                  <td :width="70/+docData.time + '%'" v-for="item,index in +docData.time" :key="index">{{ index+1 }}</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="stage in docData.stages">
                  <td width="20%">{{ stage.title }}</td>
                  <td width="10%">{{ stage.cost }}</td>
                  <td :class='[indexCol+1 > +stage.start && indexCol+1 < +stage.end && $style.filled ]' :width="70/+docData.time + '%'" v-for="item,indexCol in +docData.time" :key="indexCol"></td>
                </tr>
              </tbody>
            </table>
            <div :class="$style.result">
              <div :class="$style.price">
                <p>Итого</p>
                <p>{{ docData.allCost }} RUB</p>
              </div>
              <div :class="$style.shedule">
                <p>Срок реализации проекта</p>
                <p>{{ docData.time }} рабочих недель</p>
              </div>
            </div>
          </div>
          <div :class="[$style.table, $style.price]">
            <h2>Смета проекта</h2>
            <table border="1">
              <thead>
                <tr>
                  <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.first"></td>
                  <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.second">Специалист</td>
                  <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.third" colspan="26" >Стоимость</td>
                </tr>
              </thead>
              <tbody>
                <template v-for="(stage) in docData.stages">
                  <tr :class="$style.lighting">
                    <td :class="$style.rowTitle" :width="tableOptions.smeta.cols.first">{{ stage.title }}</td>
                    <td :width="tableOptions.smeta.cols.second"></td>
                    <td :width="tableOptions.smeta.cols.third" align="right" colspan="26" >{{ stage.cost }} RUB</td>
                  </tr>
                  <tr v-for="(item,index) in stage.steps">
                    <td :width="tableOptions.smeta.cols.first"><p v-html="item"></p></td>
                    <td align="center" v-if="index === 0" :rowspan="stage.steps.length" :width="tableOptions.smeta.cols.second">
                      <p v-for="specialist in stage.team">
                        {{ specialist.type }}
                      </p>
                    </td>
                    <td rowspan="1" :width="tableOptions.smeta.cols.third" colspan="26" ></td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <p :class="$style.taxi">* <span>НДС не облагается на основании гл. 26.2 НК РФ</span></p>
        </div>
      </div>
    </div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="0"
      :pdf-quality="2"
      filename="heeee he"
      :manual-pagination="false"
      pdf-format="a3"
      pdf-orientation="portrait"
      pdf-content-width="1100px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      :htmlToPdfOptions="htmlToPdfOptions"
      ref="html2Pdf"
    >
        <section slot="pdf-content">
          <section class="pdf-content">
            <div id="element-to-convert" :class="$style.pdfpreview">
              <div :class="$style.template">
                <div :class="$style.header">
                  <h1 :class="$style.title">{{ docData.docTitle }}</h1>
                  <div :class="$style.row">
                    <div :class="$style.col">
                      <div class="">
                        <p>Контактное лицо <br> со стороны Исполнителя</p>
                      </div>
                      <div class="">
                        <p>Евгений Смирнов</p>
                        <p>jenya@roky.rocks</p>
                        <p>+7 917 036 12 10</p>
                      </div>
                    </div>
                    <div :class="$style.col">
                      <img src="@/assets/images/ROKY.png" alt="">
                      <div class="">
                        <p>ROKY</p>
                        <p>8 800 201 1486</p>
                        <p>www.roky.rocks; hello@roky.rocks</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div :class="[$style.table, $style.price]">
                  <h2>Стоимость работ по проекту</h2>
                  <table border="1">
                    <thead>
                      <tr>
                        <td align="right" width="20%"></td>
                        <td align="right" width="10%">Стоимость</td>
                        <td align="center" width="14pt" :colspan="+docData.time">Последовательность работ (рабочие недели)</td>
                      </tr>
                      <tr>
                        <td align="right" width="20%"></td>
                        <td align="right" width="10%"></td>
                        <td :width="70/+docData.time + '%'" v-for="item,index in +docData.time" :key="index">{{ index+1 }}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="stage in docData.stages">
                        <td width="20%">{{ stage.title }}</td>
                        <td width="10%">{{ stage.cost }}</td>
                        <td :class='[indexCol+1 > +stage.start && indexCol+1 < +stage.end && $style.filled ]' :width="70/+docData.time + '%'" v-for="item,indexCol in +docData.time" :key="indexCol"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div :class="$style.result">
                    <div :class="$style.price">
                      <p>Итого</p>
                      <p>0,00 RUB</p>
                    </div>
                    <div :class="$style.shedule">
                      <p>Срок реализации проекта</p>
                      <p>26 рабочих недель</p>
                    </div>
                  </div>
                </div>
                <div :class="[$style.table, $style.price]">
                  <h2>Смета проекта</h2>
                  <table border="1">
                    <thead>
                      <tr>
                        <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.first"></td>
                        <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.second">Специалист</td>
                        <td height="40pt" align="center" rowspan="3" :width="tableOptions.smeta.cols.third" colspan="26" >Стоимость</td>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="(stage) in docData.stages">
                        <tr :class="$style.lighting">
                          <td :class="$style.rowTitle" :width="tableOptions.smeta.cols.first">{{ stage.title }}</td>
                          <td :width="tableOptions.smeta.cols.second"></td>
                          <td :width="tableOptions.smeta.cols.third" colspan="26" >{{ stage.cost }}</td>
                        </tr>
                        <tr v-for="(item,index) in stage.steps">
                          <td :width="tableOptions.smeta.cols.first"><p v-html="item"></p></td>
                          <td align="center" v-if="index === 0" :rowspan="stage.steps.length" :width="tableOptions.smeta.cols.second">
                            <p v-for="specialist in stage.team">
                              {{ specialist.type }}
                            </p>
                          </td>
                          <td rowspan="1" :width="tableOptions.smeta.cols.third" colspan="26" ></td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
                <p :class="$style.taxi">* <span>НДС не облагается на основании гл. 26.2 НК РФ</span></p>
              </div>
            </div>
          </section>
        </section>
    </vue-html2pdf>
    <v-btn class="mt-5" @click="exportToPDF">
      Export to PDF
    </v-btn>
  </LayoutDefault>
</template>

<style lang="scss" scoped module src="./style.scss">
</style>
<script src='./setup.js'></script>

import LayoutDefault from '@/layouts/Default'
import axios from 'axios'
import Vue from 'vue'

export default {
  name: "Generator-Default",
  components: {
    //Alert,
    LayoutDefault,
    //html2pdf,
  },
  data() {
    return {
      htmlToPdfOptions: {
        margin: 0,

        filename: `testS.pdf`,

        //image: {
        //    type: 'png',
        //    quality: 0.98
        //},
        pagebreak: {avoid: 'tr'},

        enableLinks: true,

        //html2canvas: {
        //    scale: 1,
        //    useCORS: true
        //},

        jsPDF: {
            unit: 'pt',
            format: 'a3',
            orientation: 'portrait'
        }
      },
      loading: false,
      tableOptions: {
        smeta: {
          cols: {
            first: '50%',
            second: '25%',
            third: '25%'
          }
        }
      },
      docData: {
        docTitle: 'Коммерческое предложение на разработку сайта для группы компании «Центр Речевых Технологий»',
        time: null,
        currency: '',
        path: '',
        filename: '',
        contactPerson: {
          name: 'Евгений Смирнов',
          email: 'jenya@roky.rocks',
          phone: '+7 917 036 12 10'
        },
        metaInfo: {
          name: 'ROKY',
          email: '8 800 201 1486',
          phone: 'www.roky.rocks; hello@roky.rocks',
          taxi: 'НДС не облагается на основании гл. 26.2 НК РФ'
        },
        allCost: null,
        stages: [
          {
            title: 'Проектирование',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Вводное интервью с командой (до 3 интервью, включая подготовку, сбор и анализ бизнес требований, базовый продуктовый анализ) Время и дата согласовываются по средствам электронной почты.',
              'Проектирование пользовательский путей (User flow)',
              'Разработка прототипов (до 92 экранов)',
              'Разработка технического задания',
              'Контроль качества',
              'Управление этапом проектирования (менеджмент этапа)',
              'Результат работ по этапу: <br> – Прототипы (до 92 страниц) в формате Figma; <br>– User Flow (Miro) <br>– Техническое задание в формате Google Docs'
            ],
            team: [
              //{
              //  type: 'Проектировщик',
              //  cost: 200
              //},
              //{
              //  type: 'Технический писатель (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Арт-директор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Технический директор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Менеджер проекта (Digital)',
              //  cost: 200
              //}
            ]
          },
          {
            title: 'Разработка дизайн-концепции',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Организация воркшопа с командой клиента (3 онлайн сессии по 2 часа, сбор вводной информации для разработки дизайн концепции, погружение в проект, анализ входящих данных, создание дизайн концепции)',
              'Финализация дизайн концепции',
              '– Анализ трендов отрасли, референсов, схожих проектов (блок в презентации концепции: анализ отрасли, обзор примеров, дизайнерских приемов, обоснование применяемых дизайн-приемов)',
              '– Анализ и выбор шрифтов для использования (блок в презентации концепции: выбор из существующих шрифтов включая брендбук и альтернативных, примеры использования шрифтов в дизайне на примере digital-носителей)',
              'Создание цветового кодирования (блок в презентации концепции: разработка цветового кода сайта, примеры применения цветовой схемы на digital-носителях, обоснование выбранной цветовой схемы)',
              'Разработка дизайн-макета элементов навигации (блок в презентации концепции: разработка элементов навигации, демонстрация примеров навигации, основного и вторичного меню, шапки и футера сайта)',
              'Управление этапом разработки дизайн концепции (менеджмент этапа)',
              'Результат работ по этапу: <br>– Презентация концепции в формате keynote/pdf;'
            ],
            team: [
              //{
              //  type: 'Дизайнер (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Арт-директор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Менеджер проекта (Digital)',
              //  cost: 200
              //}
            ]
          },
          {
            title: 'Финализация дизайна (до 150 страниц)',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Главная страница компании (разработка дизайн-макетов до 8 экранов), макеты Figma',
              'Раздел продукты (разработка дизайн-макетов до 24 страниц), макеты Figma',
              'Раздел решения (разработка дизайн-макетов до 43 страниц), макеты Figma',
              'Раздел проекты (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Раздел пресс-центр (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Раздел о компании (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Раздел карьера (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Раздел техподдержка (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Раздел технологии (разработка дизайн-макетов до 10 страниц), макеты Figma',
              'Подготовка презентации с описанием интерфейсов (Взаимодействия страниц, описание логики поведения интерфейса)',
              'Планшетная версия',
              'Мобильная версия',
              'Адаптация интерфейсов под языковые версии',
              'Контроль качества',
              'Управление этапом финализации дизайна (менеджмент этапа)',
              'Результат работ по этапу: <br>– Дизайн-макеты страниц, а также дизайн-макеты страниц адаптированных под мобильные устройства, в формате Figma;'
            ],
            team: [
              //{
              //  type: 'Дизайнер (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Арт-директор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Менеджер проекта (Digital)',
              //  cost: 200
              //}
            ]
          },
          {
            title: 'Программирование',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Программирование экранов для Web',
              'Программирование экранов для Мобильных устройств',
              'Frontend разработка',
              'Разработка backend-части веб-сайта',
              'Интеграция frontend и backend части',
              'Разработка админ-панели',
              'Разработка модуля управления страницами (статичные данные)',
              'Разработка модуля управления динамическими данными',
              'Разработка модуля управления вакансиями',
              'Разработка типовых анимаций',
              'Результат работ по этапу: <br>– Архив веб-сайта в формате .zip с файлами frontend и backend, созданными с использованием языков разработки Vue.js, PHP(Laravel), CSS, HTML',
              'Контроль качества',
              'Управление этапом программирования (менеджмент этапа)',
            ],
            team: [
              //{
              //  type: 'Front-end разработчик (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Back-end разработчик (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Технический директор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Менеджер проекта (Digital)',
              //  cost: 200
              //}
            ]
          },
          {
            title: 'Тестирование',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Разработка сценария тестирования (разработка тест-кейса для функционального тестирования, составление релейного чек-листа)',
              'Тестирование интерфейса (Web)',
              'Корректировка интерфейса (Web)',
              'Тестирование интерфейса (iOS, Android)',
              'Корректировка интерфейса (iOS, Android)',
              'Прохождение тестирования на безопасность',
              'Контроль качества',
              'Управление этапом тестирования (менеджмент этапа)',
              'Результат работ по этапу: <br>– Архив веб-сайта в формате .zip с файлами frontend и backend, созданными с использованием языков разработки Vue.js, PHP(Laravel), CSS, HTML, а также список корректировок к интерфейсу и логике в формате .pdf/.docx/.xlsx'
            ],
            team: [
              //{
              //  type: 'Тестировщик (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Корректор',
              //  cost: 200
              //},
              //{
              //  type: 'Технический директор (Digital)',
              //  cost: 200
              //}
            ]
          },
          {
            title: 'Ввод в эксплуатацию',
            cost: null,
            start: null,
            end: null,
            steps: [
              'Подготовка сервера для размещение сайта (сервер предоставляет Заказчик)',
              'Подготовка docker-container для веб-сайта',
              'Настройка CI/CD для тестирования и continuous integration',
              'Размещение сайта (сервер предоставляет Заказчик)',
              'Подключение аналитических систем (Отслеживание стабильности работы сайта, отслеживание сценариев использования. Реквизиты доступа к аналитическим системам предоставляем Заказчик)',
              'Контроль качества',
              'Управление этапом введения сайта в эксплуатацию (менеджмент этапа)',
              'Результат работ по этапу: <br>– Web-сайт размещенный и функционирующий на домене заказчика'
            ],
            team: [
              //{
              //  type: 'Системный администратор (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Менеджер проекта (Digital)',
              //  cost: 200
              //},
              //{
              //  type: 'Технический директор (Digital)',
              //  cost: 200
              //}
            ]
          }
        ],
        specialists: [
          {
            type: 'Проектировщик',
            cost: 200
          },
          {
            type: 'Технический писатель (Digital)',
            cost: 200
          },
          {
            type: 'Арт-директор (Digital)',
            cost: 200
          },
          {
            type: 'Технический директор (Digital)',
            cost: 200
          },
          {
            type: 'Менеджер проекта (Digital)',
            cost: 200
          },
          {
            type: 'Дизайнер (Digital)',
            cost: 200
          },
          {
            type: 'Front-end разработчик (Digital)',
            cost: 200
          },
          {
            type: 'Back-end разработчик (Digital)',
            cost: 200
          },
          {
            type: 'Технический директор (Digital)',
            cost: 200
          },
          {
            type: 'Менеджер проекта (Digital)',
            cost: 200
          },
          {
            type: 'Корректор',
            cost: 200
          },
          {
            type: 'Тестировщик (Digital)',
            cost: 200
          },
          {
            type: 'Системный администратор (Digital)',
            cost: 200
          }
        ]
      }
    }
  },
  computed: {
  },

  methods: {
    exportToPDF() {
      this.sendDocument()

    },
    async sendDocument() {
      this.loading = true
      var elHtml = document.getElementById('element-to-convert').innerHTML;
      // const response = await axios.post('http://localhost:3000/postDocument', elHtml)
      console.log(elHtml)
      try {
        const { data } = await axios.post('https://roky.rocks/doc-editor/api/postDocument', { document: elHtml, filename: this.docData.filename }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        //this.docData.path = data.path
        Vue.set(this.docData, 'path', data.path);
        this.loading = false
      } catch {

      }

      // const response = await axios.get('http://localhost:3000/getDocument')


    },
    async beforeDownload ({ html2pdf, options, pdfContent }) {
      await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages()
          for (let i = 1; i <= totalPages; i++) {
              pdf.setPage(i)
              pdf.setFontSize(10)
              pdf.setTextColor(150)
              pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
          }
      }).save()
    },
    addStage() {
      const emptyStage =
        {
          title: '',
          cost: '',
          stages: [
            '',
          ],
          team: []
        }
      this.docData.stages.push(emptyStage)
    },
    removeStage(index) {
      this.docData.stages.splice(index, 1)
    },
    addStep(stageIndex) {
      const emptyStep = ''
      this.docData.stages[stageIndex].steps.push(emptyStep)
    },
    removeStep(stepIndex, stageIndex) {
      this.docData.stages[stageIndex].steps.splice(stepIndex, 1)
    },
    addSpecialist() {
      const emptySpecialist =
        {
          title: '',
          cost: ''
        }
      this.docData.specialists.push(emptySpecialist)
    },
    removeSpecialist(index, type) {
      this.$delete(this.docData.specialists, index)
      console.log(this.docData.stages)
      this.docData.stages.forEach((el) => {
        const founded = el.team.find(el => el.type === type)
        if (founded) {
          console.log(founded)
          const indexFounded = el.team.indexOf(founded)
          el.team.splice(indexFounded,1)
        }
      });
    },
    changeTeam() {
      console.log('change')
    }
  },
  watch: {
    'docData': {
      handler(newValue, oldValue) {
        this.docData.stages.forEach((stage) => {
          const delta = stage.end - stage.start
          //var costTeam = null
          //stage.team.forEach((item) => {
          //  if (item.cost) {
          //    costTeam =+ item.cost
          //    console.log(costTeam)
          //  }
          //})
          const initialValue = 0;
          const costTeam = stage.team.reduce(
            (accumulator, currentValue) => accumulator + currentValue.cost,
            initialValue
          );
          stage.cost = (delta + 1 ) * costTeam
        })
        const initialValue = 0;
        const allCost = this.docData.stages.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cost,
          initialValue
        );
        this.docData.allCost = allCost
        console.log(newValue)
        localStorage.setItem('docData', JSON.stringify(newValue))

      },
      deep: true
    }
  },
  mounted() {
    console.log('test')
    console.log(this.$refs.testRef)
    const savedData = localStorage.getItem('docData')
    console.log(savedData)
    if (savedData) {
      this.docData = JSON.parse(savedData)
    }

  },
}

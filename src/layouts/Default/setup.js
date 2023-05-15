import Nav from "@/components/@logic/Nav/Default"
import Logo from '@/components/@logic/Logo/Default'
//import Alert from '@/components/Alert'
export default {
  name: "Default-Layout1",
  components: {
    //Alert,
    Nav,
    Logo
  },
  data() {
    return {
      test: true,
      scaleFactorX: null
    }
  },
  computed: {
  },

  methods: {
    updateFactors() {
      const { clientWidth } = document.body
      this.scaleFactorX = 16 * clientWidth / 1280
      if (clientWidth <= 450) this.scaleFactorX = 16
      if (clientWidth >= 1600) {
        //this.scaleFactorX = 16 * 1600 / 1280
      }
      document.documentElement.style.fontSize = `${this.scaleFactorX}px`

    }
  },
  mounted() {
    this.$vuetify.theme.themes.light.primary = '#000'
    this.updateFactors(null)
      window.addEventListener('resize', () => this.updateFactors('resize'))

  }
}

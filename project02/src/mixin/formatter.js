export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('mixin mounted')
  },
  unmounted() {},
  methods: {
    dateFormat(d, format) {
      const year = d.getFullYear()
      let month = d.getMonth() + 1
      month = month.toString().padStart(2, 0)
      const day = d.getDate()

      return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
      //   YYYY-MM-DD
    }
  }
}

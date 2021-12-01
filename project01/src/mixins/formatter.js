export default {
  methods: {
    dateFormat(d, format) {
      // var d = new Date()
      const year = d.getFullYear()
      let month = d.getMonth() + 1
      month = month.toString().padStart(2, 0)
      const day = d.getDate()

      return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
    },
    dateInterval(date, interval, format) {}
  }
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = key => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }

    app.config.globalProperties.$t = (key, params = {}) => {
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{[^}]*}/g, match => params[match.slice(1, -1)])
    }

    app.provide('i18n', options)
  }
}

import Vue from 'vue'
import VueGtag from 'vue-gtag'

const vueGtag = ({ app, env }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-PR2D1PD0CN' },
      disabled: true, // Here you could ignore user privacy and set to true
    },
    app.router
  )
}

export default vueGtag

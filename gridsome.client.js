export default function (Vue, options) {
  if(process.isClient) {
    const Toasted = require('vue-toasted')

    Vue.use(Toasted, options)
  }
}
export default function (Vue, options) {
  if(process.isClient) {
    const { default: Toasted } = require('vue-toasted')

    Vue.use(Toasted, options)
  }
}
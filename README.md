# 🥪 Toast component for Gridsome

![Vue Toasted logo](https://camo.githubusercontent.com/ad2f797f88f98ee4988dc82a4d70e72936170871/68747470733a2f2f66726573687069786c2e636f6d2f7675652d746f61737465642e706e673f6e6577)

A Gridsome plugin built on top of [Vue-toasted](https://www.npmjs.com/package/vue-toasted), one of the best toast plugin available for VueJS.

**Now you can also use it in Gridsome!** 💥💥

## Introduction

[Vue-toasted](https://www.npmjs.com/package/vue-toasted) is a cool Toast plugin for any Vue-related project, and this plugin enhances the possibility of using it in Gridsome project 💯. 

🔥 There are icons built-in supported such as [FontAwesome](https://fontawesome.com/), [Material Icons](http://google.github.io/material-design-icons/) etc.

🔥 And it's responsive too!

### Demo

Check out the official [demo](https://shakee93.github.io/vue-toasted/).

![interactive demo of vue toasted](https://res.cloudinary.com/mayashavin/image/upload/v1590047023/vue-toasted-demo.gif)

## 🛠 Install

### Yarn

```bash
yarn add gridsome-plugin-vue-toasted
```

### Npm

```bash
npm i gridsome-plugin-vue-toasted --save
```

## 💻 Usage

Simply add the following code inside `gridsome.config.js`

```js
module.exports = {
    plugins: [
        {
            use: 'gridsome-plugin-vue-toasted',
            options: {}, // Optional - setup global options for the toast
        }
    ]
}
```

More information on options API, [check out the documentation here](https://github.com/shakee93/vue-toasted#options)

_Example_: To set up toast displayed from bottom center of the page `position: 'bottom-center'`, one toast as a time `singletone: true`, and auto disappear after 5 secs `duration: 5000`.

```js
module.exports = [
    //... - other plugins
    {
        use: '',
        options:  {
            position: 'bottom-center',
            singleton: true,
            duration: 5000,
        }
    }
]
```

You can use directly in the component as normal, with a few lines of code:

```js
//...
methods: {
  showToast() {
    //Info toast
    this.$toasted.info("I'm a toast 🥪 !", /* options */)

    //Error toast
    this.$toasted.error("Error", /* options */)

    //Success toast
    this.$toasted.success("Success", /* options */)

    //Or just simple toast
    this.$toasted.show("Hello World", /* options */)
  }
}
```

🧼 Clearing toast(s):

```js
this.$toasted.clear()
```

💅 Register and personalize a toast dynamically

```js
this.$toasted.register(
  'my_cool_toast', //name of the toast
  "I'm a cool toast", //message of the toast,
  //options of the toast
  {
    type: 'success',
    icon: 'success', //icon to use for the toast
  }
)
```

## APIs

A full list of [official API documentation here](https://github.com/shakee93/vue-toasted#api). 

## Credits

I only hold credit for creating the Gridsome plugin wrapper 😉. All other credits go to the awesome team and contributors behind [Vue Toasted](https://github.com/shakee93/vue-toasted) project and external library (if any).

Enjoy 🥪!

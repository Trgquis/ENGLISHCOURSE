module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    parserOptions: {
        requireConfigFile: false // add this outside the rules object
    },
    rules: {
        // your rules here
    },

  }
  
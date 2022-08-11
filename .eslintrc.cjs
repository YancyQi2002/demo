module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "vue-global-api",
    "plugin:vue/vue3-strongly-recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
    // Make sure "prettier" is the last element in this list.
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint",
    "import"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    semi: ["error", "never"],
    quotes: ["error", "single"],
    camelcase: "off",
    "no-tabs": 0,
    "no-undef": "off",
    "no-unused-vars": "off",
    "eol-last": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": "off",
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/newline-after-import": 2,
    "import/order": 2,
    "vue/multi-word-component-names": "off"
  },
  overrides: [
    {
      files: [
        "auto-import.d.ts",
        "components.d.ts"
      ],
      rules: {
        "no-unused-vars": "off"
      }
    }
  ]
}
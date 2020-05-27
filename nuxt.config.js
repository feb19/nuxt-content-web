export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
    ]
  },
  modules: [
    '@nuxt/content'
  ],
  generate: {
    // Nuxt 2.13+ だとこれすらいらんくなるくさい（ nuxt export ）
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('news' || 'index').fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
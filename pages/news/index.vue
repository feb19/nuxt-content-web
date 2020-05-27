<template>
  <div>
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="'/news/'+ article.slug">{{article.title}} {{article.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('news' || 'index').limit(15)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>
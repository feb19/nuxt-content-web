<template>
  <div>
    <div v-for="n in news" :key="n.slug">
      <nuxt-link :to="'/news/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('news' || 'index').limit(15)
    const news = await query.fetch()
    return { news }
  }
}
</script>
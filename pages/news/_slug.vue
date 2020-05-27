<template>
  <article>
    <h1>{{article.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{article.date}}</dd>
    </dl>
    <div><img :src="article.image" /></div>
    <div v-for="tag in article.tags" :key="tag">{{tag}}</div>
    
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('news', params.slug || 'index').fetch()
    return { article }
  }
}
</script>
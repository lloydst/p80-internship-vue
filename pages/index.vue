<template>
  <section class="container">
    
    home
    
  </section>
</template>

<script>

export default {
  middleware: 'redirects',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>

.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>

<template>
  <div>
    <admin-side-nav/>
    <nuxt/>

  </div>
</template>

<script>
import AdminSideNav from '@/components/AdminSideNav.vue'
export default {

  components: {
    AdminSideNav
  }
}
</script>

<style>
.main {
  padding-left: 210px;
}
</style>

<template>
  <div class="main">
  <table>
    <th>company/client:</th><th>url:</th><th>edit</th><th>delete</th>
    <tr v-for="item in data" :key="item.index">
      <td>{{item.name}}</td>
      <td>{{item.url}}</td>
      <td><button :tmp="item._id">edit</button></td>
      <td><button :tmp="item._id">delete</button></td>
    </tr>
  </table> 
  <button>add</button>
  todo: detail, on the api as well
  <nuxt-child/>
</div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  layout: 'dashboard',
  async asyncData () {
    let { data } = await axios.get('/api/websites')
    return { data: data }
  }
}
</script>

<style>

</style>

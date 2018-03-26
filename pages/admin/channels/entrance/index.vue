<template>
  <div class="main">
  <table>
    <th>company/client:</th><th>url:</th><th>edit</th><th>delete</th>
    <tr v-for="item in data" :key="item.index">
      <td>{{item.name}}</td>
      <td>{{item.url}}</td>
      <td><button class="button edit" :tmp="item._id">edit</button></td> <!-- :tmp stands for temporary in this case-->
      <td><button  class="button delete" :tmp="item._id">delete</button></td> <!-- link to delete/:id-->
    </tr>
  </table> 
  <button class="button create">add</button> <!-- link too admin/channels/entrance/create wich sends a post request to the api-->
  todo: detail, on the api as well <br>
  also button colors are to harsh 
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

<style scoped>
.edit {
    background-color: cyan;
}
.delete {
    background-color: red;
}
.button {
    padding: 6px;
    border: 1px solid black;
    border-radius: 3px;
}
.button:hover {
  border: 1px solid lightgrey;
}
.create {
  background-color: green;
}
</style>

<template>
  <div class="sidenav">
    <router-link to="/admin/channels">Dashboard</router-link>
    <router-link to="/admin/settings">Settings</router-link>
    <router-link to="/admin/channels/entrance">channels</router-link>
    <router-link to="#">Docs?</router-link>
    <router-link to="#">return too live</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a {
    padding: 6px 6px 6px 32px;
    text-decoration: none;
    font-size: 25px;
    font-family: fantasy;
    color: #818181;
    display: block;
}

.sidenav a:hover {
    color: #f1f1f1;
}
</style>

<template>
  <div class="menu">
    <router-link to="/" :class="{ selected: $route.name == 'films' }">Films</router-link>
    <router-link to="/about" :class="{ selected: $route.name == 'about' }">About</router-link>
    <router-link to="/contact" :class="{ selected: $route.name == 'contact' }">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  text-align: left;
}

a {
  color: #BBB;
  text-decoration: none;
}

a:hover {
  text-decoration: line-through;
}

.selected {
  color: black;
  font-weight: bold;
}

@media only screen and (min-width: 600px) {
  .menu {
    text-align: right;
  }
}
</style>

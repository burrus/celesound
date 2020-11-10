<template>
  <div class="about">
    <img alt="Vue logo" src="@/assets/logo.png">
    <Menu/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'About',
  components: {
    Menu,
  }
}
</script>

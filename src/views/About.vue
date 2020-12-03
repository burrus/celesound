<template>
  <div class="about">
    <img alt="Celesound logo" src="@/assets/celesound.png">
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

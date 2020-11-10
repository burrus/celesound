<template>
  <div class="films">
    <img alt="Vue logo" src="@/assets/logo.png">
    <Menu/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Films',
  components: {
    Menu,
  }
}
</script>

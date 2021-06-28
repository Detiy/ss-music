<template>
  <div>
    <router-view />
    <Bar />
  </div>
</template>
<script>
import Bar from './global/tabBar.vue';
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Bar,
  },
};
</script>
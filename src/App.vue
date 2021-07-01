<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  background: #FFF;
}
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  font-family: "Microsoft YaHei";
  overflow-y: scroll;
}
</style>

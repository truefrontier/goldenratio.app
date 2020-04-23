<template>
  <div class="App">
    <!-- <router-link :to="{ name: 'home' }" class="mr-3 underline">Home</router-link> -->
    <!-- <router-link :to="{ name: 'vert' }" class="mr-3 underline">Vert</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<!-- <style lang="scss" src="./App.scss" scoped></style> -->

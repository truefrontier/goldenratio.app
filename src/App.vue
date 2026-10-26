<template>
  <div class="App">
    <app-header></app-header>
    <router-view class="mt-8"></router-view>
    <mcp-callout></mcp-callout>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/app/Header';
import AppFooter from '@/components/app/Footer';
import McpCallout from '@/components/app/McpCallout';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    McpCallout,
  },
};
</script>

<!-- <style lang="scss" src="./App.scss" scoped></style> -->

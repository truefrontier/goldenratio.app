<template>
  <div class="Home">
    <section>
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-gray-500 uppercase tracking-wider">Why</span>
          <span class="text-3xl font-bold block">Spacing &amp; Proportions Matter</span>
        </h1>
        <p class="mt-7">Coming soon...</p>
      </div>
    </section>
    <section class="mt-9">
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-gray-500 uppercase tracking-wider">What</span>
          <span class="text-3xl font-bold block">The Golden Ratio</span>
        </h1>
        <p class="mt-7">Coming soon...</p>
      </div>
    </section>
    <section class="mt-9">
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-gray-500 uppercase tracking-wider">How</span>
          <span class="text-3xl font-bold block">To Get Started</span>
        </h1>
        <p class="mt-7">Coming soon...</p>
        <p class="mt-5">
          Try the
          <router-link class="link" :to="{ name: 'calculator' }">Golden Calculator</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

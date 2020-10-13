<template>
  <div class="Home">
    <!-- <section>
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider">Why</span>
          <span class="leading-7 text-3xl font-bold block">Spacing &amp; Proportions Matter</span>
        </h1>
        <p class="mt-7">Coming soon...</p>
      </div>
    </section> -->
    <section class="mt-9">
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider">What</span>
          <span class="leading-7 text-3xl font-bold block">The Golden Ratio</span>
        </h1>
        <p class="mt-7">In it's simplest terms, the Golden Ratio is 1:1.61803398875...</p>
        <p class="mt-7">
          There's more to it though. It's a very unique ratio in that the relationship between two
          numbers maintains the ratio to the next. Let me explain:
        </p>
        <p class="mt-7">
          For example, the Golden Ratio any number is that number multiplied by 1.618... So the
          Golden Ratio from 1 is 1 x 1.618 = 1.618. The Golden Ratio of 1.618 is 1.618 x 1.618 =
          2.618. The next would be 2.617924 x 1.618 = 4.236. Now here's the magic behind the Golden
          ratio: so far our sequence of numbers is 1, 1.618, 2.618, and 4.236. When you add the two
          previous numbers together, it equals the next number, so 1 + 1.618 = 2.618 and 1.618 +
          2.618 = 4.236. This pattern continues forever and is unique only to the Golden Ratio.
        </p>
        <p class="mt-7"><strong>But what's the big deal?</strong></p>
        <p class="mt-7">
          It just so happens that we can see this ratio occurring in nature all over the place, and
          as such we find this subconsciously visually pleasing. Things with the Golden Ratio have
          an inherent beauty and and often unexplained asymmetric balance that just feels right. Our
          eyes can see the Golden Ratio without our brain registering that that is why is feels
          balanced and beautiful.
        </p>
        <p class="mt-7">
          So, with the tools provided below, we can more easily implement these nature-driven design
          patterns into our interfaces. The result will be a visual "rightness" that may be hard to
          consciously define, but is concretely present and intentional.
        </p>
      </div>
    </section>
    <section class="mt-9">
      <div class="container">
        <h1 class="font-brand">
          <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider">How</span>
          <span class="leading-7 text-3xl font-bold block">To Get Started</span>
        </h1>
        <p class="mt-7">
          Currently, our
          <a
            href="https://github.com/truefrontier/tailwindcss-golden-ratio"
            class="link"
            rel="noopener"
            target="_blank"
            >Golden Ratio Tailwind CSS plugin</a
          >
          will allow you to use the utilities and examples shown on our
          <router-link :to="{ name: 'spacing' }">Spacing</router-link> and
          <router-link :to="{ name: 'grid' }">Grid</router-link> pages. Find
          <a
            href="https://github.com/truefrontier/tailwindcss-golden-ratio"
            target="_blank"
            rel="noopener"
            class="link"
            >tailwindcss-golden-ratio on github</a
          >.
        </p>
        <p class="mt-7">
          If you use the Alfred app, you can
          <a
            href="https://truefrontierapps.com/downloads/Golden-Ratio.alfredworkflow"
            download
            target="_blank"
            rel="noopener"
            >download our Golden Ratio workflow</a
          >
          that helps you convert one number to the next number (up or down) using the Golden Ratio.
        </p>
        <p class="mt-7">
          It's our hope to bring Golden Ratio workflows to other apps like figma in the future.
        </p>
        <p class="mt-7">
          <strong>Have any feedback or ideas?</strong>
          <a href="mailto:kevin@goldenratio.app" class="link">Email us</a>
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

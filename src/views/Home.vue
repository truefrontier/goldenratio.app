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
          <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider">What Is</span>
          <span class="leading-7 text-3xl font-bold block">The Golden Ratio</span>
        </h1>
        <p class="mt-7">In it's simplest terms, the Golden Ratio is 1:1.61803398875...</p>
        <p class="mt-7">
          There's more to it though. It's a very unique ratio in that the relationship between two
          numbers maintains the ratio to the next. Let me explain:
        </p>
        <p class="mt-7">
          To get the Golden Ratio, you take any number and multiply it by 1.618... Take 1 for
          example: 1 x 1.618 = 1.618. If you keep going from there, 1.618 x 1.618 = 2.618. Then you
          can do 2.617924 x 1.618 = 4.236. Now here's the magic behind the Golden ratio: so far our
          sequence of numbers is 1, 1.618, 2.618, and 4.236.
          <i>When you add the two previous numbers together, it equals the next number.</i> So 1 +
          1.618 = 2.618. The same is true for 1.618 + 2.618 = 4.236. This pattern continues forever
          and is unique only to the Golden Ratio. In more mathematical terms: the ratio between two
          lengths is the same as the ratio between the longer of the two and the total length of the
          two. Or, <i>a</i> is to <i>b</i> as <i>b</i> is to <i>c</i> where <i>c = a + b</i>.
        </p>
        <p class="mt-7 text-lg"><strong>Why is the Golden Ratio important?</strong></p>
        <p class="mt-7">
          It just so happens that we can observe this ratio in nature all over the place, and as
          such we can subconsiously find it visually pleasing. Things with the Golden Ratio have an
          inherent beauty and an often unexplained asymmetric balance that just feels right. Our
          eyes see it and likes it, but our brain might not register that it's the the Golden Ratio
          we are seeing.
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
          <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider">How To</span>
          <span class="leading-7 text-3xl font-bold block">Get Started</span>
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
          <router-link class="link" :to="{ name: 'spacing' }">Spacing</router-link> and
          <router-link class="link" :to="{ name: 'grid' }">Grid</router-link> pages. Find
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
            class="link"
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
          <a href="mailto:kevin@goldenratio.app" class="link ml-4">Email us</a>
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

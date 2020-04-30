<template>
  <div class="Header">
    <div class="container mt-7">
      <div class="flex flex-wrap items-center justify-between">
        <div
          @click="$route.name !== 'home' ? $router.push({ name: 'home' }) : () => {}"
          class="flex items-center cursor-pointer whitespace-no-wrap"
        >
          <div class="flex mr-5">
            <div class="w-7 h-7 bg-blue-600 rounded overflow-hidden shadow-lg">
              <div class="w-6 h-6 bg-blue-400 rounded-br">
                <div class="w-5 h-5 bg-blue-200 rounded-br-sm"></div>
              </div>
            </div>
          </div>
          <h1 class="text-blue-600 font-bold font-brand text-4xl leading-7">
            Golden Ratio
          </h1>
          <!-- <div class="text-gray-800 px-5 text-3xl font-brand opacity-25">+</div>
          <svg-logo class="h-7 w-auto"></svg-logo> -->
        </div>
        <div class="my-4 -ml-6">
          <!-- <router-link :to="{ name: 'grid' }" class="py-2 ml-6 text-gray-800 hover:text-blue-500"
            >Grid</router-link
          > -->
          <router-link
            :to="{ name: 'calculator' }"
            class="py-2 ml-6 text-gray-800 hover:text-blue-500"
            >Golden Calculator</router-link
          >
          <a
            href="https://github.com/truefrontier/tailwindcss-golden-ratio"
            target="_blank"
            rel="noopener"
            class="py-2 ml-6 text-gray-800 hover:text-blue-500"
          >
            <i class="fa fa-github fa-lg"></i> Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgLogo from '@/assets/img/tailwindcss-logo.svg';

export default {
  name: 'Header',
  components: {
    SvgLogo,
  },
};
</script>

<!-- <style lang="scss" src="./Header.scss" scoped></style> -->

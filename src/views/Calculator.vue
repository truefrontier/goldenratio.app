<template>
  <div class="Calculator">
    <div class="container">
      <div class="row mb-6">
        <div class="col w-gr-4">
          <div class="flex justify-center flex-wrap">
            <button
              @click="addSpacer('lCol', 1, 'green-300')"
              class="btn text-green-500 border-green-300"
            >
              1
            </button>
            <button
              @click="addSpacer('lCol', 2, 'green-500')"
              class="btn text-green-500 border-green-500"
            >
              2
            </button>
            <button
              @click="addSpacer('lCol', 3, 'teal-300')"
              class="btn text-teal-500 border-teal-300"
            >
              3
            </button>
            <button
              @click="addSpacer('lCol', 4, 'teal-500')"
              class="btn text-teal-500 border-teal-500"
            >
              4
            </button>
            <button
              @click="addSpacer('lCol', 5, 'blue-300')"
              class="btn text-blue-500 border-blue-300"
            >
              5
            </button>
            <button
              @click="addSpacer('lCol', 6, 'blue-500')"
              class="btn text-blue-500 border-blue-500"
            >
              6
            </button>
            <button
              @click="addSpacer('lCol', 7, 'indigo-300')"
              class="btn text-indigo-500 border-indigo-300"
            >
              7
            </button>
            <button
              @click="addSpacer('lCol', 8, 'indigo-500')"
              class="btn text-indigo-500 border-indigo-500"
            >
              8
            </button>
            <button
              @click="addSpacer('lCol', 9, 'purple-300')"
              class="btn text-purple-500 border-purple-300"
            >
              9
            </button>
            <button
              @click="addSpacer('lCol', 10, 'purple-500')"
              class="btn text-purple-500 border-purple-500"
            >
              10
            </button>
            <button
              @click="addSpacer('lCol', 11, 'pink-300')"
              class="btn text-pink-500 border-pink-300"
            >
              11
            </button>
          </div>
        </div>
        <div class="flex-grow col">&nbsp;</div>
        <div class="col w-gr-4">
          <div class="flex justify-center flex-wrap">
            <button
              @click="addSpacer('rCol', 1, 'green-300')"
              class="btn text-green-500 border-green-300"
            >
              1
            </button>
            <button
              @click="addSpacer('rCol', 2, 'green-500')"
              class="btn text-green-500 border-green-500"
            >
              2
            </button>
            <button
              @click="addSpacer('rCol', 3, 'teal-300')"
              class="btn text-teal-500 border-teal-300"
            >
              3
            </button>
            <button
              @click="addSpacer('rCol', 4, 'teal-500')"
              class="btn text-teal-500 border-teal-500"
            >
              4
            </button>
            <button
              @click="addSpacer('rCol', 5, 'blue-300')"
              class="btn text-blue-500 border-blue-300"
            >
              5
            </button>
            <button
              @click="addSpacer('rCol', 6, 'blue-500')"
              class="btn text-blue-500 border-blue-500"
            >
              6
            </button>
            <button
              @click="addSpacer('rCol', 7, 'indigo-300')"
              class="btn text-indigo-500 border-indigo-300"
            >
              7
            </button>
            <button
              @click="addSpacer('rCol', 8, 'indigo-500')"
              class="btn text-indigo-500 border-indigo-500"
            >
              8
            </button>
            <button
              @click="addSpacer('rCol', 9, 'purple-300')"
              class="btn text-purple-500 border-purple-300"
            >
              9
            </button>
            <button
              @click="addSpacer('rCol', 10, 'purple-500')"
              class="btn text-purple-500 border-purple-500"
            >
              10
            </button>
            <button
              @click="addSpacer('rCol', 11, 'pink-300')"
              class="btn text-pink-500 border-pink-300"
            >
              11
            </button>
          </div>
        </div>
      </div>
      <div class="row items-top">
        <div ref="lCol" class="bg-stripes col w-gr-4 bg-white border-3 border-black">
          <div
            v-for="spacer in lCol"
            :class="[spacer.bg, spacer.h, 'shadow-inner']"
            :title="spacer.num"
          ></div>
        </div>
        <div class="flex-grow col text-center">
          <div v-if="this.lCol.length || this.rCol.length" class="py-4 -mb-9">
            <div>
              <i v-if="isEqual" class="fa fa-check-circle fa-3x fa-fw text-green-500"></i>
              <i v-else class="fa fa-times-circle fa-3x fa-fw text-red-500"></i>
            </div>
            <button
              @click="
                lCol = [];
                rCol = [];
              "
              class="leading-5 mt-5 text-red-500 border-b border-red-400 hover:text-red-400 hover:border-b border-red-300"
            >
              reset
            </button>
          </div>
          <div v-else class="-mb-6 text-gray-600 uppercase text-xs font-bold tracking-wider">
            Add Spacers
          </div>
        </div>
        <div ref="rCol" class="bg-stripes col w-gr-4 bg-white border-3 border-black">
          <div
            v-for="spacer in rCol"
            :class="[spacer.bg, spacer.h, 'shadow-inner']"
            :title="spacer.num"
          ></div>
        </div>
      </div>
      <div
        :class="[
          'row items-top mt-3 text-center font-bold',
          isEqual ? 'text-green-500' : 'text-red-500',
        ]"
      >
        <div class="w-gr-4">{{ lHeight || 0 }}px</div>
        <div class="flex-grow"></div>
        <div class="w-gr-4">{{ rHeight || 0 }}px</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',

  data() {
    return {
      lCol: [],
      rCol: [],
      lHeight: 0,
      rHeight: 0,
    };
  },

  computed: {
    isEqual() {
      return this.lHeight === this.rHeight;
    },
  },

  watch: {
    lCol: {
      deep: true,
      handler(val, oldVal) {
        this.$nextTick(() => {
          let h = 0;
          if (val) {
            let { children } = this.$refs.lCol;
            for (var i = 0; i < children.length; i++) {
              let child = children[i];
              h += parseFloat(getComputedStyle(child)?.height);
            }
          }
          this.lHeight = Math.ceil(h * 10) / 10;
        });
      },
    },
    rCol: {
      deep: true,
      handler(val, oldVal) {
        this.$nextTick(() => {
          let h = 0;
          if (val) {
            let { children } = this.$refs.rCol;
            for (var i = 0; i < children.length; i++) {
              let child = children[i];
              h += parseFloat(getComputedStyle(child)?.height);
            }
          }
          this.rHeight = Math.ceil(h * 10) / 10;
        });
      },
    },
  },

  methods: {
    addSpacer(col, num, color) {
      let [colorKey, colorVal] = color.split('-');
      let darkerColor = `${colorKey}-${parseInt(colorVal) + 200}`;
      this[col].push({ num, bg: `bg-${color}`, border: `border-${darkerColor}`, h: `h-${num}` });
    },
  },
};
</script>

<style lang="scss">
.btn {
  @apply h-6 w-6 p-2 rounded-lg box-content leading-6 border text-center mb-4 mx-half-4 inline-block;
  &:hover {
    @apply bg-white;
  }
}
.bg-stripes {
  background-image: linear-gradient(
    45deg,
    #ffffff 18.75%,
    #000000 18.75%,
    #000000 50%,
    #ffffff 50%,
    #ffffff 68.75%,
    #000000 68.75%,
    #000000 100%
  );
  background-size: 11.31px 11.31px;
}
.shadow-inner {
  box-shadow: inset 0 -0.1px 0 0.1px rgba(0, 0, 0, 0.75);
}
</style>

<!-- <style lang="scss" src="./Calculator.scss" scoped></style> -->

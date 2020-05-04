<template>
  <div class="Calculator">
    <div class="container">
      <h1 class="text-3xl font-brand font-bold mb-7">Golden Calculator</h1>
      <div class="row sm:flex-no-wrap">
        <div>
          <p class="font-brand font-extrabold">What is the Golden Ratio?</p>
          <p class="mt-3">
            You've found the Golden Ratio when the ratio between two lengths is the same as the
            ratio between the longer of the two and the total length of the two (see image). When
            you get to the numbers below, you can picture <i>b</i> as 1, <i>a</i> as 2, and
            <i>a + b</i> as 3. Or if you keep going, if <i>b</i> is 2, <i>a</i> is 3, then 4 would
            be <i>a + b</i>. You could use any three sequential numbers. That's the "magic" of the
            Golden Ratio. <br /><br />TL;DR: The Golden Ratio is ~1.61803398875...
          </p>
        </div>
        <div class="sm:w-gr-7 flex-grow sm:flex-shrink-0 text-center sm:text-left">
          <div class="sm:ml-3 p-4 shadow-lg bg-white inline-block rounded mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Golden_ratio_line.svg/440px-Golden_ratio_line.svg.png"
              width="220"
              alt=""
              class="mx-auto inline-block"
            />
          </div>
        </div>
      </div>
      <p class="mt-6 font-brand font-extrabold">But wait... there's more!</p>
      <p class="mt-3">
        Not only can two segments combine to equal one bigger segment. There are all sorts of
        amazing combinations!
      </p>
      <p class="mt-6">
        This calculator helps you discover for yourself many of the various golden ratio
        combinations that end up being equal.
      </p>
      <p class="mt-6"><i class="far fa-arrow-right mr-3"></i>See if you can match both sides!</p>
      <div class="row mt-8">
        <div class="col w-gr-4">
          <div class="flex justify-center flex-wrap">
            <button
              @click="addSpacer('lCol', 1)"
              :class="[`btn text-${colorsForNums[1].split('-')[0]}-500 border-${colorsForNums[1]}`]"
            >
              1
            </button>
            <button
              @click="addSpacer('lCol', 2)"
              :class="[`btn text-${colorsForNums[2].split('-')[0]}-500 border-${colorsForNums[2]}`]"
            >
              2
            </button>
            <button
              @click="addSpacer('lCol', 3)"
              :class="[`btn text-${colorsForNums[3].split('-')[0]}-500 border-${colorsForNums[3]}`]"
            >
              3
            </button>
            <button
              @click="addSpacer('lCol', 4)"
              :class="[`btn text-${colorsForNums[4].split('-')[0]}-500 border-${colorsForNums[4]}`]"
            >
              4
            </button>
            <button
              @click="addSpacer('lCol', 5)"
              :class="[`btn text-${colorsForNums[5].split('-')[0]}-500 border-${colorsForNums[5]}`]"
            >
              5
            </button>
            <button
              @click="addSpacer('lCol', 6)"
              :class="[`btn text-${colorsForNums[6].split('-')[0]}-500 border-${colorsForNums[6]}`]"
            >
              6
            </button>
            <button
              @click="addSpacer('lCol', 7)"
              :class="[`btn text-${colorsForNums[7].split('-')[0]}-500 border-${colorsForNums[7]}`]"
            >
              7
            </button>
            <button
              @click="addSpacer('lCol', 8)"
              :class="[`btn text-${colorsForNums[8].split('-')[0]}-500 border-${colorsForNums[8]}`]"
            >
              8
            </button>
            <button
              @click="addSpacer('lCol', 9)"
              :class="[`btn text-${colorsForNums[9].split('-')[0]}-500 border-${colorsForNums[9]}`]"
            >
              9
            </button>
            <button
              @click="addSpacer('lCol', 10)"
              :class="[
                `btn text-${colorsForNums[10].split('-')[0]}-500 border-${colorsForNums[10]}`,
              ]"
            >
              10
            </button>
            <button
              @click="addSpacer('lCol', 11)"
              :class="[
                `btn text-${colorsForNums[11].split('-')[0]}-500 border-${colorsForNums[11]}`,
              ]"
            >
              11
            </button>
          </div>
        </div>
        <div class="flex-grow col">&nbsp;</div>
        <div class="col w-gr-4">
          <div class="flex justify-center flex-wrap">
            <button
              @click="addSpacer('rCol', 1)"
              :class="[`btn text-${colorsForNums[1].split('-')[0]}-500 border-${colorsForNums[1]}`]"
            >
              1
            </button>
            <button
              @click="addSpacer('rCol', 2)"
              :class="[`btn text-${colorsForNums[2].split('-')[0]}-500 border-${colorsForNums[2]}`]"
            >
              2
            </button>
            <button
              @click="addSpacer('rCol', 3)"
              :class="[`btn text-${colorsForNums[3].split('-')[0]}-500 border-${colorsForNums[3]}`]"
            >
              3
            </button>
            <button
              @click="addSpacer('rCol', 4)"
              :class="[`btn text-${colorsForNums[4].split('-')[0]}-500 border-${colorsForNums[4]}`]"
            >
              4
            </button>
            <button
              @click="addSpacer('rCol', 5)"
              :class="[`btn text-${colorsForNums[5].split('-')[0]}-500 border-${colorsForNums[5]}`]"
            >
              5
            </button>
            <button
              @click="addSpacer('rCol', 6)"
              :class="[`btn text-${colorsForNums[6].split('-')[0]}-500 border-${colorsForNums[6]}`]"
            >
              6
            </button>
            <button
              @click="addSpacer('rCol', 7)"
              :class="[`btn text-${colorsForNums[7].split('-')[0]}-500 border-${colorsForNums[7]}`]"
            >
              7
            </button>
            <button
              @click="addSpacer('rCol', 8)"
              :class="[`btn text-${colorsForNums[8].split('-')[0]}-500 border-${colorsForNums[8]}`]"
            >
              8
            </button>
            <button
              @click="addSpacer('rCol', 9)"
              :class="[`btn text-${colorsForNums[9].split('-')[0]}-500 border-${colorsForNums[9]}`]"
            >
              9
            </button>
            <button
              @click="addSpacer('rCol', 10)"
              :class="[
                `btn text-${colorsForNums[10].split('-')[0]}-500 border-${colorsForNums[10]}`,
              ]"
            >
              10
            </button>
            <button
              @click="addSpacer('rCol', 11)"
              :class="[
                `btn text-${colorsForNums[11].split('-')[0]}-500 border-${colorsForNums[11]}`,
              ]"
            >
              11
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-6">
        <div v-if="lCol.length" class="w-gr-4 flex justify-between">
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="lCol.shift()"
          >
            <i class="fa fa-times fa-fw mr-1"></i>First
          </button>
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="lCol = []"
          >
            Clear
          </button>
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="lCol.pop()"
          >
            <i class="fa fa-times fa-fw mr-1"></i>Last
          </button>
        </div>
        <div class="flex-grow"></div>
        <div v-if="rCol.length" class="w-gr-4 flex justify-between">
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="rCol.shift()"
          >
            <i class="fa fa-times fa-fw mr-1"></i>First
          </button>
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="rCol = []"
          >
            Clear
          </button>
          <button
            class="text-xs text-red-500 hover:text-red-700 uppercase font-bold tracking-wider"
            @click="rCol.pop()"
          >
            <i class="fa fa-times fa-fw mr-1"></i>Last
          </button>
        </div>
      </div>
      <div class="row mt-3 items-top">
        <div ref="lCol" class="bg-stripes col w-gr-4 bg-white border-3 border-black">
          <div
            v-for="spacer in lCol"
            :class="[spacer.bg, spacer.h, 'shadow-inner']"
            :title="spacer.num"
          ></div>
        </div>
        <div class="flex-grow col text-center">
          <div
            v-if="this.lCol.length || this.rCol.length"
            class="py-4 -mb-9 cursor-pointer"
            @click="
              lCol = [];
              rCol = [];
            "
          >
            <div>
              <i v-if="isEqual" class="fa fa-check-circle fa-3x fa-fw text-green-500"></i>
              <i v-else class="fa fa-times-circle fa-3x fa-fw text-red-500"></i>
            </div>
            <button
              class="leading-5 mt-5 text-red-500 border-b border-red-400 hover:text-red-400 hover:border-b border-red-300"
            >
              Reset All
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
      <div :class="['row items-top mt-3 text-center']">
        <div class="w-gr-4">
          <!-- <div :class="['font-bold', isEqual ? 'text-green-500' : 'text-red-500']">
            {{ lHeight || 0 }}px
          </div> -->
          <div v-if="matches.length && lHeight < rHeight" class="mt-5">
            <div
              class="font-bold uppercase text-sm uppercase font-brand font-black tracking-wider text-gray-500 mb-3"
            >
              Try
            </div>
            <div v-for="arr in matches">{{ arr }}</div>
          </div>
          <div v-else-if="lColNums[0].length" class="mt-5">
            <div
              class="font-bold uppercase text-sm uppercase font-brand font-black tracking-wider text-gray-500 mb-3"
            >
              Using
            </div>
            <div v-for="arr in lColNums">
              {{ arr }}
            </div>
          </div>
        </div>
        <div class="flex-grow pointer-events-none"></div>
        <div class="w-gr-4">
          <!-- <div :class="['font-bold', isEqual ? 'text-green-500' : 'text-red-500']">
            {{ rHeight || 0 }}px
          </div> -->
          <div v-if="matches.length && rHeight < lHeight" class="mt-5">
            <div
              class="font-bold uppercase text-sm uppercase font-brand font-black tracking-widest text-gray-500 mb-3"
            >
              Try
            </div>
            <div v-for="arr in matches">{{ arr }}</div>
          </div>
          <div v-else-if="rColNums[0].length" class="mt-5">
            <div
              class="font-bold uppercase text-sm uppercase font-brand font-black tracking-wider text-gray-500 mb-3"
            >
              Using
            </div>
            <div v-for="arr in rColNums">
              {{ arr }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findGoldenMatches } from '@/utils/calc';
export default {
  name: 'Calculator',

  data() {
    return {
      lCol: [],
      rCol: [],
      lHeight: 0,
      rHeight: 0,
      colorsForNums: [
        null,
        'green-300',
        'green-500',
        'teal-300',
        'teal-500',
        'blue-300',
        'blue-500',
        'indigo-300',
        'indigo-500',
        'purple-300',
        'purple-500',
        'pink-300',
      ],
    };
  },

  computed: {
    lColNums() {
      return [
        this.lCol.reduce((arr, cur) => {
          arr.push(cur.num);
          return arr;
        }, []),
      ];
    },

    rColNums() {
      return [
        this.rCol.reduce((arr, cur) => {
          arr.push(cur.num);
          return arr;
        }, []),
      ];
    },

    isEqual() {
      return this.foundGoldenMatches?.equal;
    },

    matches() {
      return this.foundGoldenMatches?.matches || [];
    },

    foundGoldenMatches() {
      return findGoldenMatches(
        this.lCol.reduce((arr, cur) => {
          arr.push(cur.num);
          return arr;
        }, []),
        this.rCol.reduce((arr, cur) => {
          arr.push(cur.num);
          return arr;
        }, []),
      );
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
          this.lHeight = Math.round(h * 10) / 10;
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
          this.rHeight = Math.round(h * 10) / 10;
        });
      },
    },
  },

  created() {
    this.addSpacer('lCol', 6);
    this.addSpacer('lCol', 5);
    this.addSpacer('lCol', 6);
  },

  methods: {
    addSpacer(col, num) {
      let color = this.colorsForNums[num];
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
  @apply bg-white;
  // background-image: linear-gradient(
  //   45deg,
  //   rgba(red, 1) 18.75%,
  //   rgba(red, 0.5) 18.75%,
  //   rgba(red, 0.5) 50%,
  //   rgba(red, 1) 50%,
  //   rgba(red, 1) 68.75%,
  //   rgba(red, 0.5) 68.75%,
  //   rgba(red, 0.5) 100%
  // );
  // background-size: 11.31px 11.31px;
}
.shadow-inner {
  box-shadow: inset 0 -0.1px 0 0.1px rgba(0, 0, 0, 0.75);
}
</style>

<!-- <style lang="scss" src="./Calculator.scss" scoped></style> -->

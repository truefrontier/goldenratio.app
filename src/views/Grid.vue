<template>
  <div class="Grid">
    <section class="container text-center text-gray-600 leading-6">
      <div class="text-left">
        <h1 class="font-brand font-extrabold text-4xl mb-7 text-gray-800 leading-7">
          The Golden Grid
        </h1>
        <p class="mb-6">
          Before you start, you'll need some CSS to get started with the Golden Grid. Feel free to
          tweak to your liking:
        </p>
        <pre class="p-4 bg-gray-800 text-gray-200 rounded-lg mb-6"><code>.container {
  @apply w-full max-w-screen-xl mx-auto px-5;
}

.row {
  @apply flex flex-wrap;
}</code></pre>
        <h2 class="font-brand font-bold mb-4 text-gray-700 text-2xl leading-7">
          The Foundational Example
        </h2>
        <p class="mb-6">
          The Golden Grid works very differently than the more common 12-column grid. It will
          require you to retrain your brain. 🤯 When it "clicks", you'll have a world of
          possibilities open up to you!
        </p>
        <div class="row sm:flex-no-wrap">
          <div>
            <p class="mb-6">
              <i>Firstly, what is the Golden Ratio?</i> <br />
              You've found the Golden Ratio when the ratio between two lengths is the same as the
              ratio between the longer of the two and the total length of the two (see image). To
              just get straight to it, the Golden Ratio turns out to be about 1.61803398875...
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
        <div class="row sm:flex-no-wrap">
          <div>
            <p class="mb-6">
              <i>Secondly, why use the Golden Ratio?</i> <br />
              There's something intrinsically beautiful about the Golden Ratio. One theory is that
              nature uses it so often that we're naturally inclined to enjoy it. It's funny how
              something asymetrical can feel so balanced.
            </p>
          </div>
          <div class="sm:w-gr-7 flex-grow sm:flex-shrink-0 text-center sm:text-left">
            <div class="sm:ml-3 p-2 shadow-lg bg-white inline-block rounded mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/500px-Fibonacci_spiral_34.svg.png"
                width="150"
                alt=""
                class="m-3 inline-block"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NautilusCutawayLogarithmicSpiral.jpg/440px-NautilusCutawayLogarithmicSpiral.jpg"
                width="150"
                alt=""
                class="m-3 inline-block"
              />
            </div>
          </div>
        </div>
        <p class="mb-6">
          Give it some time to sink in. Look for the patterns. It's best to continue examining this
          example before moving on to the others. The following examples only build off this one
          example.
        </p>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-6">6</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-5">5</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-1">1</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-1">1</div>
        <div class="bg-gray-300 py-3 w-gr-1">1</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-1">1</div>
        <div class="bg-gray-300 py-3 w-gr-1">1</div>
        <div class="bg-gray-400 py-3 w-gr-1">1</div>
      </div>

      <h2 class="font-brand font-bold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left">
        Doubles
      </h2>
      <p class="mb-6 text-left">
        Below is the same as above, but each time there were two divs with the same width, we
        combined them into one div that's double the width.
      </p>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-6">6</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-5">5</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-4">double-4</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-400 py-3 w-gr-double-3">double-3</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-3">double-3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-double-2">double-2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-3">double-3</div>
        <div class="bg-gray-400 py-3 w-gr-double-2">double-2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-1">1</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-2">double-2</div>
        <div class="bg-gray-400 py-3 w-gr-double-2">double-2</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-double-1">double-1</div>
        <div class="bg-gray-300 py-3 w-gr-1">1</div>
      </div>

      <div class="row">
        <div class="w-gr-half-7">
          <h2
            class="font-brand font-extrabold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left"
          >
            Halves - Part 1
          </h2>
          <p class="mb-6 text-left">
            This half references the first set of grid examples, but it uses half-widths.
          </p>
        </div>
        <div class="w-gr-half-7">
          <h2
            class="font-brand font-extrabold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left"
          >
            Halves - Part 2
          </h2>
          <p class="mb-6 text-left">
            This half references the second set of grid examples, but where it used doubles above,
            we use whole below, and where it used whole above, we use halves below.
          </p>
        </div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-6">half-6</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
        <div class="bg-gray-300 py-3 w-gr-half-3">half-3</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-5">half-5</div>
        <div class="bg-gray-400 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-300 py-3 w-gr-half-2">half-2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-400 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-300 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-2">2</div>
        <div class="bg-gray-400 py-3 w-gr-half-3">half-3</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-400 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-300 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-400 py-3 w-gr-half-2">half-2</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
        <div class="bg-gray-300 py-3 w-gr-half-2">half-2</div>
        <div class="bg-gray-400 py-3 w-gr-half-1">half-1</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-6">and so on...</div>
        <div class="bg-gray-400 py-3 w-gr-half-6">and so on...</div>
      </div>

      <h2 class="font-brand font-bold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left">
        Mix and Match
      </h2>
      <p class="mb-6 text-left">
        Now, you can reference any combination above to mix and max as you please. There are just a
        few examples.
      </p>

      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-400 py-3 w-gr-5">5</div>
        <div class="bg-gray-300 py-3 w-gr-half-4">half-4</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-5">half-5</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
        <div class="bg-gray-300 py-3 w-gr-half-5">half-5</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-400 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-300 py-3 w-gr-double-3">double-3</div>
        <div class="bg-gray-400 py-3 w-gr-2">2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-3">double-3</div>
        <div class="bg-gray-400 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-300 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-400 py-3 w-gr-double-2">double-2</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-double-4">double-4</div>
        <div class="bg-gray-400 py-3 w-gr-half-3">half-3</div>
        <div class="bg-gray-300 py-3 w-gr-half-2">half-2</div>
        <div class="bg-gray-400 py-3 w-gr-half-1">half-1</div>
      </div>

      <div class="text-white text-left px-6 py-6 my-8 bg-gray-800">
        <h2 class="font-brand font-bold text-2xl mb-4">
          Catch the rhythm... the Golden Vertical Rhythm
        </h2>
        <p>
          Once you're comfortable with what combinations of columns fit or match other combinations,
          you're ready for Golden Vertical Rhythm. The right combinations of margin, padding, and
          line-hight is all you need to stay in perfect rhythm throughout your entire page. It's
          really not as hard as it may sound.
        </p>
      </div>

      <h2 class="font-brand font-bold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left">
        So Close...
      </h2>
      <p class="mb-6 text-left">
        Here is not an exhaustive list of combinations that may be very close to consistent but fall
        just short (pun intended). We use <code>.justify-between</code> to fill the space.
      </p>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-between">
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-half-6">half-6</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-between">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-400 py-3 w-gr-half-4">half-4</div>
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-between">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-400 py-3 w-gr-1">w-1</div>
        <div class="bg-gray-400 py-3 w-gr-1">w-1</div>
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
      </div>

      <h2 class="font-brand font-bold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left">
        Offset or Fill Space
      </h2>
      <p class="mb-6 text-left">
        You may want one or more <code>.col</code>'s with a set width, and have the others just fill
        the space. To do that, you'll need to use <code>.flex-no-wrap</code> on the
        <code>.row</code> and <code>.flex-shrink-0</code> on the columns with set widths.
      </p>
      <div class="row bg-white mb-4 px-5 -mx-5 flex-no-wrap">
        <div class="bg-gray-300 flex-grow py-3">flex-grow</div>
        <div class="bg-gray-400 py-3 w-gr-4">4</div>
      </div>
      <p class="mb-6 pt-double-1 leading-6 text-left">
        Or use <code>ml-auto</code> to offset and/or <code>mr-auto</code> to center column(s).
      </p>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-5 ml-auto">6 ml-auto</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-4 ml-auto">5 ml-auto</div>
        <div class="bg-gray-400 py-3 w-gr-3 mr-auto">4 mr-auto</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-5 ml-auto">6 ml-auto</div>
        <div class="bg-gray-400 py-3 w-gr-3 mr-auto">4 mr-auto</div>
      </div>

      <h2 class="font-brand font-bold mb-4 mt-8 text-gray-700 text-2xl leading-7 text-left">
        Common Patterns
      </h2>
      <p class="mb-6 text-left">
        Of course if you need to use the more common (and perhaps more boring) patterns, here are a
        few simple ways to make it possible. Some <code>.row</code>'s below use
        <code>.justify-around</code> or <code>.justify-between</code> as needed.
      </p>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 py-3 w-gr-half-6">half-6</div>
        <div class="bg-gray-400 py-3 w-gr-half-6">half-6</div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-around">
        <div class="bg-gray-300 py-3 w-gr-double-2">double-2</div>
        <div class="bg-gray-300 py-3 w-gr-double-2">double-2</div>
      </div>
      <div class="row px-5 -mx-5 -mt-2 mb-4">
        <div>
          <p class="text-left text-xs pb-1">
            <code>.justify-around</code>
          </p>
        </div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-around">
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
        <div class="bg-gray-300 py-3 w-gr-4">4</div>
      </div>
      <div class="row px-5 -mx-5 -mt-2 mb-4">
        <div>
          <p class="text-left text-xs pb-1">
            <code>.justify-around</code>
          </p>
        </div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-between">
        <div class="bg-gray-300 py-3 w-gr-half-5">half-5</div>
        <div class="bg-gray-400 py-3 w-gr-half-5">half-5</div>
        <div class="bg-gray-300 py-3 w-gr-half-5">half-5</div>
      </div>
      <div class="row px-5 -mx-5 -mt-2 mb-4">
        <div>
          <p class="text-left text-xs pb-1">
            <code>.justify-between</code>
          </p>
        </div>
      </div>
      <div class="row bg-white mb-4 px-5 -mx-5 justify-between">
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
        <div class="bg-gray-300 py-3 w-gr-3">3</div>
        <div class="bg-gray-400 py-3 w-gr-3">3</div>
      </div>
      <div class="row px-5 -mx-5 -mt-2 mb-4">
        <div>
          <p class="text-left text-xs pb-1">
            <code>.justify-between</code>
          </p>
        </div>
      </div>
      <!--
      <div class="row px-5 -mx-5 items-start">
        <div class="w-gr-half-7">
          <p class="text-left text-xs leading-6 pb-4 mb-3">
            <b>NOTE</b> — The above <code>.row</code> div uses
            <code>.justify-between</code>
          </p>
        </div>
        <div class="bg-red-200 py-3 w-gr-half-7 text-sm">
          <div class="bg-red-100">Vertical Rhythm Example</div>
        </div>
      </div>
       -->
    </section>
    <!--
    <section class="container py-5 text-center text-gray-600">
      <h1 class="font-extrabold text-2xl leading-7 mb-4 text-gray-800 text-left">Vertical Rhythm Example</h1>
      <div class="row bg-white mb-4 px-5 -mx-5">
        <div class="bg-gray-300 w-gr-half-6">
          <div class="bg-gray-500 my-4 leading-6 py-2">my-4 leading-6 py-2</div>
        </div>
        <div class="bg-gray-300 w-gr-half-6">
          <div class="bg-gray-500 mb-4 leading-7">mb-4 leading-7</div>
          <div class="bg-gray-500 mt-2 leading-7">mt-2 leading-7</div>
        </div>
        <div class="bg-gray-300 w-gr-half-6"></div>
      </div>
    </section>
     -->
  </div>
</template>

<script>
export default {
  name: 'Grid',
};
</script>

<!-- <style lang="scss" src="./Grid.scss" scoped></style> -->

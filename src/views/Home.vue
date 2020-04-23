<template>
  <div class="home">
    <section class="container px-3 py-5 text-center text-gray-600 leading-4">
      <div class="text-left">
        <h1 class="font-extrabold text-4xl mb-5 text-gray-800 leading-5">
          The Golden Grid
        </h1>
        <h2 class="font-extrabold mb-2 text-gray-700 text-2xl leading-5">
          The Foundational Example
        </h2>
        <p class="mb-4">
          The Golden Grid works very differently than the more common 12-column grid. It will
          require you to retrain your brain. 🤯 When it "clicks", you'll have a world of
          possibilities open up to you!
        </p>
        <div class="row sm:flex-no-wrap">
          <div class="col">
            <p class="mb-4">
              <i>Firstly, what is the Golden Ratio?</i> <br />
              You've found the Golden Ratio when the ratio between two lengths is the same as the
              ratio between the longer of the two and the total length of the two (see image). To
              just get straight to it, the Golden Ratio turns out to be about 1.61803398875...
            </p>
          </div>
          <div class="col sm:w-5 flex-grow sm:flex-shrink-0 text-center sm:text-left">
            <div class="sm:ml-3 p-4 shadow-lg inline-block rounded mb-4">
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
          <div class="col">
            <p class="mb-4">
              <i>Secondly, why use the Golden Ratio?</i> <br />
              There's something intrinsically beautiful about the Golden Ratio. One theory is that
              nature uses it so often that we're naturally inclined to enjoy it. It's funny how
              something asymetrical can feel so balanced.
            </p>
          </div>
          <div class="col sm:w-5 flex-grow sm:flex-shrink-0 text-center sm:text-left">
            <div class="sm:ml-3 p-2 shadow-lg inline-block rounded mb-4">
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
        <p class="mb-2">
          Give it some time to sink in. Look for the patterns. It's best to continue examining this
          example before moving on to the others. The following examples only build off this one
          example.
        </p>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-7">w-7</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-6">w-6</div>
        <div class="bg-gray-400 col py-3 w-5">w-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-5">w-5</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
      </div>

      <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">Doubles</h2>
      <p class="mb-2 text-left">
        Below is the same as above, but each time there were two divs with the same width, we
        combined them into one double-width div.
      </p>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-7">w-7</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-6">w-6</div>
        <div class="bg-gray-400 col py-3 w-5">w-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-5">w-double-5</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-double-3">w-double-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-400 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-2">w-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-400 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-400 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-double-1">w-double-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-3">w-double-3</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-double-1">w-double-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-2">w-2</div>
        <div class="bg-gray-400 col py-3 w-double-1">w-double-1</div>
        <div class="bg-gray-300 col py-3 w-double-1">w-double-1</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-400 col py-3 w-double-2">w-double-2</div>
        <div class="bg-gray-300 col py-3 w-double-1">w-double-1</div>
        <div class="bg-gray-400 col py-3 w-double-1">w-double-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
      </div>

      <div class="row">
        <div class="col w-half-7">
          <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
            Halves - Part 1
          </h2>
          <p class="mb-2 text-left">
            This half references the first set of grid examples, but it uses half-widths.
          </p>
        </div>
        <div class="col w-half-7">
          <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
            Halves - Part 2
          </h2>
          <p class="mb-2 text-left">
            This half references the second set of grid examples, but where it used doubles above,
            we use whole below, and where it used whole above, we use halves below.
          </p>
        </div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-7">w-half-7</div>
        <div class="bg-gray-400 col py-3 w-5">w-5</div>
        <div class="bg-gray-300 col py-3 w-half-4">w-half-4</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-6">w-half-6</div>
        <div class="bg-gray-400 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-300 col py-3 w-half-3">w-half-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-400 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-300 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-half-4">w-half-4</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-400 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-300 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-400 col py-3 w-half-3">w-half-3</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-300 col py-3 w-half-3">w-half-3</div>
        <div class="bg-gray-400 col py-3 w-half-2">w-half-2</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-7">and so on...</div>
        <div class="bg-gray-400 col py-3 w-half-7">and so on...</div>
      </div>

      <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
        Mix and Match
      </h2>
      <p class="mb-2 text-left">
        Now, you can reference any combination above to mix and max as you please. There are just a
        few examples.
      </p>

      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-400 col py-3 w-6">w-6</div>
        <div class="bg-gray-300 col py-3 w-half-5">w-half-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-6">w-half-6</div>
        <div class="bg-gray-400 col py-3 w-5">w-5</div>
        <div class="bg-gray-300 col py-3 w-half-6">w-half-6</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-400 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-400 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-300 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-400 col py-3 w-double-3">w-double-3</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-double-5">w-double-5</div>
        <div class="bg-gray-400 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-300 col py-3 w-half-3">w-half-3</div>
        <div class="bg-gray-400 col py-3 w-half-2">w-half-2</div>
      </div>

      <div class="text-white text-left px-4 py-4 my-6 bg-gray-800">
        <h2 class="font-extrabold text-2xl mb-2">
          Catch the rhythm... the Golden Vertical Rhythm
        </h2>
        <p>
          Once you're comfortable with what combinations of columns fit or match other combinations,
          you're ready for Golden Vertical Rhythm. The right combinations of margin, padding, and
          line-hight is all you need to stay in perfect rhythm throughout your entire page. It's
          really not as hard as it may sound.
        </p>
      </div>

      <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
        So Close...
      </h2>
      <p class="mb-2 text-left">
        Here is not an exhaustive list of combinations that may be very close to consistent but fall
        just short (pun intended). We use <code>.justify-between</code> to fill the space.
      </p>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-half-7">w-half-7</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-half-5">w-half-5</div>
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-1">w-1</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-3">w-3</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-half-4">w-half-4</div>
        <div class="bg-gray-400 col py-3 w-1">w-1</div>
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
      </div>

      <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
        Offset or Fill Space
      </h2>
      <p class="mb-2 text-left">
        You may want one or more <code>.col</code>'s with a set width, and have the others just fill
        the space. To do that, you'll need to use <code>.flex-no-wrap</code> on the
        <code>.row</code> and <code>.flex-shrink-0</code> on the columns with set widths.
      </p>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 flex-no-wrap">
        <div class="bg-gray-300 col py-3">col</div>
        <div class="bg-gray-400 col py-3 w-5 flex-no-shrink">w-5 flex-no-shrink</div>
      </div>
      <p class="mb-2 pt-double-3 leading-4 text-left">
        Or use <code>ml-auto</code> to offset and/or <code>mr-auto</code> to center column(s).
      </p>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-6 ml-auto">w-6 ml-auto</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-5 ml-auto">w-5 ml-auto</div>
        <div class="bg-gray-400 col py-3 w-4 mr-auto">w-4 mr-auto</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-6 ml-auto">w-6 ml-auto</div>
        <div class="bg-gray-400 col py-3 w-4 mr-auto">w-4 mr-auto</div>
      </div>

      <h2 class="font-extrabold mb-2 mt-6 text-gray-700 text-2xl leading-5 text-left">
        Common Patterns
      </h2>
      <p class="mb-2 text-left">
        Of course if you need to use the more common (and perhaps more boring) patterns, here are a
        few simple ways to make it possible. Some <code>.row</code>'s below use
        <code>.justify-around</code> or <code>.justify-between</code> as needed.
      </p>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col py-3 w-half-7">w-half-7</div>
        <div class="bg-gray-400 col py-3 w-half-7">w-half-7</div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-around">
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
        <div class="bg-gray-300 col py-3 w-double-4">w-double-4</div>
      </div>
      <div class="row px-3 -mx-3 -mt-2 mb-2">
        <div class="col">
          <p class="text-left text-xs pb-1">
            <code>.justify-around</code>
          </p>
        </div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-around">
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
        <div class="bg-gray-300 col py-3 w-5">w-5</div>
      </div>
      <div class="row px-3 -mx-3 -mt-2 mb-2">
        <div class="col">
          <p class="text-left text-xs pb-1">
            <code>.justify-around</code>
          </p>
        </div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-half-6">w-half-6</div>
        <div class="bg-gray-400 col py-3 w-half-6">w-half-6</div>
        <div class="bg-gray-300 col py-3 w-half-6">w-half-6</div>
      </div>
      <div class="row px-3 -mx-3 -mt-2 mb-2">
        <div class="col">
          <p class="text-left text-xs pb-1">
            <code>.justify-between</code>
          </p>
        </div>
      </div>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3 justify-between">
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
        <div class="bg-gray-300 col py-3 w-4">w-4</div>
        <div class="bg-gray-400 col py-3 w-4">w-4</div>
      </div>
      <div class="row px-3 -mx-3 -mt-2 mb-2">
        <div class="col">
          <p class="text-left text-xs pb-1">
            <code>.justify-between</code>
          </p>
        </div>
      </div>
      <!--
      <div class="row px-3 -mx-3 items-start">
        <div class="col w-half-7">
          <p class="text-left text-xs leading-4 pb-4 mb-3">
            <b>NOTE</b> — The above <code>.row</code> div uses
            <code>.justify-between</code>
          </p>
        </div>
        <div class="bg-red-200 col py-3 w-half-7 text-sm">
          <div class="bg-red-100">Vertical Rhythm Example</div>
        </div>
      </div>
       -->
    </section>
    <!--
    <section class="container py-5 text-center text-gray-600">
      <h1 class="font-extrabold text-2xl leading-5 mb-2 text-gray-800 text-left">Vertical Rhythm Example</h1>
      <div class="row bg-gray-200 mb-2 px-3 -mx-3">
        <div class="bg-gray-300 col w-half-6">
          <div class="bg-gray-500 my-4 leading-4 py-2">my-4 leading-4 py-2</div>
        </div>
        <div class="bg-gray-300 col w-half-6">
          <div class="bg-gray-500 mb-2 leading-5">mb-2 leading-5</div>
          <div class="bg-gray-500 mt-2 leading-5">mt-2 leading-5</div>
        </div>
        <div class="bg-gray-300 col w-half-6"></div>
      </div>
    </section>
     -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

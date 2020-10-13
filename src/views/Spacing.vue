<template>
  <div class="Spacing">
    <section class="container text-left text-gray-600 leading-6">
      <table class="w-full bg-white">
        <thead>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Name</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Size</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Pixels</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700">
            <strong class="sr-only">Preview</strong>
          </th>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">0</td>
            <td class="py-3 px-4 border-b border-gray-300">0</td>
            <td class="py-3 px-4 border-b border-gray-300">0px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-0"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              1 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-1)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">0.135rem</td>
            <td class="py-3 px-4 border-b border-gray-300">2.16px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-1"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              2 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-2)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">0.219rem</td>
            <td class="py-3 px-4 border-b border-gray-300">3.5px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-2"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              3 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-3)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">0.354rem</td>
            <td class="py-3 px-4 border-b border-gray-300">5.66px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-3"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              4 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-4)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">0.573rem</td>
            <td class="py-3 px-4 border-b border-gray-300">9.16px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-4"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              5 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-5)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">0.927rem</td>
            <td class="py-3 px-4 border-b border-gray-300">14.828px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-5"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              6 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-6)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">1.5rem</td>
            <td class="py-3 px-4 border-b border-gray-300">24px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-6"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              7 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-7)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">2.427rem</td>
            <td class="py-3 px-4 border-b border-gray-300">38.83px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-7"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              8 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-8)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">3.927rem</td>
            <td class="py-3 px-4 border-b border-gray-300">62.83px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-8"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              9 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-9)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">6.354rem</td>
            <td class="py-3 px-4 border-b border-gray-300">101.66px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-9"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              10 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-10)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">10.281rem</td>
            <td class="py-3 px-4 border-b border-gray-300">164.48px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-10"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              11 <code class="ml-4 text-sm bg-white px-3 py-2 rounded">var(--golden-ratio-11)</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">16.635rem</td>
            <td class="py-3 px-4 border-b border-gray-300">266.16px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-11"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="mt-8">
        When you add the spacing for double and half values, you get the following pattern:
      </p>

      <table class="mt-4 w-full bg-white">
        <thead>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Name</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Size</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700"><strong>Pixels</strong></th>
          <th class="py-3 px-4 bg-gray-200 text-gray-700">
            <strong class="sr-only">Preview</strong>
          </th>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">5</td>
            <td class="py-3 px-4 border-b border-gray-300">0.927rem</td>
            <td class="py-3 px-4 border-b border-gray-300">14.828px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-5"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">double-4</td>
            <td class="py-3 px-4 border-b border-gray-300">1.15rem</td>
            <td class="py-3 px-4 border-b border-gray-300">18.33px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-double-4"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">half-7</td>
            <td class="py-3 px-4 border-b border-gray-300">1.21rem</td>
            <td class="py-3 px-4 border-b border-gray-300">19.41px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-half-7"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">6</td>
            <td class="py-3 px-4 border-b border-gray-300">1.5rem</td>
            <td class="py-3 px-4 border-b border-gray-300">24px</td>
            <td class="py-3 px-4 border-b border-gray-300">
              <div class="bg-gray-500 h-6 w-6"></div>
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              double-<code class="text-sm bg-gray-200 px-3 py-2 rounded">n - 1</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">
              half-<code class="text-sm bg-gray-200 px-3 py-2 rounded">n + 2</code>
            </td>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
          </tr>
          <tr>
            <td class="py-3 px-4 border-b border-gray-300">...</td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
            <td class="py-3 px-4 border-b border-gray-300"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Spacing',
};
</script>

<!-- <style lang="scss" src="./Spacing.scss" scoped></style> -->

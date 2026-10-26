<template>
  <section class="McpCallout mt-9">
    <div class="container">
      <div
        class="bg-white rounded-lg border border-blue-400 shadow p-6 sm:flex sm:items-center sm:justify-between"
      >
        <div class="sm:mr-6">
          <h2 class="font-brand">
            <span class="text-lg font-extrabold text-blue-600 uppercase tracking-wider"
              >For AI Agents</span
            >
            <span class="leading-7 text-2xl font-bold block">Use these tools in your agent</span>
          </h2>
          <p class="mt-4">
            Give your AI agent the Golden Calculator, spacing scale, grid and Tailwind setup through
            the goldenratio.app MCP server. Paste the instructions into Claude, Cursor or any MCP
            client.
          </p>
        </div>
        <div class="mt-6 sm:mt-0 flex items-center whitespace-no-wrap">
          <button
            type="button"
            @click="copyInstructions"
            :class="[
              'copy-btn',
              copied ? 'text-green-700 border-green-700' : 'text-blue-600 border-blue-600',
            ]"
          >
            {{ copied ? 'Copied!' : 'Copy instructions' }}
          </button>
          <a :href="TERMS_URL" target="_blank" rel="noopener" class="link ml-5 text-sm">Terms</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const MCP_URL = 'https://mcp.goldenratio.app/mcp';
const TERMS_URL = 'https://github.com/truefrontier/goldenratio-mcp#hosted-service';

export const MCP_INSTRUCTIONS = `Install the goldenratio.app MCP server so you can use its golden-ratio design tools: the Golden Calculator, the golden spacing scale, the golden grid widths, the CSS variables and the tailwindcss-golden-ratio plugin setup.

Remote MCP URL (Streamable HTTP, no auth, read-only): ${MCP_URL}

Claude Code: run
claude mcp add --transport http goldenratio-app ${MCP_URL}

Cursor: add this to ~/.cursor/mcp.json (or .cursor/mcp.json in the project):
{
  "mcpServers": {
    "goldenratio-app": { "url": "${MCP_URL}" }
  }
}

Any other MCP client: add a remote (Streamable HTTP) server named "goldenratio-app" with the URL ${MCP_URL}. If your client only supports stdio servers, use: npx -y mcp-remote ${MCP_URL}

Once it's installed, list the tools (golden_calculator, golden_spacing, golden_grid, golden_css_variables, tailwind_plugin_setup, golden_ratio_steps) and confirm they work by calling golden_calculator with left [6, 5, 6] and right [].

Docs and source: https://github.com/truefrontier/goldenratio-mcp`;

export default {
  name: 'McpCallout',

  data() {
    return { copied: false, TERMS_URL };
  },

  beforeDestroy() {
    clearTimeout(this.timer);
  },

  methods: {
    async copyInstructions() {
      try {
        await navigator.clipboard.writeText(MCP_INSTRUCTIONS);
      } catch (e) {
        const el = document.createElement('textarea');
        el.value = MCP_INSTRUCTIONS;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      this.copied = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => (this.copied = false), 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-btn {
  @apply font-brand font-bold py-2 px-5 rounded-lg border leading-6 transition-colors duration-200;
  &:hover {
    @apply bg-blue-200;
  }
  &:focus {
    @apply outline-none shadow-outline;
  }
}
</style>

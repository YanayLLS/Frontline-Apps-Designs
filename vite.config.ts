import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to resolve figma:asset/* imports as transparent placeholder images
function figmaAssetPlugin() {
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23E9E9E9'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%2336415D' font-size='12'%3EAsset%3C/text%3E%3C/svg%3E";
  return {
    name: 'figma-asset-placeholder',
    enforce: 'pre' as const,
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) return '\0figma-placeholder:' + id;
    },
    load(id: string) {
      if (id.startsWith('\0figma-placeholder:')) {
        return `export default "${placeholder}"`;
      }
    },
  };
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Frontline-Apps-Designs/' : '/',
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

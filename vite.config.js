import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
  base: './'
}));
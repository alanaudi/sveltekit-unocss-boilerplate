import { defineConfig, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  // https://github.com/unocss/unocss#presets
  presets: [
    // this is required to use basic unocss
    presetUno(),
    presetWebFonts({
      // default provider
      provider: 'google',
      // use web font easily
      fonts: {
        // these will extend the default theme
        sans: 'SF Pro Display',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom fonts
        logo: 'Days One',
      },
    }),
  ],
})

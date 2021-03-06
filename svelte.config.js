// sveltekit
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

// style
import Unocss from 'unocss/vite'

// file system and url
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

// misc
const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        Unocss({
          /* options are defined in uno.config.js */
        }),
      ],
      define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
      },
    },
  },
}

export default config

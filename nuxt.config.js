import myTheme from './custom-theme.js'
import { faBars, faMoon, faSun, faCalendarWeek, faClock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Faraaz Baig',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Spartan:wght@500;600;700;800&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
 
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxt/content',
    '@nuxtjs/pwa',
  ],


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      source: "/icon.svg"
    }
  },

  build: {
  },

  chakra: {
    extendTheme: myTheme,
    icons: {
      iconPack: 'fa',
      iconSet: {
        faSun,
        faMoon,
        faBars,
        faCalendarWeek,
        faClock,
        faArrowLeft

      }
    }
  },
}

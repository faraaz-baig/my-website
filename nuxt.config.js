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
      { hid: 'description', name: 'description', content: "Faraaz Baig is a Bangalore based Tech Entrepreneur currently building @onegig, Full Stack Developer and a Podcaster." },
      { hid: 'og:description', name: 'og:description', content: "Faraaz Baig is a Bangalore based Tech Entrepreneur currently building @onegig, a Full Stack Developer and a Podcaster." },
      { hid: 'og:site_name', name: 'og:site_name', content: "Faraaz Baig" },
      { hid: 'og:title', name: 'og:title', content: "Faraaz Baig" },
      { hid: 'og:image', name: 'og:image', content: "/my.png" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Faraaz Baig - A tech entrepreneur" },
      { hid: 'twitter:site', name: 'twitter:site', content: "@faraazofficial" },
      { hid: 'twitter:creator', name: 'twitter:creator', content: "@faraazofficial" },
      { hid: 'twitter:card', name: 'twitter:card', content: "Faraaz Baig | A Tech Entreprenur" },
      { hid: 'twitter:image', name: 'twitter:image', content: "/my.png" },
      { hid: 'twitter:description', name: 'twitter:description', content: "Faraaz Baig is a Bangalore based Tech Entrepreneur currently building @onegig, a Full Stack Developer and a Podcaster." },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: "Faraaz Baig" },
      { hid: 'mobile-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: "Faraaz Baig" },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, personal webste, coding, entrepreneur, entreprenurship, bangalore, bengaluru, tech entrepreneur, teenage entrepreneur, onegig, faraaz baig, faraaz, linkedin, gmail, instagram, github, blog, podcast, impact act, viralfate, baig academy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
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
      source: "/favicon.svg"
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

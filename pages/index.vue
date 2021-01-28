<template>
    <c-box width="100%"  d="flex" :justify-content="['center', 'center', 'center', 'space-around']" :align-items="['center', 'center', 'space-between', 'center']" :flex-direction="['column', 'column', 'column', 'row']" mx="auto">
      <c-box class="bubble" d="flex" justify-content="center" align-items="center">
        <c-image :width="['195px', '194px', '194px', '192px' ]" z-index="2" :src="require('assets/hero.png')"></c-image>
      </c-box>
      <c-box :max-width="['24rem', '24rem', '28rem', '31rem' ]" :mt="['12', '12', '12', '0']" :text-align="['center', 'center', 'center', 'left']">
        <c-text font-family="Fira Code" font-weight="500" color="green.500">Hi, I’m Faraaz ✌️</c-text>
        <c-text :font-size="['l', 'l', 'xl', '2xl']" font-weight="700" py="4">Entrepreneur, developer, UI designer, podcast host, gamer &  polygoth.</c-text>
        <c-text :font-size="['sm', 'sm', 'md', 'md']" color="#303030" font-weight="600">19-year-old dreamer and problem-solver based in BLR. I’m an introvert and i hate parties . When i’m not working you’ll find me chilling near lakeside.</c-text>
      </c-box>
        
     
    </c-box>
</template>

<script>
    import {
  CImage,
  CBox,
  CText
} from '@chakra-ui/vue'

export default {
  name: 'navbar',
  components: {
    CImage,
    CBox,
    CText
  },
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style scoped>
  .bubble {
    height: 250px;
    width: 250px;
    content: '';
    border-radius: 54% 46% 42% 52% / 65% 57% 42% 40%;
    background-color: #9be2d2;
    transition: 800ms;
    animation: wave 10s linear infinite;
    filter: drop-shadow(0px 4px 100px rgba(112, 212, 190, 0.42));
  }

  @keyframes wave {
    20% {
      border-radius: 45% 55% 62% 38% / 53% 51% 49% 47%;
    }
    40% {
      border-radius: 45% 55% 49% 51% / 36% 51% 49% 64%;
    }
    60% {
      border-radius: 60% 40% 57% 43% / 47% 62% 38% 53%;
    }
    80% {
      border-radius: 60% 40% 32% 68% / 38% 36% 44% 62%;
    }
  }
</style>
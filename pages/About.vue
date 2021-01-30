<template>
    <c-box>
        <c-box :height="['110px', '110px', '110px', '110px' ]" display="block"></c-box>
        <c-box d="flex" justify-content="center" :mb="['4rem', '4rem', '6rem', '6rem']" :height="['320px', '320px', '368px', '368px' ]" >
            <c-image class="hero" pointer-events="none"  :width="['20rem', '20rem', '23rem', '23rem']" :src="require('assets/my.png')"/>
        </c-box>
        <c-box d="flex" :flex-direction="['column', 'column', 'column', 'row']" :justify-content="['center', 'center', 'space-around', 'space-around']" :align-items="['center', 'center', 'center', 'flex-start']" my="4rem" px="6">
            <c-text font-weight="800" :mb="['6', '6', '6', '0']" font-size="2xl">My Story</c-text>
            <c-box :width="['24rem', '27rem', '40rem', '40rem']" font-weight="600">
                <c-text line-height="2">
                    Coming from a typical middle class family, I was told that schools and colleges were only ways to succeed in life. During my school life I struggled to talk on stage, struggled with low self esteem, low confidence and autism. 
                </c-text>
                <c-text mt="6" line-height="2"> During my 11th grade, I started preparing for IIT so I can crack it a year before my peers. But soon I realized that the Indian education system sucks. which led me to start my first ever startup called Baig Academy. 
                </c-text>
                <c-text mt="6" line-height="2">later,I co founded ViralFate. which eventually had to shutdown as I started to work on bigger projects.
                     Currently I am building <c-link as="a" href="https://www.onegig.in" color="green.500" >ONEGIG</c-link> ( marketplace that connects artists with event managers ).
                </c-text>
                <c-text mt="6" line-height="2">I run a podcast called <c-link as="a" href="https://www.achor.fm/impactact" color="green.500" >Impact Act</c-link> where I shares my perspective on life and talk about things around. </c-text>
            </c-box>
        </c-box>
        <c-box d="flex" justify-content="space-around" :flex-direction="['column', 'column', 'column', 'row']" :align-items="['center', 'center', 'center', 'flex-start']" mb="4rem" px="6" >
            <c-text font-weight="800" :mb="['6', '6', '6', '0']" font-size="2xl">My Skills</c-text>
            <c-box :width="['24rem', '27rem', '40rem', '40rem']" >
                <c-box >
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        💻 Coding
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="code in coding" :key="code" varient="subtle" variant-color="green">{{code}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        🎮 Gaming
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="game in gaming" :key="game" varient="subtle" variant-color="green">{{game}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        ✨ Designing
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="design in designing" :key="design" varient="subtle" variant-color="green">{{design}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        🎧 Audio Engineering
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="sound in audio" :key="sound" varient="subtle" variant-color="green">{{sound}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        🏢 Business
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="biz in business" :key="biz" varient="subtle" variant-color="green">{{biz}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        🏅 Sports
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="sport in sports" :key="sport" varient="subtle" variant-color="green">{{sport}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        📝 Writing
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="write in writing" :key="write" varient="subtle" variant-color="green">{{write}}</c-tag>
                    </c-box>
                </c-box>
                <c-box mt="3rem">
                    <c-text font-weight="700" font-size="xl" color="green.500">
                        🦄 Polygoth
                    </c-text>
                    <c-text mt="4">
                        I’m a Self taught full - stack developer. I always have been fascinated by building things that people use since the beginning and that’s when I decided to add this valuable skill to my toolkit.
                    </c-text>
                    <c-box>
                        <c-tag size="sm" mr="3" mt="5" v-for="lang in langs" :key="lang" varient="subtle" variant-color="green">{{lang}}</c-tag>
                    </c-box>
                </c-box>
            </c-box>
            
            
        </c-box>
        <Footer />
    </c-box>
    
    
    
</template>

<script>
        import {
    CImage,
    CBox,
    CText,
    CTag,
    CLink,
} from '@chakra-ui/vue'
    
export default {
    
    name: 'navbar',
    components: {
    CImage,
    CBox,
    CText,
    CTag,
    CLink,
  },
  data() {
      return {
          coding: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Docker', 'Kubernetes', 'GraphQL', 'Vue', 'Vuex', 'NuxtJS', 'Vuetify', 'Git', 'Chakra UI', 'Tailwind CSS', 'JAMstack', 'NodeJS', 'ExpressJS', 'MongoDB', 'Parse', 'Firebase', 'NaveScript', 'Electron', 'Axios', 'Yarn', 'Gridsome', 'TypeScript', 'Deno', 'BlockChain'],
          gaming: ['League Of Legends', 'Hitman 3', 'Warcraft III'],
          designing: ['Canva', 'Figma', 'AdobeXD'],
          audio: ['Audacity', 'FL Studio', 'Adobe Audition'],
          business: ['Baig Academy', 'Viral Fate', 'Impact Act', 'ONEGIG'],
          sports: ['Football', 'Taekwondo', 'Running', 'Trekking'],
          writing: ['How I Found Myself'],
          langs: ['English', 'Urdu', 'Kannada', 'Hindi', 'Arabic', 'Korean', 'Telugu']
      }
  },
    
}
</script>

<style scoped>

</style>
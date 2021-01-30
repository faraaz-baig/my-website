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
                        I usually play MOBA games and also watch games on twitch. My love for gaming started when my dad got me a computer when I was 2 years old. It helps me overcome stress and makes me think better at work. 

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
                        Dont know why I just love design. I believe it comes natural to me. I love design so much that I dont use amazon just cuz it has bad design.
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
                        Picked up this skill while running my podcast. It helped me make my podcast sound very professional.

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
                        This is no doubt one of my strongest skills I have aquired since I was 15. This is the only skill that helped me learn all other skills I have listed here. This is something that I was gifted with.
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
                        I kinda lost hold on these but not for long. I am pretty good at football and won couple awards and medals. Martial arts is something new i have been trying to learn. 
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
                        This has never come natural to me. But have been doing it since this lockdown. Its going pretty well. Currently I’m working on my own book called “How I Found Myself” - With me being a teenager, I have put down my whole teenage experience. I spent my teenage completely different from majority of my peers. If you want to see teenage years through my eyes then this will be a great book on your shelf.
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
                        Never found languages interesting untill I was exposed to K-Dramas. But that was when I found I learn languages really fast. The newest language that i learnt was korean. Currently, I’m not learning any language but I’m thinking of starting with Spanish. 
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
    
    name: 'about',
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
---
title: Why I choose to marry Vue 💍
date: Feb 2021
read: 4 mins read
id: 3
slug: why-i-choose-to-marry-vue
---

**STOP!** Wait a minute before screaming, yelling and insulting me in the DMs haha.

<br/>

I’ve made the majority of my web app projects with Vue and even when I’ve worked with React and Angular, Vue is the only that always fits not only with my requirements but with my taste. Here I’m going to talk about why I prefer Vue over React and Angular and maybe you should too for this year at least.

<br/>

For starters, Vue’s creator, Evan You, was initially a designer (if I recall), he built Vue for the web, with all it implies: markup (HTML + CSS).

<br/>
<br/>
<br/>

# **Vue likes KISS**

<br/>

The way that Vue handles the component’s creation though one good structured .vue file is better for developers to keep a good abstraction of what we are doing. All in one file and using native web languages without the need to use a [className] or all that weird extra stuff that doesn’t add functionality to the framework. Having separated files for one component maybe is good when you have few components but when the project gets a little bigger you can get overwhelmed very easily.

<br/>

```javascript

<template>
  <div>
      {{ message }}
  </div>
</template>

<script>
  export default {
      name: "component",
      data(){
          return {
              message: "Hi, I'm vue"
          }
      }
  }
</script>

<style>
    /* Maybe some style, if you don't need this just delete */
</style>

```

<br/>

Vue is not pure JS class declaration for components and doesn’t force you to break the component in different files (You can do it if you need to), Vue just gives you, developer, a clean way to work. All the Vue framework is based in this way to work, put the stuff where the stuff belongs.
Have you ever heard KISS?, Keep It Simple Stupid.

<br/>
<br/>
<br/>

# **When Flux meets Vue**

<br/>

 Vuex is a state management pattern + library for Vue.js applications

<br/>

Vuex is made following the concept of Flux to manage data/states through components, as well as Redux but with better features:

<br/>

  - Vuex is synchronous making that data flows only in one way, you always know what is happening.

  - The functions made to update the states (Mutations), have a clearer syntax and usage.

  - The integration to a Vue project practically plugs and plays.

<br/>

```javascript

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      /* States */
    },
    getters: {
      /* Declare getters functions */
    },
    mutations: {
      /* Mutations, the contrapart of Reducers, mutations change the states values */
    },
    actions: {
      /* Execute mutations, this is for you don't call a commit directly in components */
    }
});

```
<br/>
<br/>
<br/>

# **Vue 3**

<br/>

Soon we will have a big update that will come with great features to improve even more the Vue framework. Some features will make not only that you wanna stay but certainly will do that many developers now choose Vue for the next project:

<br/>

### **TypeScript by default**
Maybe is bad new for ones, but this integration will make Vue become more suitable for projects with more developers behind.

<br/>

### **Migration**
For the existing projects, you will not have to blow up everything and start again because the integration of the new features could be added without major problems.

<br/>

### **Composition API**
Components will become more scalable and readable with the new functions in the Composition API.

<br/>

### **Efficient and smaller**
Believed or not, the new version will be even lighter (around 10KB bundled) and faster.
If you want to know when is the new version released, keep in touch with the Vue news page.

<br/>
<br/>
<br/>

## **Community**

<br/>

If you think that popularity is not important in the programmers' world, maybe you haven’t heard but it does matter. A big community means that many other developers are working with the same frameworks and they solve problems or doubts that you can have someday too, for the other side there would be more people creating components, plugins and pushing creators to keep updating and improving the framework. Ah, by the way in the programming world something doesn’t become popular just because is pretty but just when it is good.

<br/>
<br/>
<br/>


## **Conclusion**

<br/>

I've been writing Vue.js code every day for around 2 months in various projects, with impressive results. 2 months is nothing in backend world, but it is something in JS world 😊 I'll see how it goes further.

<br/>

I expect Vue to become a primary JS framework in 16-24 months if Evan You makes right steps, at least around backenders and smaller teams of frontenders. Also with projects like NativeScript, I believe building mobile applications with Vue will be more powerfull than hybrid platforms like Flutter and React Native. 


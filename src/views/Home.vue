<template>
  <div class="home">
    <router-link :to="'/gsap'"><h2>GSAP</h2></router-link>
    <router-link :to="'/css'"><h2>CSS3</h2> </router-link>
    <router-link :to="'/more-css'"><h2>More CSS3</h2> </router-link>
    <router-link :to="'/css-again'"><h2>CSS3</h2> </router-link>
    <router-link :to="'/css-glitch'"><h2>CSS3 Glitch</h2> </router-link>
    <router-link :to="'/css-and-javascript'"><h2>CSS3 + Javascript</h2> </router-link>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

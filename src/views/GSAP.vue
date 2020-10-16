<template>
  <div>
    <h1>Green Sock Application Platform</h1>
    <article>
        <iframe src="http://georgehowell.com.au/resources/GSAP/globe.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/GSAP/space-zoom.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/GSAP/bumble-bee.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/GSAP/dconstruct.html"></iframe>
    </article>
    <div class="row">
        <div class="panel-sm">
            <iframe src="http://georgehowell.com.au/resources/GSAP/loading1.html" class="iframe-sm"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gsap'
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
    iframe, #demo {
        width: 60vw;
        height: 50vh;
        margin: 20px auto;
    }
    .iframe-sm,.panel-sm {width: 250px;height: 220px;}
    .iframe-md,.panel-md {width: 936px;height: 220px;}
</style>

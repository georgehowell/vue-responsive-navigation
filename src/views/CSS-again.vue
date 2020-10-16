<template>
    <div>
        <h1>CSS3</h1>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/slippery-text.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/drip.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/shaded.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text7.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/ocean.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/moving-text-across-shape.html" class="iframe-md"></iframe>
    </article>
  </div>
</template>

<script>
export default {
  name: 'more-css'
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
    iframe, #demo {
        width: 50vw;
        height: 15vh;
        margin: 20px auto;
        overflow: hidden;
    }
    .iframe-sm,.panel-sm {width: 250px;height: 220px;}
    .iframe-md,.panel-md {width: 936px;height: 220px;}
    .iframe-lg,.panel-lg {width: 90%;height:43vw;}
    .iframe-V,.panel-V {width: 220px;height:43vw;}
</style>

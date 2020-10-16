<template>
  <div>
    <h1>CSS3</h1>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/rainbow.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/glitch.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/breath.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/word-swipe.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animation2.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animation.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/comic-text.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/shadows.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/neon-text.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/3D-text.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/rise-up.html" class="iframe-lg"></iframe>
    </article>

    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text3.html" class="iframe-md"></iframe>
    </article>

    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/pop-art.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/comic-text2.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/shining-text.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/handwriting.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/jumping-text.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/smoke-text.html" class="iframe-md"></iframe>
    </article>

  </div>
</template>

<script>
export default {
  name: 'css'
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

<template>
    <div>
        <h1>CSS3</h1>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text.html" class="iframe-lg"></iframe>
    </article>
        <div class="row">
            <div class="panel-V">
                <iframe src="http://georgehowell.com.au/resources/CSS3/writing-mode.html" class="iframe-V" style="border:0"></iframe>
            </div>
        </div>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/liquid.html" ></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/spooky.html" ></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/spinning-counter.html" ></iframe>
    </article>

    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text2.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text4.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/frozen.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/neon-sign.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/text-effect.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/moving-outlines.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/moving-outlines2.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text6.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/dang.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/animated-text5.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS3/spinning-shape.html" class="iframe-lg"></iframe>
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

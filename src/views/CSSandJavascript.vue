<template>
    <div>
        <h1>CSS3 and Javascript</h1>

    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/404.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/folded.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/interactive.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/justified.html" class="iframe-lg"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/text-on-a-path2.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/color-worm.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/text-on-a-path.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/interactive-text.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/vibes.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/stretch.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/texture.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/circle-text.html" class="iframe-md"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/typeahead.html"></iframe>
    </article>
    <article>
        <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/typeahead2.html" class="iframe-md"></iframe>
    </article>
        <div class="row">
            <div class="panel-sm">
                <iframe src="http://georgehowell.com.au/resources/CSS-Javascript/menu.html" class="iframe-md"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'css-and-javascript'
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

<template>
    <div>
        <section class="hero is-primary is-fullheight cover-image" >
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-three-fifths is-offset-two-fifths copy rounded">
                            <!--intro copy-->
                            <h1 class="title is-1 is-uppercase">Stéphane Doiron</h1>
                            <h2 class="subtitle is-3">Backend developer and PHP code wrangler</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur enim eum exercitationem ipsam
                                laudantium non rem soluta totam vel. Autem consequatur debitis dolorem ea eum maiores necessitatibus
                                perferendis? Distinctio.
                            </p>

                            <!--CV-->
                            <p class="has-text-centered v-spaced">
                                <a class="button is-success" @click="scrollToResume">View my Resume</a>
                            </p>

                            <!--linky links-->
                            <div class="columns has-text-centered is-mobile">
                                <div class="column"><a href="https://www.linkedin.com/in/stephane-doiron-88716932" title="Linked-in"><span class="fab fa-linkedin fa-2x"></span></a></div>
                                <div class="column"><a href="https://github.com/didymus13" title="Github"><span class="fab fa-github fa-2x"></span></a></div>
                                <!-- <div class="column"><a href="https://twitter.com/sirdidymus" title="Twitter"><span class="fab fa-twitter fa-2x"></span></a></div> -->
                                <div class="column">
                                    <a href='mailto&#58;s%&#55;4e&#37;&#55;0&#104;&#97;ne&#64;s&#116;&#101;ph&#97;&#110;%65doiron&#46;c&#111;&#37;6D' title="Contact me">
                                        <span class="far fa-envelope fa-2x"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div id="resume"></div>
            <div class="columns">
                <div class="column is-one-third">
                  <h2 class="is-3 subtitle">Relevant Skills</h2>
                    <skill-level label="PHP" :value="85"></skill-level>
                    <skill-level label="Laravel 5" :value="85"></skill-level>
                    <skill-level label="API" :value="85"></skill-level>
                    <skill-level label="Git" :value="85"></skill-level>
                    <skill-level label="Yii 2" :value="80"></skill-level>
                    <skill-level label="VueJS" :value="75"></skill-level>
                    <skill-level label="JQuery" :value="65"></skill-level>
                    <skill-level label="Bootstrap" :value="75"></skill-level>
                    <skill-level label="Bulma" :value="80"></skill-level>
                    <skill-level label="CSS 3" :value="60"></skill-level>
                </div>
                <div>
                    work experience
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SkillLevel from '@/components/homepage/SkillLevel.vue'
import ScrollTo from 'vue-scrollto'

export default {
  components: {
    SkillLevel
  },
  methods: {
    scrollToResume () {
      ScrollTo.scrollTo('#resume', 0.5, {easing: 'ease-in', 'y': true})
    }
  }
}
</script>

<style>
.copy {
  background-color: rgba(0,0,0,0.4);
}
.rounded {
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  border-radius: 1em;
}
body {
  font-family: 'Anonymous Pro', monospace;
}
h1, h2, h3, h4, h5, h6, .button {
  font-family: 'Poppins', sans-serif;
}
.v-spaced {
  margin: 2em auto;
}
.cover-image {
  background-image: url('../assets/andrew-neel-308138-unsplash.jpg');
  background-size: cover;
}
</style>

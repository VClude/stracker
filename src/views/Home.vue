<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <div class="flex flex-3">
          <div class="flex-item left">
          </div>
          <div class="flex-item">
            <div style="text-align:center">

              <b style="color:black !important;">
                Stratz Tracker is a Site that Enables Dota 2 Player to track their status and give in depth information about Ability Draft
              </b>
            </div>
            <br />
            <ul class="actions">
              <li><router-link  class="button scrolly" to="/guide">Get Started Guide</router-link></li>
            </ul>
          </div>
          <div class="flex-item right">
          </div>
        </div>
      </div>
    </section>

    <section class="wrapper style1 ">
      <div class="inner">
        <h2>News & Updates</h2>
        <ul style="list-style:none">
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;">7.25</span> 17 Mar 2020: Unlocked many new abilities granted by Aghanim's Scepter</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;">7.24c</span> 12 Mar 2020: Added Lone Druid, as well as Spirit Bear, Spirit Link, Savage Roar and True Form</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;">7.24b</span> 09 Mar 2020: Enabled Morphling, but without attribute shift or morph</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;"></span> 03 Feb 2020: Sign up for Ability Draft Challenge League</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;">7.24a</span> 26 Jan 2020: Void Spirit has now been enabled</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;">7.23</span> 26 Nov 2019: Outlanders are here but only Snapfire is in the pool</li>
          <li><span class="w3-tag w3-round w3-light-blue" style="width:80px;"></span> 24 Sep 2019: Look for HGV @ Midas Mode 2.0</li>
        </ul>

      </div>
    </section>

    <section class="wrapper">
      <div class="inner flex flex-3">
        <div class="flex-item left">
          <div>
            <h3><router-link to="/pool">Pool</router-link></h3>
            <p>A list has been complied of all the heroes and abilities that are enabled in AD. As well which Aghanim's Scepter upgrades are enabled.</p>
          </div>
          <div>
            <h3><router-link to="/heroes">Heroes</router-link></h3>
            <p>See how the base models stack up against each other with details on each hero including ability combos.</p>
          </div>
        </div>
        <div class="flex-item">
          <div class="center" style="width:100%;">
            <h2 style="color: #f6755e;">Statistics!</h2>
            <i class="fas fa-chart-line icon-header" style="font-size:15em;"></i>
          </div>
        </div>
        <div class="flex-item right">
          <div>
            <h3><router-link to="/abilities">Abilities</router-link></h3>
            <p>Study up on which abilities are strongest, highest priority and make powerful combos.</p>
          </div>
          <div>
            <h3><router-link to="/profile">Profile</router-link></h3>
            <p>Get a bunch of information personalized for you including history, combatants, and ranking.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="wrapper">
      <div class="inner flex flex-3">
        <div class="flex-item box w3-card">
          <div class="center">
            <i class="fas fa-list-ol icon-header"></i>
          </div>
          <div class="content">
            <h3 class="center"><router-link to="/ladder">Leaderboard</router-link></h3>
            <p>
              See how you rank against others in your region. 
              We have created a Elo based rating system that is updated for each <span title="Those that have 'Expose Public Match Data' settings checked">public player</span>.
            </p>
            <p>
              As this feature is new it will take some time before the rankings are correctly disturbed as there was no way to seed the players. 
              So all players start at the default calibration.
            </p>
          </div>
        </div>
        <div class="flex-item box w3-card">
          <div style="text-align:center;">
            <i class="fas fa-globe-americas icon-header"></i>
            <i class="fas fa-globe-europe icon-header"></i>
            <i class="fas fa-globe-asia icon-header"></i>
          </div>
          <div class="content">
            <h3 class="center"><router-link to="/regions">Regions</router-link></h3>
            <p>Answers to questions you never knew you wanted.</p>
            <p>
              Which region is most popular? 
              When are people playing in your region? 
              How many matches are played in each region? 
              Which is best day of week and time of day to minimize my queue time?
            </p>
          </div>
        </div>
        <div class="flex-item box w3-card">
          <div class="center">
            <i class="fas fa-drafting-compass icon-header"></i>
          </div>
          <div class="content">
            <h3 class="center">Mobile Friendly</h3>
            <p>
              For those that open the site in the Mobile Browser.
            </p>
            <p>
              We are Specifically Design this website to Comfort User whenever this site is accessed. either via Mobile or Desktop
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'home',
  data () {
    return { construction: true }
  },
  created() {
    this.preFetch()
  },
  methods: {
    async preFetch() {
      let response = await axios.get(process.env.VUE_APP_BASE_API + "api/draft/pool")
      for (const hero of response.data) {
        this.preloadImage(hero.imageBanner)
        this.preloadImage(hero.imageIcon)
        this.preloadImage(hero.imageProfile)
        for (const ability of hero.abilities) {
          this.preloadImage(ability.image)
        }
      }
    },
    preloadImage(url)
    {
      var img = new Image();
      img.src = url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li:not(:last-child) {
    margin-bottom: 5px;
}
.center {
  text-align:center;
}
.icon-header {
  font-size:5em; 
  padding: 10px;
  color: #f6755e;
}
</style>


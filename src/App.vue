<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <nav class="left">
        <a href="#menu"></a>
      </nav>
      <a href="/" class="logo">Stratz Tracker</a>
      <!--
      <nav class="right">
        <a href="#" class="button fit">Login</a>
      </nav>
      -->
    </header>

		<!-- Menu -->
    <nav id="menu">      
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/pool">Pool</router-link> </li>
        <li><router-link to="/heroes">Heroes</router-link> </li>
        <li><router-link to="/abilities">Abilities</router-link> </li>
        <li><router-link to="/ladder">Leaderboard</router-link> </li>
        <li><router-link to="/regions">Regions Peak</router-link> </li>
        <!-- <li><span>(Drafting Assistant)</span> <router-link to="/drafter">Drafter</router-link> </li> -->
        <li><router-link to="/profile">Profile</router-link> </li>
      </ul>
    </nav>

		<router-view :key="$route.fullPath"></router-view>

		<!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <h2>Developed by</h2>
        <h3 style="color:white;">Muhammad Fadil Ardiansyah &amp; M Hendhy Sumaryo</h3>
      </div>
    </footer>
    
  </div>
</template>

<style>
</style>

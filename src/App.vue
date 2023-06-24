<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div>
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink><br> -->
        <RouterLink to="/">About</RouterLink><br>
        <RouterLink to="/week0">Week 0</RouterLink><br>
        <RouterLink to="/week1">Week 1</RouterLink><br>
        <RouterLink to="/week2">Week 2</RouterLink><br>
        <RouterLink to="/week3">Week 3</RouterLink><br>
        <RouterLink to="/week4">Week 4</RouterLink><br>
        <RouterLink to="/week5">Week 5</RouterLink><br>

      </nav>
    </div>

  </header>


  <RouterView />
</template>

<style scoped>
header {
  top:15%;
  line-height: 1.5;
  height: 100vh;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  text-align: left;
  /* width: 100%; */
  font-size: 20px;
  position: fixed;
  top: 10%;
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
  /* border-right: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

/* less than 500px */
@media (max-width: 500px) {
  header {
    width: 20%;
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

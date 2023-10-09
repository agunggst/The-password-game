<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Poppins:wght@100;200;300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100&display=swap');
@import url('./styles/colors.css');

*{
  font-family: 'Inter', sans-serif;
  margin: 0;
}
#app{
  min-height: 100vh;
  background-color: var(--regular-blue);
}
</style>

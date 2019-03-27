<template>
  <div id="app">
    <main>
      <Header/>
      <div class="app-home">
        <Home />
      </div>
    </main>
  </div>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Home,
    Header
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Muli", sans-serif;
  background-color: rgba(0, 0, 0, 0.01);
}
</style>

<template>
  <div class="row mt-1">
    <header class="col">
      <h1>Test app</h1>
      <hr />
    </header>
  </div>
  <div class="row mb-2">
    <nav class="col">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view />
</template>


<template>
  <div class="row">
    <nav class="col">
      <p>These don't work on localhost</p>
      <ul>
        <li>
          <a :href="`${apiPrefix}/api`">/api</a>
        </li>
        <li>
          <a :href="`${apiPrefix}/api/books`">/api/books</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="row">
    <div class="col">
      <LeftComponent />
    </div>
    <div class="col">
      <RightComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftComponent from '../components/LeftComponent.vue'
import RightComponent from '../components/RightComponent.vue'

export default {
  name: 'HomeView',
  components: {
    LeftComponent,
    RightComponent
  },
  data() {
    console.log('api prefix: ', process.env.VUE_APP_API_PREFIX)
    return {
      apiPrefix: process.env.VUE_APP_API_PREFIX
    }
  }
}
</script>

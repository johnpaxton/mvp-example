<template>
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
  }
}
</script>

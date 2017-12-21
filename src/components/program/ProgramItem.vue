<template>
  <div v-if="type=='ready'" class="program-item">
    <h2>{{type}} program</h2>
    <ul>
      <li v-for="item in allReadyItem">
        <p>{{item.name}}---{{item.status}}</p>
        <task :program-id="item.id"></task>
      </li>
    </ul>
  </div>
  <div v-else-if="type=='pending'" class="program-item">
    <h2>{{type}} program</h2>
    <ul>
      <li v-for="item in allPendingItem">
        <p>{{item.name}}---{{item.status}}</p>
        <task :program-id="item.id"></task>
      </li>
    </ul>
  </div>
    <div v-else-if="type=='finished'" class="program-item">
    <h2>{{type}} program</h2>
    <ul>
      <li v-for="item in allFinishItem">
        <p>{{item.name}}---{{item.status}}</p>
        <task :program-id="item.id"></task>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../task/Task.vue'
export default {
  components: {
    Task
  },
  props: ['type'],
  computed: {
    ...mapGetters([
      'allReadyItem',
      'allPendingItem',
      'allFinishItem'
    ])
  }
}
</script>

<style lang="scss">

</style>


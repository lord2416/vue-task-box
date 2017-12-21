<template>
  <div class="task">
    <ul>
      <li v-for="task in getTasksByProgram">
        <span>{{task.name}}</span><span>{{task.status}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['programId'],
  computed: {
    ...mapGetters([
      'getTasksByProgram',
      'getUndoneTasks',
      'getDoneTasks'
    ])
  },
  created () {
    let programId = this.$props.programId
    this.$store.dispatch('getAllTasks')
    console.log(this.$store.getters.getTasksByProgram(programId))
  }
}
</script>

<style>

</style>

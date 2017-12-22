<template>
  <div class="task">
    <ul>
      <template v-for="task in getTasksByProgram(programId)">
        <li :key="task.id">
          <span>{{task.name}}</span><span>{{task.status}}</span><button @click="updateStatus(task.id, task.programId)">done</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['programId'],
  computed: {
    ...mapGetters([
      'getTasksByProgram',
      'getUndoneTasks',
      'getDoneTasks'
    ])
  },
  methods: {
    ...mapActions([
      'getAllTasks',
      'updateTaskStatus'
    ]),
    updateStatus (taskId, programId, status = 'done') {
      this.updateTaskStatus({taskId: taskId, programId: programId, status: status})
    }
  },
  mounted () {
    // 获取所有的task
    // this.getAllTasks()
  }
}
</script>

<style>

</style>

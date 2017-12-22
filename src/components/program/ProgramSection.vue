<template>
  <section class="program">
    <!-- <h2>ready program</h2>
    <ul>
      <li v-for="item in allReadyItem">
        {{item.name}}---{{item.status}}
      </li>
    </ul>
    <h2>pending program</h2>
    <ul>
      <li v-for="item in allPendingItem">
        {{item.name}}---{{item.status}}
      </li>
    </ul>
    <h2>finished program</h2>
    <ul>
      <li v-for="item in allFinishItem">
        {{item.name}}---{{item.status}}
      </li>
    </ul> -->
    <program-item type="ready"></program-item>
    <program-item type="pending"></program-item>
    <program-item type="finished"></program-item>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProgramItem from './ProgramItem.vue'
export default {
  components: {
    ProgramItem
  },
  computed: {
    ...mapGetters([
      'allReadyItem',
      'allPendingItem',
      'allFinishItem'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPrograms',
      'getAllTasks'
    ])
  },
  mounted () {
    this.getAllPrograms()
    this.getAllTasks()
  }
}
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    padding: 0px;
  }
  li {
    display: block;
    margin: 20px 5px;
  }
</style>

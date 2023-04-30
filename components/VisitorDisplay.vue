<script lang="ts" setup>
import { getDatabase, ref, onValue } from 'firebase/database'
const data = reactive({
  count: 0
})
const db = getDatabase()
const visitorCountRef = ref(db, 'stat/count')
onValue(visitorCountRef, (snapshot) => {
  data.count = snapshot.val()
})
</script>

<template>
  <p class="count-display">{{ data.count }} 人</p>
</template>

<style scoped>
.count-display {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
</style>

<script lang="ts" setup>
const now = useCurrentTime()
const currentTimeToString = now.currentTimeToString
</script>

<template>
  <p class="current-time">
    {{ currentTimeToString(now.currentHour) }} : {{currentTimeToString(now.currentMinute) }} : {{ currentTimeToString(now.currentSecond) }}
  </p>
</template>

<style scoped lang="scss">
.current-time {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #FFF;
}
</style>

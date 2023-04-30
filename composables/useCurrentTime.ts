export const useCurrentTime = () => {
  const currentTime = ref(new Date())
  const currentHour = ref(currentTime.value.getHours())
  const currentMinute = ref(currentTime.value.getMinutes())
  const currentSecond = ref(currentTime.value.getSeconds())

  const updateCurrentTime = () => {
    currentTime.value = new Date()
    currentHour.value = currentTime.value.getHours()
    currentMinute.value = currentTime.value.getMinutes()
    currentSecond.value = currentTime.value.getSeconds()
  }
  const updateCurrentTimeInterval = setInterval(updateCurrentTime, 1000)
  onBeforeUnmount(() => {
    clearInterval(updateCurrentTimeInterval)
  })

  const currentTimeToString = (time: Ref<number>) => {
    return unref(time) < 10 ? '0' + unref(time) : time
  }

  return {
    currentTime,
    currentHour,
    currentMinute,
    currentSecond,
    currentTimeToString
  }
}

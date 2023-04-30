<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const increment = () => {
  toast.add({
    severity: 'success',
    summary: '入構しました',
    life: 3000
  })
}
const decrement = () => {
  toast.add({
    severity: 'warn',
    summary: '退構しました',
    life: 3000
  })
}
</script>

<template>
  <div>
    <TimeCard />
    <VisitorDisplay />
    <Toast />
    <div class="button-wrapper">
      <Button
        @click="increment"
        severity="success"
        label="入構"
        class="button"
        outlined
      />
      <Button
        @click="decrement"
        severity="danger"
        label="退構"
        class="button"
        outlined
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .button {
    font-size: 2.5rem;
    width: min(45%, 400px);
  }
}
</style>

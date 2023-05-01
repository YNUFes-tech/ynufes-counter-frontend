<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const increment = () => {
  useFetch(
    '/api/v1/count/entry',
    {
      method: 'POST'
    }
  )
    .then((res) => {
      if (res.error.value) {
        toast.add({
          severity: 'error',
          summary: 'エラー',
          detail: '入構に失敗しました' + new Date().toLocaleString(),
          life: 5000
        })
        return
      }
      toast.add({
        severity: 'success',
        summary: '+ 1',
        detail: '入構しました' + new Date().toLocaleString(),
        life: 5000
      })
    })
    .catch((err) => {
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: '入構に失敗しました' + new Date().toLocaleString(),
        life: 5000
      })
    })
}
const decrement = () => {
  useFetch(
    '/api/v1/count/exit',
    {
      method: 'POST'
    }
  )
    .then((res) => {
      if (res.error.value) {
        toast.add({
          severity: 'error',
          summary: 'エラー',
          detail: '退構に失敗しました' + new Date().toLocaleString(),
          life: 5000
        })
        return
      }
      toast.add({
        severity: 'info',
        summary: '- 1',
        detail: '退構しました' + new Date().toLocaleString(),
        life: 5000
      })
    })
    .catch((err) => {
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: '退構に失敗しました' + new Date().toLocaleString(),
        life: 5000
      })
    })
}
</script>

<template>
  <div>
    <TimeCard />
    <VisitorDisplay />
    <Toast position="bottom-right" />
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
        severity="info"
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

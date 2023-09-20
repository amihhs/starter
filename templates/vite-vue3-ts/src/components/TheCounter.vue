<script setup lang="ts">
const props = withDefaults(defineProps<{
  initial?: number
}>(), {
  initial: 0,
})

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>

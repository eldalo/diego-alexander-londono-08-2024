<template>
  <div
    v-if="isVisible"
    class="fixed bottom-4 right-4 bg-primary border border-white px-5 pt-1 pb-3 rounded shadow-md"
  >
    <span class="text-xs text-center text-white">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { IToast } from '../../interfaces/toast';

const props = defineProps<IToast>();
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;

  setTimeout(() => {
    isVisible.value = false;
  }, 3000);
});

watch(
  () => props.message,
  () => {
    isVisible.value = true;
    setTimeout(() => {
      isVisible.value = false;
    }, 3000);
  }
);
</script>

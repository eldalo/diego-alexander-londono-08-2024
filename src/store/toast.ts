import { ref } from 'vue';

const toastMessage = ref<string | null>(null);
const toastType = ref<'success' | 'error'>('success');

export const useToast = () => {
  const showToast = (
    message: string,
    type: 'success' | 'error' = 'success'
  ) => {
    toastMessage.value = message;
    toastType.value = type;
  };

  const hideToast = () => {
    toastMessage.value = null;
  };

  return {
    toastMessage,
    toastType,
    showToast,
    hideToast,
  };
};

import { ref } from "vue";

const show = ref<boolean>(false);
const title = ref<string>("");
const width = ref<string>("");

export function useModal() {
  return {
    show,
    title,
    width,
    showModal: () => (show.value = true),
    hideModal: () => (show.value = false),
    setTitle: (t: string) => (title.value = t),
    setWidth: (w: string) => (width.value = w),
  };
}
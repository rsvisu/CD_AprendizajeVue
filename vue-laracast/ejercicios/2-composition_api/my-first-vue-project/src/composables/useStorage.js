import {ref, watch} from "vue";

export function useStorage(key) {
  let storedVal = localStorage.getItem(key);

  let val = ref(storedVal);

  watch(val, () => {
    write();
  });

  function write() {
    if (val.value === '') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, val.value);
    }
  }

  return val;
}

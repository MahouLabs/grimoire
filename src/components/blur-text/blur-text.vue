<template>
  <span class="text-balance text-center">
    <span
      v-for="(word, index) in words"
      :key="index"
      :class="['inline-block animate-blur-text opacity-0', className]"
      :style="{ animationDelay: `${index * 80}ms` }"
    >
      {{ word }}<span v-if="index < words.length - 1">&nbsp;</span>
    </span>
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlurText",
  props: {
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    words() {
      return this.text.split(" ");
    },
  },
});
// export default {
//   props: {
//     text: {
//       type: String,
//       required: true,
//     },
//     className: {
//       type: String,
//       default: "",
//     },
//   },
//   computed: {
//     words() {
//       return this.text.split(" ");
//     },
//   },
// };
</script>

<style scoped>
/* Add your styles here */
</style>

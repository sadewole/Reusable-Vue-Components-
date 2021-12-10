<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { provide, ref, computed, defineComponent } from "vue";

export default defineComponent({
  name: "Accordion",
  props: {
    allowMultiple: {
      type: Boolean,
    },
  },
  setup(props) {
    const initializeState = () => {
      if (props.allowMultiple) {
        return [];
      } else {
        return "";
      }
    };

    const expandedIndex = ref(initializeState());

    const _index = computed({
      get() {
        return expandedIndex.value;
      },
      set(val: any) {
        expandedIndex.value = val;
      },
    });

    provide("allowMultiple", props.allowMultiple);
    provide("indices", _index);
    provide("expandedIndex", expandedIndex);
  },
});
</script>

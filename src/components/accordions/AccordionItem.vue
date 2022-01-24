<template>
  <div class="accordionItem">
    <button
      @click="toggleContent"
      class="accordionItem__header"
      v-text="label"
    />
    <div :class="['accordionItem__content', isExpanded && '-open']">
      <div class="h-p-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject, onMounted, onUpdated, watch, defineComponent } from "vue";

import { useId } from "@/utils/generators";

type Props = { label: string; defaultIsOpen: boolean };
type Indices = {
  value: Array<string>;
};
type ExpandedIndex = {
  value: Array<string> | string;
};

export default defineComponent({
  name: "AccordionItem",
  props: {
    label: { type: String, required: true },
    defaultIsOpen: { type: Boolean, required: false },
  },
  setup(props: Props) {
    const id = ref(useId());
    const isExpanded = ref(props.defaultIsOpen || false);
    const allowMultiple = inject("allowMultiple") as boolean;
    const indices = inject("indices") as Indices;
    const expandedIndex = inject("expandedIndex") as ExpandedIndex;

    const getExpandCondition = (
      arrIndex: string | Array<string>,
      itemIndex: string
    ) => {
      if (Array.isArray(arrIndex)) {
        return arrIndex.includes(itemIndex);
      }

      return arrIndex === itemIndex;
    };

    const watchExpand = () => {
      if (allowMultiple) {
        let newIndices;

        if (isExpanded.value) {
          newIndices = [...indices.value, id.value];
        } else {
          newIndices = indices.value.filter(
            (itemIndex) => itemIndex !== id.value
          );
        }
        expandedIndex.value = newIndices;
      } else if (isExpanded.value) {
        expandedIndex.value = id.value;
      }
    };

    watch(
      () => expandedIndex.value,
      () => {
        isExpanded.value = getExpandCondition(expandedIndex.value, id.value);
      }
    );

    const toggleContent = () => {
      isExpanded.value = !isExpanded.value;
    };

    onMounted(watchExpand);
    onUpdated(watchExpand);

    return { isExpanded, toggleContent };
  },
});
</script>

<style scoped>
.accordionItem {
  margin-top: 10px;
  margin-bottom: 10px;
}
.accordionItem__header {
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 42px;
}

.accordionItem__content {
  overflow: hidden;

  box-sizing: border-box;
  height: auto;
  max-height: 0;

  transition: max-height 0.5s ease-in-out;
}

.accordionItem__content.-open {
  max-height: 300rem;
}

.h-p-5 {
  padding: 5px;
}
</style>

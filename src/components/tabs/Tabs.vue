<template>
  <div class="tabs">
    <div class="tabs__list">
      <slot />
    </div>
    <div class="tabs__overlay" />
  </div>
</template>

<script>
import { watch, ref, provide, defineComponent } from "vue";

export default defineComponent({
  name: "Tabs",
  props: {
    groupName: { type: String, required: true },
    initialTab: { type: String, required: true },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const selectedTab = ref(props.initialTab);

    watch(
      () => selectedTab.value,
      () => emit("change", selectedTab.value)
    );

    provide("groupName", props.groupName);
    provide("selectedTab", selectedTab);
  },
});
</script>

<style scoped>
.tabs {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 56px;

  outline: none;
}

.tabs__list {
  position: relative;
  display: flex;
  z-index: 2;
}

.tabs__overlay {
  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform: skewX(-20deg);

  background: rgba(0, 0, 0, 0.5);
}
</style>

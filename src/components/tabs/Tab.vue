<template>
  <div class="tab">
    <input
      v-model="selectedTab"
      type="radio"
      :id="value"
      :name="groupName"
      :value="value"
      class="tab__input"
    />
    <label class="tab__label" :for="value">
      <span class="tab__labelText">{{ label }}</span>
      <span class="tab__label--overlay" />
    </label>
  </div>
</template>

<script lang="ts">
import { inject, defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "Tab",
  props: {
    value: { type: String, required: true },
    label: { type: String, required: true },
  },
  setup() {
    const groupName = inject("groupName") as string;
    const selectedTab: Ref<string> = inject("selectedTab", ref(""));

    return { groupName, selectedTab };
  },
});
</script>

<style scoped>
.tab {
  flex: 1 1 auto;

  height: 58px;

  outline: none;
}

.tab__input {
  position: absolute;

  overflow: hidden;
  clip: rect(0 0 0 0);

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  border: 0;
}
.tab__input:checked + .tab__label .tab__label--overlay {
  background: rgba(19, 0, 128, 0.363);
}

.tab__label {
  position: relative;

  height: 100%;

  cursor: pointer;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 42px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tab__labelText {
  z-index: 2;
}

.tab__label--overlay {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform: skewX(-20deg);
}
</style>

<template>
  <div style="margin-bottom: 20px">
    <button @click="handleView('tab')">Tab Example</button>
    <button @click="handleView('accordion')">Accordion Example</button>
  </div>
  <div v-if="view == 'tab'">
    <Tabs
      groupName="count"
      initialTab="one"
      @change="(val: any) => (currentTab = val)"
    >
      <Tab value="one" label="Tab One"></Tab>
      <Tab value="two" label="Tab Two"></Tab>
    </Tabs>
    <h1>{{ currentTab }}</h1>
  </div>
  <div v-else>
    <Accordion allowMultiple>
      <AccordionItem label="Accordion One" defaultIsOpen>
        <div>Lorem ipsum dolor sit amet, consectetur</div>
      </AccordionItem>
      <AccordionItem label="Accordion Two">
        <div>Lorem ipsum dolor sit amet, consectetur</div>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tabs, Tab } from "./tabs";
import { Accordion, AccordionItem } from "./accordions";

export default defineComponent({
  name: "Sample",
  components: { Tab, Tabs, Accordion, AccordionItem },
  data() {
    return { currentTab: "one", view: "tab" };
  },
  methods: {
    handleView(val: string) {
      this.view = val;
    },
  },
});
</script>

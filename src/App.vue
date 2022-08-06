<template>
  <div>
    <Stage ref="stageRefs" v-for="stage in stages" :key="stage.id" :stage="stage" />
    <Test />
  </div>
</template>

<script>
  import { vm } from "./utils";

  import Stage from "./components/Stage.vue";
  import Test from "./components/Test.vue";
  export default {
    name: "App",
    components: {
      Stage,
      Test,
    },
    mounted() {
      vm.stageRefs = this.$refs.stageRefs;
    },
    data() {
      return {
        stages: [
          { id: 1, name: "Stage 1" },
          { id: 2, name: "Stage 2" },
          { id: 3, name: "Stage 3" },
          { id: 4, name: "Stage 4" },
          { id: 5, name: "Stage 5" },
          { id: 6, name: "Stage 6" },
        ],
      };
    },
  };
</script>

<template>
  <div>
    <button @click="reRenderStage(3)">Rerender</button>
  </div>
</template>

<script>
  import { vm } from "../utils";

  export default {
    name: "Test",
    mounted() {
      this.$nextTick(() => {
        console.log(vm.stageRefs);
      });
    },
    methods: {
      reRenderStage(id) {
        this.$nextTick(() => {
          vm.getStageRef && vm.getStageRef(id).stageInit();
        });
      },
    },
  };
</script>

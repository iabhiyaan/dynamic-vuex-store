<template>
  <div v-if="stage">
    {{ stage.name }}
  </div>
</template>

<script>
  export default {
    name: "Stage",
    props: {
      stage: {
        type: Object,
        required: true,
      },
    },
    methods: {
      stageInit() {
        console.log("fetch data of ", this.stage.id);
      },
    },
  };
</script>

export const stageRefs = {};

import Vue from "vue";
export const vm = new Vue();

vm.getStageRef = (id) => {
  if (vm.stageRefs) {
    return vm.stageRefs.find((stageRef) => stageRef.stage.id === id);
  }
};

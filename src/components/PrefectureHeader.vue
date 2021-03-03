<template>
  <div
    :style="{
      'background-color': backgroundColor,
      height: height,
      width: width,
      display: display,
      'justify-content': justify
    }"
  >
    <prefecture-label
      :label="text"
      :size="size"
      :color="color"
      :align="align"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PrefectureLabel from "@/components/PrefectureLabel.vue";
@Component({
  components: {
    PrefectureLabel
  }
})
export default class PrefectureHeader extends Vue {
  @Prop()
  text?: string;

  @Prop()
  size?: number;

  @Prop()
  color?: string;

  @Prop()
  align?: string;

  @Prop()
  backgroundColor?: string;

  @Prop()
  width?: string;

  @Prop()
  height?: string;

  @Prop()
  display?: string;

  @Prop()
  justify?: string;
}
</script>
<style></style>

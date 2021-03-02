<template>
  <div>
    <p
      class="label"
      :style="{ 'font-size': size + 'px', color: color, 'text-align': align }"
    >
      {{ label }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class PrefectureLabel extends Vue {
  @Prop()
  label?: string;

  @Prop({ default: 16 })
  size?: number;

  @Prop({ default: "black" })
  color?: string;

  @Prop()
  align?: string;
}
</script>
<style></style>

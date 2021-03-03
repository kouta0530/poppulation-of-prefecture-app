<template>
  <div>
    <p
      class="label"
      :style="{
        'font-size': fontSize + 'px',
        color: color,
        'text-align': alignChange,
      }"
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
  size!: number;

  @Prop({ default: "black" })
  color?: string;

  @Prop()
  align?: string;

  public windowWidth = 0;

  get fontSize() {
    if (this.windowWidth < 678) {
      return this.size * 1.5;
    } else {
      return this.size;
    }
  }

  get alignChange() {
    if (this.windowWidth < 678) {
      return "center";
    } else {
      return this.align;
    }
  }

  mounted() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  destory() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }
}
</script>
<style>
.label {
  margin: 16px;
}
</style>

<template>
  <div class="prefecture-check-box">
    <input
      :id="prefCode"
      type="checkbox"
      v-model="value"
      @change="selectedPrefecture"
    />
    <label :for="prefCode">{{ prefName }}</label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";

@Component({})
export default class PrefectureCheckBox extends Vue {
  @Prop({ default: [] })
  prefCode?: number;

  @Prop()
  prefName?: string;

  public value = false;

  @Emit("selectedPrefecture")
  selectedPrefecture() {
    return { prefCode: this.prefCode, checked: this.value };
  }
}
</script>
<style>
.prefecture-check-box {
  font-size: 24px;
  margin: 0 5px;
}
</style>

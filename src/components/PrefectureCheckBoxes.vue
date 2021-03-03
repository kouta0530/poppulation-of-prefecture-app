<template>
  <div class="prefecture-check-boxes">
    <template v-for="prefecture in prefetureList">
      <prefecture-check-box
        :key="prefecture.prefCode"
        :prefCode="prefecture.prefCode"
        :prefName="prefecture.prefName"
        @selectedPrefecture="selectedPrefecture"
      ></prefecture-check-box>
    </template>
  </div>
</template>
<script lang="ts">
import Prefecture from "@/models/Prefecture";
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import PrefectureCheckBox from "@/components/PrefectureCheckBox.vue";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";

@Component({
  components: {
    PrefectureCheckBox,
  },
})
export default class PrefectureCheckBoxes extends Vue {
  @Prop({ default: [] })
  prefetureList?: Prefecture[];

  @Emit("selectedPrefecture")
  selectedPrefecture(value: PrefectureCheckBoxParameter) {
    return value;
  }
}
</script>
<style>
.prefecture-check-boxes {
  width: 550px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
}

.prefecture-check-box {
  margin: 0 5px;
}
</style>

<template>
  <div>
    <prefecture-check-boxes
      :prefetureList="prefectureList"
      @selectedPrefecture="getPrefectureCode"
    ></prefecture-check-boxes>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PrefectureCheckBoxes from "@/components/PrefectureCheckBoxes.vue";
import prefectureAPI from "@/api/prefecture";
import Prefecture from "@/models/Prefecture.ts";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";
import PrefecturePopulationComposition from "@/models/PrefecturePopulationComposition";

@Component({
  components: {
    PrefectureCheckBoxes,
  },
})
export default class PrefecturePage extends Vue {
  public prefectureList?: Prefecture[] = [];
  public prefecturePopulationComposition?: PrefecturePopulationComposition;

  async created() {
    try {
      this.prefectureList = await prefectureAPI.getPrefectureList();
    } catch (err) {
      alert("都道府県一覧の取得に失敗しました");
    }
  }

  async getPrefectureCode(value: PrefectureCheckBoxParameter) {
    try {
      this.prefecturePopulationComposition = await prefectureAPI.getPrefecturePopulationComposition(
        value.prefCode
      );
    } catch (err) {
      alert("人口構成の取得に失敗しました");
    }
  }
}
</script>

<template>
  <div>
    <prefecture-check-boxes
      :prefetureList="prefectureList"
      @selectedPrefecture="getPrefectureCode"
    ></prefecture-check-boxes>
    <prefecture-chart-group :items="prefecturePopulationChartData" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PrefectureCheckBoxes from "@/components/PrefectureCheckBoxes.vue";
import PrefectureChartGroup from "@/components/PrefectureChartGroup.vue";
import prefectureAPI from "@/api/prefecture";
import Prefecture from "@/models/Prefecture.ts";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";
import PrefecturePopulationComposition from "@/models/PrefecturePopulationComposition";
import PrefecturePopulation from "@/models/PrefecturePopulation";
import PrefecturePopulationChartData from "@/models/PrefecturePopulationChartData";

@Component({
  components: {
    PrefectureCheckBoxes,
    PrefectureChartGroup,
  },
})
export default class PrefecturePage extends Vue {
  public prefectureList?: Prefecture[] = [];
  public prefecturePopulationComposition?: PrefecturePopulationComposition;
  public prefecturePopulationChartData: PrefecturePopulationChartData = {
    labels: [],
    datasets: [],
  };

  async created() {
    try {
      this.prefectureList = await prefectureAPI.getPrefectureList();
    } catch (err) {
      alert("都道府県一覧の取得に失敗しました");
    }
  }

  async getPrefectureCode(value: PrefectureCheckBoxParameter) {
    try {
      const res = await prefectureAPI.getPrefecturePopulationComposition(
        value.prefCode
      );
      this.addPrefecturePopulationChartDataset(value.prefName, res[0].data);
    } catch (err) {
      alert("人口構成の取得に失敗しました");
    }
  }

  addPrefecturePopulationChartDataset(
    prefName: string,
    items: PrefecturePopulation[]
  ) {
    const dataset = {
      label: prefName,
      data: items.map((item) => item.value),
      fill: false,
      lineTension: 0,
    };
    this.prefecturePopulationChartData.labels = items.map((item) => item.year);
    this.prefecturePopulationChartData.datasets.push(dataset);
  }
}
</script>

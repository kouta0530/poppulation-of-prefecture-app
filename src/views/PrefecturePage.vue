<template>
  <div class="container">
    <prefecture-header
      text="title"
      size="32"
      backgroundColor="gray"
      width="100%"
      height="100px"
      display="flex"
      justify="center"
    ></prefecture-header>
    <prefecture-label
      label="都道府県"
      size="16"
      align="left"
    ></prefecture-label>
    <prefecture-check-boxes
      :prefetureList="prefectureList"
      @selectedPrefecture="getPrefectureCode"
    ></prefecture-check-boxes>
    <prefecture-chart-group
      :items="prefecturePopulationChartData"
      :options="options"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PrefectureHeader from "@/components/PrefectureHeader.vue";
import PrefectureLabel from "@/components/PrefectureLabel.vue";
import PrefectureCheckBoxes from "@/components/PrefectureCheckBoxes.vue";
import PrefectureChartGroup from "@/components/PrefectureChartGroup.vue";
import prefectureAPI from "@/api/prefecture";
import Prefecture from "@/models/Prefecture.ts";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";
import PrefecturePopulationComposition from "@/models/PrefecturePopulationComposition";
import PrefecturePopulation from "@/models/PrefecturePopulation";
import PrefecturePopulationChartData from "@/models/PrefecturePopulationChartData";
import { generateColorCode } from "@/common/color";

@Component({
  components: {
    PrefectureHeader,
    PrefectureLabel,
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
  public options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "right",
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "年度",
            fontSize: 18,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "人口数",
            fontSize: 18,
          },
        },
      ],
    },
  };

  async created() {
    try {
      this.prefectureList = await prefectureAPI.getPrefectureList();
    } catch (err) {
      alert("都道府県一覧の取得に失敗しました");
    }
  }

  async getPrefectureCode(value: PrefectureCheckBoxParameter) {
    if (!value.checked) {
      this.removePrefecturePopulationChartDataset(value.prefName);
      return;
    }
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
      borderColor: generateColorCode(),
    };
    this.prefecturePopulationChartData.labels = items.map((item) => item.year);
    this.prefecturePopulationChartData.datasets.push(dataset);
  }

  removePrefecturePopulationChartDataset(prefName: string) {
    this.prefecturePopulationChartData.datasets = this.prefecturePopulationChartData.datasets.filter(
      (item) => item.label != prefName
    );
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  width: 550px;
  min-height: 1000px;
  margin-bottom: 5%;
  border: 1px solid black;
}

@media screen and (max-width: 678px) {
  .container {
    width: 100%;
  }
}
</style>

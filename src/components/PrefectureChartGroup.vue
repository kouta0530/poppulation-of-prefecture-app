<template>
  <div class="prefecture-chart-container">
    <prefecture-chart
      :chartData="upsertChartData"
      :options="options"
    ></prefecture-chart>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PrefectureChart from "@/components/PrefectureChart.vue";
import PrefecturePopulationChartData from "@/models/PrefecturePopulationChartData";

@Component({
  components: {
    PrefectureChart
  }
})
export default class PrefectureChartGroup extends Vue {
  @Prop({})
  items?: PrefecturePopulationChartData;

  @Prop()
  options?: Chart.ChartOptions;

  get upsertChartData() {
    return JSON.parse(JSON.stringify(this.items));
  }
}
</script>
<style>
.prefecture-chart-container {
  width: 500px;
  height: 200px;
  margin: 50px auto;
}

@media screen and (max-width: 678px) {
  .prefecture-chart-container {
    width: 100%;
    height: auto;
  }
}
</style>

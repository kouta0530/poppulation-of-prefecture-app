<template>
  <div class="prefecture-chart-container">
    <prefecture-chart :chartData="upsertChartData"></prefecture-chart>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import PrefectureChart from "@/components/PrefectureChart.vue";
import PrefecturePopulationChartData from "@/models/PrefecturePopulationChartData";

@Component({
  components: {
    PrefectureChart,
  },
})
export default class PrefectureChartGroup extends Vue {
  @Prop({})
  items?: PrefecturePopulationChartData;

  get upsertChartData() {
    return JSON.parse(JSON.stringify(this.items));
  }
}
</script>
<style>
.prefecture-chart-container {
  width: 500px;
  height: 300px;
  margin: 50px 0;
}
</style>

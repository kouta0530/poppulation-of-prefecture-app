<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import "chart.js";
import { Line, mixins } from "vue-chartjs";

@Component({})
export default class PrefectureChart extends Mixins(Line, mixins.reactiveProp) {
  @Prop()
  options?: Chart.ChartOptions;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

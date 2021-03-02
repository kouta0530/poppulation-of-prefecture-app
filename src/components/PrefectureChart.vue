<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import Chart from "chart.js";
import { Line, Bar, mixins } from "vue-chartjs";

@Component({})
export default class PrefectureChart extends Mixins(Line, mixins.reactiveProp) {
  @Prop()
  options?: any;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

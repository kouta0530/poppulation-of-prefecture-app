import PrefecturePopulationChartDataset from "@/models/PrefecturePopulationChartDataset";

export default interface PrefecturePopulationGraphData {
  labels: number[];
  datasets: PrefecturePopulationChartDataset[];
}

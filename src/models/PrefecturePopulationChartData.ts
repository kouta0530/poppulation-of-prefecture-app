import PrefecturePopulationChartDataset from "@/models/PrefecturePopulationChartDataset";

export default interface PrefecturePopulationChartData {
  labels: number[];
  datasets: PrefecturePopulationChartDataset[];
}

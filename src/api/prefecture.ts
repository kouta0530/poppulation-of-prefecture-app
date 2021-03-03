import axios from "axios";
import Prefecture from "@/models/Prefecture.ts";
import PrefecturePopulationComposition from "@/models/PrefecturePopulationComposition";

export default {
  async getPrefectureList(): Promise<Prefecture[]> {
    const res = await axios.get("/api/v1/prefectures");
    return res["data"]["result"];
  },

  async getPrefecturePopulationComposition(
    prefCode: number
  ): Promise<PrefecturePopulationComposition> {
    const res = await axios.get(
      `api/v1/population/composition/perYear?prefCode=${prefCode}`
    );
    return res["data"]["result"]["data"][0];
  },
};

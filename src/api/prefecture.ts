import axios from "axios";
import Prefecture from "@/models/Prefecture.ts";

export default {
  async getPrefectureList(): Promise<Prefecture[]> {
    const res = await axios.get("/api/v1/prefectures");
    return res["data"]["result"];
  },
};

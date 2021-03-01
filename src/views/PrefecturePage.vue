<template>
  <div>
    <prefecture-check-boxes
      :prefetureList="prefectureList"
      @selectedPrefecture="getPrefectureCode"
    ></prefecture-check-boxes>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PrefectureCheckBoxes from "@/components/PrefectureCheckBoxes.vue";
import prefectureAPI from "@/api/prefecture";
import Prefecture from "@/models/Prefecture.ts";
import prefecture from "@/api/prefecture";
import PrefectureCheckBoxParameter from "@/models/PrefectureCheckBoxParameter";

@Component({
  components: {
    PrefectureCheckBoxes,
  },
})
export default class PrefecturePage extends Vue {
  public prefectureList?: Prefecture[] = [];

  async created() {
    this.prefectureList = await prefectureAPI.getPrefectureList();
  }

  getPrefectureCode(value: PrefectureCheckBoxParameter) {
    return value;
  }
}
</script>

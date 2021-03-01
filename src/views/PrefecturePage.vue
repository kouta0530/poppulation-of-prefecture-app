<template>
  <div></div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import prefectureAPI from "@/api/prefecture";
import Prefecture from "@/models/Prefecture.ts";

@Component({})
export default class PrefecturePage extends Vue {
  public prefectureList?: Prefecture[];

  async created() {
    this.prefectureList = await prefectureAPI.getPrefectureList();
  }
}
</script>

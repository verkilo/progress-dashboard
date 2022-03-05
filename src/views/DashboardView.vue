<template>
  <h1>Progress</h1>
  <section>
    <div id="metrics" class="flex gap-x-5">
      <div class="metrics-card bordered bg-purple-600">
        <div class="metrics-data" id="wip-wordcount">88,000</div>
        <h2>WIP Wordcount</h2>
      </div>
      <div class="metrics-card bordered bg-green-600">
        <div class="metrics-data" id="annual-wordcount">888,000</div>
        <h2>Annual Wordcount</h2>
      </div>
      <div class="metrics-card bordered bg-red-600">
        <div class="metrics-data" id="days">300/300</div>
        <h2>Days (Done/Remain)</h2>
      </div>
      <div class="metrics-card bordered bg-blue-600">
        <div class="metrics-data" id="expected-on">Oct 01</div>
        <h2>Expected On</h2>
      </div>
    </div>
  </section>
  <section class="bordered my-3 text-sm">
    <div id="heatmap" class="text-center">
      <img
        src="https://via.placeholder.com/660x120.png?text=Consistency+Heatmap+Placeholder"
        alt=""
        class="mx-auto"
      />
    </div>
    <div class="flex justify-between mt-2">
      <div id="heatmap-data" class="border text-left">
        2022-01-31: 1,111 words.
      </div>
      <div id="details" class="border inline-block text-xs">
        <span class="mx-2">Less</span>
        <svg width="10" height="10" class="inline-block mr-1">
          <rect
            width="10"
            height="10"
            class="heatmap-1 heatmap-day"
            rx="2"
            ry="2"
            data-level="3"
          ></rect>
        </svg>
        <svg width="10" height="10" class="inline-block mr-1">
          <rect
            width="10"
            height="10"
            class="heatmap-2 heatmap-day"
            rx="2"
            ry="2"
            data-level="3"
          ></rect>
        </svg>
        <svg width="10" height="10" class="inline-block mr-1">
          <rect
            width="10"
            height="10"
            class="heatmap-3 heatmap-day"
            rx="2"
            ry="2"
            data-level="3"
          ></rect>
        </svg>
        <svg width="10" height="10" class="inline-block mr-1">
          <rect
            width="10"
            height="10"
            class="heatmap-4 heatmap-day"
            rx="2"
            ry="2"
            data-level="3"
          ></rect>
        </svg>
        <svg width="10" height="10" class="inline-block mr-1">
          <rect
            width="10"
            height="10"
            class="heatmap-5 heatmap-day"
            rx="2"
            ry="2"
            data-level="3"
          ></rect>
        </svg>
        <span class="mx-2">More</span>
      </div>
    </div>
    <h2 class="text-left text-opacity-70 border">Consistency Heatmap.</h2>
  </section>
  <div class="flex gap-3">
    <section class="bordered h-48 w-48 text-sm">
      <img
        src="https://via.placeholder.com/120x120.png?text=speed+dial"
        alt=""
        class="mx-auto"
      />
      <h2>Words per Day</h2>
      <span class="text-xs">(rolling 10-day average)</span>
    </section>
    <section class="bordered h-48 flex-1">
      <img
        src="https://via.placeholder.com/600x140.png?text=bar+graph"
        alt=""
        class="mx-auto"
      />
      <h2>Weekly Wordcount</h2>
    </section>
  </div>
</template>
<script>
export default {
  name: "DashboardView",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
.metrics-card {
  @apply flex-1 h-28 text-sm text-white py-4 items-center justify-center flex flex-col;
}
.metrics-data {
  @apply text-3xl font-bold;
}
section {
  @apply py-4;
}
</style>
<template>
  <div class="row bg-white py-3">
    <div class="col-3 border">
      <div class="text-center mt-3">
        <button class="btn btn-light" @click="draw()">Draw</button>
      </div>
    </div>
    <div class="col-9 border">
      <svg id="calder" width="800" height="600" class="calder"></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { type CalderParams } from '@/types/CalderParams'
import { GeometryService } from '@/services/GeometryService'
import { CalderMobileService } from '@/services/CalderMobileService'
export default defineComponent({
  data() {
    return {
      params: { HINGE_RADIUS: 4, HINGE_NUMBER: 1, DELTA_Y: 3 } as CalderParams,
      geometryService: new GeometryService(),
      calderMobileService: {} as CalderMobileService
    }
  },
  mounted() {
    this.calderMobileService = new CalderMobileService(this.geometryService, this.params)
    this.draw()
  },
  methods: {
    draw() {
      console.log('Hello')
      this.calderMobileService.testGenerateTree2()
    }
  },
  computed: {}
})
</script>

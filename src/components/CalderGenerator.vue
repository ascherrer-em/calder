<template>
  <div class="row bg-white py-3">
    <div class="col-12 border">
      <div class="row">
        <div class="text-center mt-3">
          <button class="btn btn-light" @click="draw(i)" v-for="i in [1, 2, 3, 4, 5]">
            Draw {{ i }}
          </button>
        </div>
      </div>
      <div class="row">
        <svg id="calder" width="800" height="600" class="calder"></svg>
      </div>
    </div>
    <div class="col-9 border"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { type CalderParams } from '@/types/CalderParams'
import { GeometryService } from '@/services/GeometryService'
import { CalderMobileService } from '@/services/CalderMobileService'
import * as d3 from 'd3'
import { CalderNode } from '@/models/CalderNode'

export default defineComponent({
  data() {
    return {
      params: { HINGE_RADIUS: 10, HINGE_NUMBER: 1, DELTA_Y: 3 } as CalderParams,
      geometryService: new GeometryService(),
      calderMobileService: {} as CalderMobileService,
      current_gen: 1
    }
  },
  mounted() {
    this.calderMobileService = new CalderMobileService(this.geometryService, this.params)
    this.draw(this.current_gen)
  },
  methods: {
    draw(n: number) {
      this.current_gen = n
      d3.select('#calder').html('')
      if (n === 1) {
        const root: CalderNode = this.calderMobileService.generateTree2()
        root.translate(600, 300)
        const svg = d3.select('#calder')
        root.draw(svg, true)
      } else if (n === 2) {
        const root: CalderNode = this.calderMobileService.generateTree3()
        root.translate(600, 300)
        const svg = d3.select('#calder')
        root.draw(svg, true)
      } else if (n === 3) {
        const root: CalderNode = this.calderMobileService.generateTree4()
        root.translate(600, 300)
        const svg = d3.select('#calder')
        root.draw(svg, true)
      } else if (n === 5) {
        const root: CalderNode = this.calderMobileService.generateTree5()
        root.translate(600, 300)
        const svg = d3.select('#calder')
        root.draw(svg, true)
      }
    }
  },
  computed: {}
})
</script>

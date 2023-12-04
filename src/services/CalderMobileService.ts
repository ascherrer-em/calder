import { CalderShape } from '@/models/CalderShape'
import { type CalderParams } from '../types/CalderParams'
import { GeometryService } from './GeometryService'
import { CalderCircle } from '@/models/CalderCicrcle'
import { CalderNode } from '@/models/CalderNode'
import * as d3 from 'd3'

export class CalderMobileService {
  COLOR_PALETTE: string[] = ['#f6532c', '#1448b5', '#dac605']

  constructor(
    public geometryService: GeometryService,
    public params: CalderParams
  ) {}
  generateRandomMobile() {}

  testGenerateTree2() {
    // Test the generation of a 2 shapes mobile
    const s1: CalderShape = new CalderCircle(10, this.COLOR_PALETTE[0])
    const s2: CalderShape = new CalderCircle(20, this.COLOR_PALETTE[1])

    const root: CalderNode = new CalderNode(null, this.geometryService, this.params)
    const left: CalderNode = new CalderNode(root, this.geometryService, this.params)
    const right: CalderNode = new CalderNode(root, this.geometryService, this.params)
    left.shape = s1
    right.shape = s2
    root.left_node = left
    root.right_node = right
    root.pos = { x: 200, y: 50 }
    left.pos = { x: 200 - 100, y: 50 }
    right.pos = { x: 200 + 100, y: 50 }

    console.log(root)
    const svg = d3.select('#calder')
    root.draw(svg, true)
  }

  testGenerateTree4() {
    // Test the generation of a 4 shapes mobile
    const s1: CalderShape = new CalderCircle(10, this.COLOR_PALETTE[0])
    const s2: CalderShape = new CalderCircle(20, this.COLOR_PALETTE[1])

    const root: CalderNode = new CalderNode(null, this.geometryService, this.params)
    const left: CalderNode = new CalderNode(root, this.geometryService, this.params)
    const right: CalderNode = new CalderNode(root, this.geometryService, this.params)
    left.shape = s1
    right.shape = s2
    root.left_node = left
    root.right_node = right
    root.pos = { x: 200, y: 50 }
    left.pos = { x: 200 - 100, y: 50 }
    right.pos = { x: 200 + 100, y: 50 }

    console.log(root)
    const svg = d3.select('#calder')
    root.draw(svg, true)
  }
}

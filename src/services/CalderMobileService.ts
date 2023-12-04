import { CalderShape } from '@/models/CalderShape'
import { type CalderParams } from '../types/CalderParams'
import { GeometryService } from './GeometryService'
import { CalderCircle } from '@/models/CalderCicrcle'
import { CalderNode } from '@/models/CalderNode'

export class CalderMobileService {
  constructor(
    public geometryService: GeometryService,
    public params: CalderParams
  ) {}
  generateRandomMobile() {}

  testGenerateRandomNode() {
    // Test the generation of a 2 shapes mobile
    const s1: CalderShape = new CalderCircle(10)
    const s2: CalderShape = new CalderCircle(20)

    const root: CalderNode = new CalderNode(null, this.geometryService)
    const left: CalderNode = new CalderNode(root, this.geometryService)
    const right: CalderNode = new CalderNode(root, this.geometryService)
    left.shape = s1
    right.shape = s2
    root.left_node = left
    root.right_node = right
    console.log(root)
  }
}

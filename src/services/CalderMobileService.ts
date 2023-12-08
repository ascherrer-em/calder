import { CalderShape } from '@/models/CalderShape'
import { type CalderParams } from '../types/CalderParams'
import { GeometryService } from './GeometryService'
import { CalderCircle } from '@/models/CalderCicrcle'
import { CalderNode } from '@/models/CalderNode'
import * as d3 from 'd3'
import { deg2rad, gaussianRandom, sample } from '@/utils'

export class CalderMobileService {
  COLOR_PALETTE: string[] = ['#f6532c', '#1448b5', '#dac605']

  constructor(
    public geometryService: GeometryService,
    public params: CalderParams
  ) {}
  generateRandomMobile() {}

  createRandomLeaf(mu: number = 20, sigma: number = 5, min_r: number = 0): CalderNode {
    const r = gaussianRandom(mu, sigma, min_r)
    const s: CalderShape = new CalderCircle(sample(this.COLOR_PALETTE), r)
    const node: CalderNode = new CalderNode(null, this.geometryService, this.params)
    node.shape = s
    node.weight = s.weight()
    return node
  }

  assembleBalanceNodes(
    left_node: CalderNode,
    right_node: CalderNode,
    L: number,
    from_left: boolean = true
  ): CalderNode {
    const w1: number = left_node.weight
    const w2: number = right_node.weight
    const node: CalderNode = new CalderNode(null, this.geometryService, this.params)

    node.left_node = left_node
    node.right_node = right_node
    node.weight = node.left_node.weight + node.right_node.weight
    // Compute balance point:
    const l1: number = (w2 * L) / (w1 + w2)
    const l2: number = L - l1
    console.log('Balance ', w1, w2, L, l1, l2)

    if (from_left) {
      // Left node is fixed, we place the right node with respect to it
      right_node.translate(L + left_node.pos.x - right_node.pos.x)
      right_node.pos.y = left_node.pos.y
      node.pos.x = left_node.pos.x + l1
      node.pos.y = left_node.pos.y - 2 * this.params.HINGE_RADIUS
    } else {
      // Right node is fixed, we place the left node with respect to it
      left_node.translate(-L + right_node.pos.x - left_node.pos.x)
      left_node.pos.y = right_node.pos.y
      node.pos.x = right_node.pos.x - l2
      node.pos.y = right_node.pos.y - 2 * this.params.HINGE_RADIUS
    }

    return node
  }

  // Assemble 2 shapes
  generateTree2() {
    // Test the generation of a 2 shapes mobile
    const L = gaussianRandom(200, 20)
    const nl = this.createRandomLeaf()
    const nr = this.createRandomLeaf()
    //const alpha = deg2rad(gaussianRandom(0, 10))
    const root: CalderNode = this.assembleBalanceNodes(nl, nr, L, false)
    return root
  }

  // Assemble 2 subtrees
  generateTree3() {
    const n1: CalderNode = this.generateTree2()
    const n2: CalderNode = this.generateTree2()
    const L = gaussianRandom(400, 20)
    const root: CalderNode = this.assembleBalanceNodes(n1, n2, L, false)
    console.log(root)
    return root
  }
  // Assemble N subtrees, each time adding a shape
  generateTree4(N: number = 3) {
    const leaf: CalderNode = this.generateTree2()
    let current_node = leaf
    let mu_radius: number = 10
    for (let i = 0; i < N; i++) {
      const new_node: CalderNode = this.createRandomLeaf(mu_radius)
      const L = gaussianRandom(300, 20, 3 * new_node.width)
      mu_radius *= 1.5
      current_node = this.assembleBalanceNodes(current_node, new_node, L)
    }
    return current_node
  }
  // Assemble N subtrees, each time adding a shape
  generateTree5(N: number = 3) {
    const leaf: CalderNode = this.generateTree2()
    let current_node = leaf
    let mu_radius: number = 10
    for (let i = 0; i < 1; i++) {
      const new_node: CalderNode = this.createRandomLeaf(mu_radius)
      const L = gaussianRandom(300, 20, 3 * new_node.width)
      mu_radius *= 1.5
      current_node = this.assembleBalanceNodes(current_node, new_node, L, false)
    }
    return current_node
  }
}

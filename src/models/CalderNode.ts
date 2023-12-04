import type { CalderParams } from '@/types/CalderParams'
import { GeometryService } from '../services/GeometryService'
import { type Point2D } from '../types/Point2D'
import { CalderShape } from './CalderShape'

export class CalderNode {
  /**
   * Class for a a node in the mobile tree
   */
  public parent: CalderNode | null
  public left_node: CalderNode | null = null
  public right_node: CalderNode | null = null
  public shape: CalderShape | null = null

  // Center of mass
  pos: Point2D = { x: 0, y: 0 }

  // Global width/height/weight (of underlying tree)
  width: number = 0
  height: number = 0
  weight: number = 0

  constructor(
    parent: CalderNode | null,
    public geometrySerice: GeometryService,
    public params: CalderParams
  ) {
    this.parent = parent
  }

  isLeaf() {
    return this.left_node === null && this.right_node === null
  }

  draw(node: any): undefined {
    node
      .append('circle')
      .attr('cx', this.pos.x)
      .attr('cy', this.pos.y)
      .attr('r', this.params.HINGE_RADIUS)
      .class('calder_hinge')

    if (this.left_node) {
      node
        .append('line')
        .attr('x1', this.pos.x)
        .attr('y1', this.pos.y)
        .attr('x2', this.left_node.pos.x)
        .attr('y2', this.left_node.pos.y)
        .class('calder_wire')
      this.left_node.draw(node)
    }
    if (this.right_node) {
      node
        .append('line')
        .attr('x1', this.pos.x)
        .attr('y1', this.pos.y)
        .attr('x2', this.right_node.pos.x)
        .attr('y2', this.right_node.pos.y)
        .class('calder_wire')
      this.right_node.draw(node)
    }
    if (this.shape) {
      this.shape.draw(node)
    }

    // Draw line from
  }
}

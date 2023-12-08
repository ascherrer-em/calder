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

  translate(dx: number = 0, dy: number = 0) {
    this.pos.x += dx
    this.pos.y += dy
    if (this.left_node) {
      this.left_node.translate(dx, dy)
    }
    if (this.right_node) {
      this.right_node.translate(dx, dy)
    }
  }
  draw(node: any, is_root: boolean = false): undefined {
    //const col: string = '#' + Math.floor(Math.random() * 16777215).toString(16)
    const col = '#1a1a1a'
    const g = node.append('g')
    if (this.shape === null) {
      g.append('circle')
        .attr('cx', this.pos.x)
        .attr('cy', this.pos.y)
        .attr('r', this.params.HINGE_RADIUS)
        .attr('stroke', col)
        .attr('class', 'calder_hinge')
    }

    if (this.left_node) {
      g.append('line')
        .attr('x1', this.pos.x)
        .attr('y1', this.pos.y + this.params.HINGE_RADIUS)
        .attr('x2', this.left_node.pos.x)
        .attr('y2', this.left_node.pos.y - this.params.HINGE_RADIUS)
        .attr('stroke', col)
        .attr('class', 'calder_wire')
      this.left_node.draw(node)
    }
    if (this.right_node) {
      g.append('line')
        .attr('x1', this.pos.x)
        .attr('y1', this.pos.y + this.params.HINGE_RADIUS)
        .attr('x2', this.right_node.pos.x)
        .attr('y2', this.right_node.pos.y - this.params.HINGE_RADIUS)
        .attr('stroke', col)
        .attr('class', 'calder_wire')
      this.right_node.draw(node)
    }
    if (this.shape) {
      this.shape.draw(node, { x: this.pos.x, y: this.pos.y - this.params.HINGE_RADIUS })
    }

    if (is_root) {
      g.append('line')
        .attr('x1', this.pos.x)
        .attr('y1', this.pos.y - this.params.HINGE_RADIUS)
        .attr('x2', this.pos.x)
        .attr('y2', this.pos.y - 500)
        .attr('stroke', col)
        .attr('class', 'calder_wire')
    }
  }
}

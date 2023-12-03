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
  cx: number = 0
  cy: number = 0

  // Wire length
  L: number = 0

  // Width and height (and weight)
  width: number = 0
  height: number = 0
  weight: number = 0

  // Coordinate of top left corner
  abs_x: number = 0
  abs_y: number = 0

  constructor(parent: CalderNode) {
    this.parent = parent
  }

  isLeaf() {
    return this.left_node === null && this.right_node === null
  }

  computeCenter(){
    if (this.left_node && this.right_node){
        this.cx = (this.left_node.cx * this.left_node.weight + this.right_node.cx * this.right_node.weight) / ( this.left_node.weight + this.right_node.weight)
        this.cy = (this.left_node.cy * this.left_node.weight + this.right_node.cy * this.right_node.weight) / ( this.left_node.weight + this.right_node.weight)
    }
  }

  getAngleFromDeltaX(dx: number){
    return 0
  }

  getDeltaXFromAngle(angle: number){
    return 0
  }
}

import { GeometryService } from '../services/GeometryService'
import { Point2D } from '../types/Point2D'
import { CalderShape } from './CalderShape'
import { CalderWire } from './CalderWire'

export class CalderNode {
  /**
   * Class for a a node in the mobile tree
   */
  public parent: CalderNode | null
  public left_node: CalderNode | null = null
  public right_node: CalderNode | null = null
  public shape: CalderShape | null = null
  public wire: CalderWire| null = null

  // Center of mass
  center: Point2D = {x: 0, y: 0}

  // Width and height (and weight)
  width: number = 0
  height: number = 0
  weight: number = 0

  // Coordinate of top left corner
  pos: Point2D = {x: 0, y:0}

  constructor(parent: CalderNode, public geometrySerice: GeometryService) {
    this.parent = parent
  }

  isLeaf() {
    return this.left_node === null && this.right_node === null
  }

  computeCenter(){
    if (this.left_node && this.right_node){
        this.center = this.geometrySerice.barycenter(this.left_node.center, this.right_node.center, this.left_node.weight, this.right_node.weight)
    }
  }

  getAngleFromDeltaX(dx: number){
    return 0
  }

  getDeltaXFromAngle(angle: number){
    return 0
  }
}

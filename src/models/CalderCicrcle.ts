import { CalderShape } from './CalderShape'

export class CalderCircle extends CalderShape {
  radius: number = 0
  constructor(radius: number) {
    super()
    this.radius = radius
  }
  weight(): number {
    return Math.PI * this.radius ** 2
  }
  toSVG(): string {
    return ''
  }
}

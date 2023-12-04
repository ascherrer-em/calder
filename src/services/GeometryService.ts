import { Point2D } from "../types/Point2D";

export class GeometryService {
    barycenter(p1: Point2D, p2: Point2D, w1:number, w2:number){
        const b: Point2D = {x: 0, y: 0}
        b.x = (p1.x*w1 + p2.x*w2) / (w1+w2)
        b.y = (p1.y*w1 + p2.y*w2) / (w1+w2)
        return b
    }
}
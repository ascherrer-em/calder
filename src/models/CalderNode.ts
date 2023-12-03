import { CalderShape } from "./CalderShape";

export class CalderNode {
    /**
     * Class for a a node in the mobile tree
     */
    public parent: CalderNode|null; 
    public children: CalderNode[] = [];
    public shape: CalderShape|null = null;

    // Center of mass
    cx: number = 0 
    cy: number = 0
    width: number = 0
    height: number = 0
    abs_x: number = 0
    abs_y: number = 0

    constructor(parent: CalderNode) {
        this.parent = parent;
        if (this.parent) {
            this.parent.children.push(this); 
        }
    }
}
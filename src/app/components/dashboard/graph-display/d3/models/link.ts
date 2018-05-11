import {Node} from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: Node;
  target: Node;
  strength: number;
  label: string;
  directed: boolean;


  constructor(source, target, label, directed) {
    this.source = source;
    this.target = target;
    this.strength = 1;
    this.label = label;
    this.directed = directed;
  }


  get translation(): number[] {
    return [((this.source.x + this.target.x) / 2), ((this.source.y + this.target.y) / 2)];
  }

  get angle(): number {
    return Math.atan((this.source.y - this.target.y) / (this.source.x - this.target.x)) * 180 / Math.PI;
  }

  get transform(): string {
    return 'translate(' + this.translation + ')' + 'rotate(' + this.angle + ')';
  }

  get markerEnd(): string {
    return this.directed ? 'url(#arrow)' : '';
  }

  get x2(): number {
    const adjacent = (Math.cos(this.angle / 180 * Math.PI) * this.target.r);
    return (this.target.x - this.source.x > 0) ? this.target.x - adjacent : this.target.x + adjacent;
  }

  get y2(): number {
    const opposite = (Math.sin(this.angle / 180 * Math.PI) * this.target.r);
    return (this.target.x - this.source.x > 0) ? this.target.y - opposite : this.target.y + opposite;
  }
}

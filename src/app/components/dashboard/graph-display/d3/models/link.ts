import {Node} from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: Node;
  target: Node;
  strength: number;
  label: string;
  color: string = "#E5E5E5";

  constructor(source, target, label) {
    this.source = source;
    this.target = target;
    this.strength = 1;
    this.label = label;
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
}

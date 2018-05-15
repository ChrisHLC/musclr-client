export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  // user
  username?: string;

  // event
  workout?: string;

  role?: string;

  id: string;
  group: string;
  label: string;
  level: string;
  normal = 0;
  color: string;

  constructor(id, group, label, level, role?) {
    this.id = id;
    this.group = group;
    this.label = label;
    this.level = level;
    this.role = role ? role : '';
  }

  // normal = () => {
  //   return Math.sqrt(this.linkCount / APP_CONFIG.N);
  // };


  get r() {
    return 50 * this.normal + 10;
  }

  get fontSize() {
    return (30 * this.normal + 10) + 'px';
  }
}

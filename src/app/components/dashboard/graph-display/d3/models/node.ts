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

  id: string;
  role: string;
  label: string;
  level: string;
  normal = 0;
  color: string;

  constructor(id, role, label, level) {
    this.id = id;
    this.role = role;
    this.label = label;
    this.level = level;
    // switch (level) {
    //   case 'Gold':
    //     this.color = '#D4AF37';
    //     break;
    //   case 'Silver':
    //     this.color = '#C0C0C0';
    //     break;
    //   case 'Bronze':
    //     this.color = '#CD7F32';
    //     break;
    // }
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

  // get color() {
  //   return this.level === 1 ? 'red' : 'gray';
  // }
}

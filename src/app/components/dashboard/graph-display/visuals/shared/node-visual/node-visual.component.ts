import {Node} from '../../../d3';
import {Component, Input} from '@angular/core';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
        class="node"
        [attr.fill]="node.color"
        [attr.stroke]="node.stroke"
        cx="0"
        cy="0"
        [attr.r]="node.r"
        [ngStyle]="node.style">
      </svg:circle>
      <svg:text
        class="node-name"
        [attr.dx]="node.r + 5"
        dy="4"
        [attr.font-size]="node.fontSize">
        {{node.label}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}

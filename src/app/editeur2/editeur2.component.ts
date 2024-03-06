import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import { Service } from '../app.service';

@Component({
  selector: 'app-editeur2',
  templateUrl: './editeur2.component.html',
  styleUrls: ['./editeur2.component.css'],
  preserveWhitespaces: true,
})
export class Editeur2Component {

  flowNodesDataSource: ArrayStore;

  flowEdgesDataSource: ArrayStore;

  constructor(service: Service) {
    this.flowNodesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowNodes() as any[], // Cast to any[]
    });
    this.flowEdgesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowEdges() as any[], // Cast to any[]
    });
  }
}

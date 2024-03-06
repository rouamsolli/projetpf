import { Injectable } from '@angular/core';

export class FlowNode {
  id: number=0;

  text: string='f';

  type: string='f';
}

export class FlowEdge {
  id: number=0;

  fromId: number=0;

  toId: number=0;

  text: string='r';
}

const flowNodes: FlowNode[] = [
  {
    id: 107,
    text: 'start',
    type: 'terminator',
  },
  {
    id: 108,
    text: 'envoi un email',
    type: 'process',
  },
  {
    id: 118,
    text: 'Condition',
    type: 'diamond',
  },
  {
    id: 120,
    text: 'Fin',
    type: 'terminator',
  },
  {
    id: 121,
    text: 'Changement propriété',
    type: 'process',
  },
    {
    id: 122,
    text: 'Changement propriété',
    type: 'process',
  }
];

const flowEdges: FlowEdge[] = [
  {
    fromId: 107,
    id: 116,
    text: '',
    toId: 118,
  },
  {
    fromId: 118,
    id: 117,
    text: 'Vrai',
    toId: 108,
  },
  {
    fromId: 118,
    id: 122,
    text: 'Faux',
    toId: 121,
  },
  {
    fromId: 108,
    id: 123,
    text: '',
    toId: 122,
  },
  {
    fromId: 122,
    id: 124,
    text: '',
    toId: 120,
  },
  {
    fromId: 121,
    id: 126,
    text: '',
    toId: 120,
  },
  
];

@Injectable()
export class Service {
  getFlowNodes() {
    return flowNodes;
  }

  getFlowEdges() {
    return flowEdges;
  }
}

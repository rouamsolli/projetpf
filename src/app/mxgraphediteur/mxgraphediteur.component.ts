import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var mxGraph: any;
declare var mxHierarchicalLayout: any;

@Component({
  selector: 'app-mxgraphediteur',
  templateUrl: './mxgraphediteur.component.html',
  styleUrls: ['./mxgraphediteur.component.css']
})
export class MxgraphediteurComponent implements AfterViewInit {
   @ViewChild('graphContainer') graphContainer!: ElementRef;
  @ViewChild('palettecontainer') paletteContainer!:ElementRef;
  constructor() {
    // Initialize graphContainer if necessary
  }

  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);
    const palette=new mxGraph(this.paletteContainer.nativeElement)
    try {
      const parent = graph.getDefaultParent();
      const p=palette.getDefaultParent();
      graph.getModel().beginUpdate();
      // Creating Shapes
      const v1 = graph.insertVertex(parent, null, 'start', 0, 0, 200, 80,'shape=ellipse');
      const v2 = graph.insertVertex(parent, null, 'envoi email', 0, 0, 200, 80, );
      const v3 = graph.insertVertex(parent, null, 'Fin', 0, 0, 200, 80 ,'shape=ellipse');
      const v4 = graph.insertVertex(parent, null, 'Changement propriété',0,0, 200, 80);
      const v5 = graph.insertVertex(parent, null, 'Changement propriété',0,0, 200, 80);
      const v6 = graph.insertVertex(parent, null, 'Condition',0,0, 200, 80,'shape=hexagon');
    const vv1=palette.insertVertex(p,null,'',0,0,0,0,'shape=ellipse')
      // Creating parent-child relationship
     
      graph.insertEdge(parent, null, null, v1, v6);
      graph.insertEdge(parent, null, null, v6, v4);
      graph.insertEdge(parent, null, null, v6, v2);
       graph.insertEdge(parent, null, null, v2, v5);
      graph.insertEdge(parent, null, null, v5, v3);
       graph.insertEdge(parent, null, null, v4, v3);
     
    } finally {
      graph.getModel().endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }

}

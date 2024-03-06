import { Component ,ViewChild} from '@angular/core';
import { ConnectorModel, DiagramComponent, FlowShapeModel, NodeModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent {
   @ViewChild ('diagram') diagramObj !:DiagramComponent;
  //save json 
  public diagramData:any;
  public paletteExpandingAction(args:any){
    if(args.palette.id==='flow'){
     args.cancel=true;
    }
    
  }
  public terminatorShape: FlowShapeModel = {type:'Flow' , shape:'Terminator'};
  public processShape: FlowShapeModel = { type: 'Flow', shape:'Process'};
  public DecisionShape: FlowShapeModel = { type: 'Flow', shape:'Decision'};
  public symbolPalette: PaletteModel[]=[
    {id:'basic',
   
    symbols:this.getBasicShapes(),
     title:'Basic Shapes'
    },
        {id:'flow',
        //collabs shaps
         //expanded:false,
    symbols:this.getFlowShapes(),
     title:'Flow Shapes'
    },
         {id:'connectors',
    symbols:this.getconnectors(),
     title:'Connectors'
    }
  ];
  public getFlowShapes(): NodeModel[]{
     let flowshapes:NodeModel[]= [
    {id:'Terminator',shape:{type:'Flow',shape:'Terminator'}},
    {id:'Process',shape:{type:'Flow',shape:'Process'}},
    {id:'Decision',shape:{type:'Flow',shape:'Decision'}},
    {id:'PreDefinedProcess',shape:{type:'Flow',shape:'PreDefinedProcess'}}
    
  ];
  return flowshapes;
  }
  public getconnectors(): ConnectorModel[]{
    let connectors: ConnectorModel[]=[
      {
        id:'Link1',
        type:'Orthogonal',
        sourcePoint:{x:0,y:0},
        targetPoint:{x:60,y:60},
        targetDecorator:{shape:'Arrow'}
      },
        {
        id:'Link2',
        type:'Orthogonal',
        sourcePoint:{x:0,y:0},
        targetPoint:{x:60,y:60},
        targetDecorator:{shape:'None'}
      },
        {
        id:'Link3',
        type:'Straight',
        sourcePoint:{x:0,y:0},
        targetPoint:{x:60,y:60},
        targetDecorator:{shape:'Arrow'}
      }
    ];
    return connectors;
  }
  public getBasicShapes(): NodeModel[]{
  let basicshapes:NodeModel[]= [
    {id:'Rectangle',shape:{type:'Basic',shape:'Rectangle'}},
    {id:'Ellipse',shape:{type:'Basic',shape:'Ellipse'}},
    {id:'Hexagon',shape:{type:'Basic',shape:'Hexagon'}},
    {id:'Parallelogram',shape:{type:'Basic',shape:'Parallelogram'}}
    
  ];
  return basicshapes;
  }
  public defaultNodeValues(defaultnode:NodeModel):NodeModel{
    defaultnode.height = 50;
    defaultnode.width = 200;
    defaultnode.offsetX = 800;
    return defaultnode;

  }
  public onSave(){
this.diagramData=this.diagramObj.saveDiagram();
this.downlaod(this.diagramObj.saveDiagram());
  }
    public onLoad(){
      //appel load method using instance
this.diagramObj.loadDiagram(this.diagramData);
  }
  public downlaod(data:string){
    if((window.navigator as any).msSavaBlob){
      let blob: Blob=new Blob([data],{type:'data:text/json;charset=utf-8,'});
      (window.navigator as any ).msSaveOrOpenBlob(blob,'Diagram.json');
    }else{
      let dataStr:string='data:text/json;charset=utf-8,' +encodeURIComponent(data);
      let a:HTMLAnchorElement = document.createElement('a');
      a.href=dataStr;
      a.download='Diagram.json'
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

}

import { Component } from "@angular/core";


@Component({
  selector: 'app-bpmnediteur',
  templateUrl: './bpmnediteur.component.html',
  styleUrls: ['./bpmnediteur.component.css']
})
export class BpmnediteurComponent  {

  diagramUrl = 'https://cdn.statically.io/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  importError?: Error;

  handleImported(event:any) {

    const {
      type,
      error,
      warnings
    } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }

}
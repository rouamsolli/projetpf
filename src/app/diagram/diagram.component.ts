import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
  ViewChild
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

import BpmnJS, { ImportXMLResult } from 'bpmn-js/lib/Modeler'; // Adjust the import statement

import { from, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-diagram',
  template: `
    <div #ref class="diagram-container"></div>
  `,
  styles: [
    `
      .diagram-container {
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class DiagramComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {

  @ViewChild('ref', { static: true }) private el!: ElementRef;
  @Input() public url?: string;
  @Output() private importDone: EventEmitter<string[]> = new EventEmitter(); // Adjust the EventEmitter type
  private bpmnJS: BpmnJS = new BpmnJS();

  constructor(private http: HttpClient) {}

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnInit(): void {
    if (this.url) {
      this.loadUrl(this.url);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // re-import whenever the url changes
    if (changes['url']) {
      this.loadUrl(changes['url'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  /**
   * Load diagram from URL and emit completion event
   */
  loadUrl(url: string): Subscription {
    return this.http.get(url, { responseType: 'text' }).pipe(
      switchMap((xml: string) => this.importDiagram(xml)),
      map(result => result.warnings),
    ).subscribe(
      (warnings) => {
        this.importDone.emit(warnings); // Emit only the warnings
      },
      (err) => {
        this.importDone.emit([err.message]); // Handle error and emit it
      }
    );
  }

  /**
   * Creates a Promise to import the given XML into the current
   * BpmnJS instance, then returns it as an Observable.
   */
  private importDiagram(xml: string): Observable<ImportXMLResult> {
    return from(this.bpmnJS.importXML(xml));
  }
}

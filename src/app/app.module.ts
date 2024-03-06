import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeworkflowsComponent } from './listeworkflows/listeworkflows.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { NouveauWorkflowComponent } from './nouveau-workflow/nouveau-workflow.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EditeurComponent } from './editeur/editeur.component';
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { Editeur2Component } from './editeur2/editeur2.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';
import { Service } from './app.service';
import { MxgraphediteurComponent } from './mxgraphediteur/mxgraphediteur.component';
import { BpmnediteurComponent } from './bpmnediteur/bpmnediteur.component';
import { DiagramComponent } from './diagram/diagram.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeworkflowsComponent,
    NouveauWorkflowComponent,
    EditeurComponent,
    Editeur2Component,
    MxgraphediteurComponent,
    BpmnediteurComponent,
    DiagramComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DiagramModule,
    SymbolPaletteModule,
      HttpClientModule,
    DxDiagramModule
    
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

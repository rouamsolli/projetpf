import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeworkflowsComponent } from './listeworkflows/listeworkflows.component';
import { NouveauWorkflowComponent } from './nouveau-workflow/nouveau-workflow.component';
import { EditeurComponent } from './editeur/editeur.component';
import { Editeur2Component } from './editeur2/editeur2.component';
import { MxgraphediteurComponent } from './mxgraphediteur/mxgraphediteur.component';
import { BpmnediteurComponent } from './bpmnediteur/bpmnediteur.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:"listworkflow",component:ListeworkflowsComponent},
  {path:'nouveauworkflow',component:NouveauWorkflowComponent},
   { path: 'bpmnediteur/:id', component: BpmnediteurComponent },
  { path: 'autre-page/:id', component: EditeurComponent },
  { path: 'devextremeediteur/:id', component:Editeur2Component },
  {path:"mxgraphediteur/:id",component:MxgraphediteurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

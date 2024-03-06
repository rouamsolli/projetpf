import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NouveauWorkflowComponent } from '../nouveau-workflow/nouveau-workflow.component';
import { Router } from '@angular/router';
// Simulation de données correspondant aux informations fournies
const WORKFLOW_DATA: any[] = [
  {id:1, nom: 'Workflow 1', description: 'Description du workflow 1', date_creation: new Date('2022-01-01'), date_modification: new Date('2022-01-10') },
  { id:2, nom: 'Workflow 2', description: 'Description du workflow 2', date_creation: new Date('2022-02-05'), date_modification: new Date('2022-02-15') },
  { id:3 ,nom: 'Workflow 3', description: 'Description du workflow 3', date_creation: new Date('2022-03-10'), date_modification: new Date('2022-03-20') },
  { id:4 ,nom: 'Workflow 4', description: 'Description du workflow 4', date_creation: new Date('2022-04-15'), date_modification: new Date('2022-04-25') },
  {id:5, nom: 'Workflow 5', description: 'Description du workflow 5', date_creation: new Date('2022-05-20'), date_modification: new Date('2022-05-30') }
];


@Component({ 
  selector: 'app-listeworkflows',
  templateUrl: './listeworkflows.component.html',
  styleUrls: ['./listeworkflows.component.css']
})
export class ListeworkflowsComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['nom', 'description', 'date_creation', 'date_modification'];
  dataSource = new MatTableDataSource<any>(WORKFLOW_DATA);
constructor(public dialog: MatDialog,private router: Router) {}
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

applyFilter(event: any) {
  if (event?.target instanceof HTMLInputElement) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  } else {
    this.dataSource.filter = '';
  }
}
  openDialog() {
    const dialogRef = this.dialog.open(NouveauWorkflowComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
/*navigateToComponent(id: number) {
  if (id) {
    this.router.navigate(['/bpmnediteur', id]); // Navigate to BpmnediteurComponent with the workflow ID
  } else {
    this.router.navigate(['/autre-page']); // Navigate to autre-page without the workflow ID
  }
}*/
navigateToComponent(id: number) {
  const workflow = WORKFLOW_DATA.find(item => item.id === id);

  if (workflow) {
    if (workflow.nom === 'Workflow 1') {
      this.router.navigate(['/bpmnediteur', id]);
    } else if (workflow.nom === 'Workflow 2') {
      this.router.navigate(['/autre-page', id]);
    }else if (workflow.nom === 'Workflow 3') {
      this.router.navigate(['/devextremeediteur', id]);
    }else {
      this.router.navigate(['/mxgraphediteur', id]);
    }
  }
}


}



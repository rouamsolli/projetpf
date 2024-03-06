import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-workflow',
  templateUrl: './nouveau-workflow.component.html',
  styleUrls: ['./nouveau-workflow.component.css']
})
export class NouveauWorkflowComponent implements OnInit {

  // Create a FormGroup to manage multiple FormControls
  workflowForm!: FormGroup;

  // Create FormControl for the name with required validation
  nameFormControl = new FormControl('', [Validators.required]);

  // Create FormControl for the description
  descriptionFormControl = new FormControl('');

  constructor(private router: Router, private dialogRef: MatDialogRef<NouveauWorkflowComponent>) { }

  ngOnInit(): void {
    // Initialize the FormGroup with appropriate FormControls
    this.workflowForm = new FormGroup({
      nom: this.nameFormControl,
      description: this.descriptionFormControl,
      dateCreation: new FormControl(''), // Add FormControl for dateCreation
      dateModification: new FormControl('') // Add FormControl for dateModification
    });
  }

  generateId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  createWorkflow(): void {
    // Check if the form is valid
    if (this.workflowForm.valid) {
      // Create a new workflow object with the form values
      const newWorkflow = {
        id: this.generateId(6), // Generate a random ID of length 6
        nom: this.nameFormControl.value,
        description: this.descriptionFormControl.value,
        date_creation: this.workflowForm.get('dateCreation')?.value, // Get dateCreation value
        date_modification: this.workflowForm.get('dateModification')?.value // Get dateModification value
      };

      // Add the new workflow object to your data array or send it to your service for saving
      console.log('New workflow:', newWorkflow);

      // Reset the form values after creation
      this.workflowForm.reset();
      this.router.navigate(['/listworkflow']);
      this.dialogRef.close(newWorkflow);
    }
  }
}

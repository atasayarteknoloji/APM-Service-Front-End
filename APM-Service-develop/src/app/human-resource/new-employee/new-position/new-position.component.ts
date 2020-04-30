import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['./new-position.component.scss']
})
export class NewPositionComponent implements OnInit {
  form: FormGroup;
  model: NgbDateStruct;
  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<NewPositionComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      company: [],
      branch: [],
      departmant: [],
      title: [],
      manager: [],
      workType:[],
      startDate:[],
      endDate:[]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

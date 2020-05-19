import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSnackBar} from '@angular/material';
import {stakeholders, stakeholder_types} from '../../data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.css']
})
export class StakeholdersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;

  stakeholder_types = stakeholder_types;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  recordForm: FormGroup;

  submitted = false;

  constructor(
    public modalService: NgbModal,
    public snackbar: MatSnackBar,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(stakeholders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.clearRecord();
  }

  clearRecord() {
    this.recordForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  get f() { return this.recordForm.controls; }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(modal) {
    this.modalService.open(modal);
  }

  rerender() {
    this.snackbar.open('Refreshed Successfully', 'Okay', {
      duration: 3000
    });
  }

  newRecord(modal) {
    this.clearRecord();
    this.openModal(modal);
  }

  editRecord(record, modal) {
    this.recordForm = this.formBuilder.group(record);
    this.openModal(modal);
  }

  onSubmit() {
    this.submitted = true;
    if (this.recordForm.invalid) {
      return;
     } else {
      this.submitted = false;
     }
  }

}

import { environment } from './../../../../environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'cash', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  recordForm: FormGroup;

  submitted = false;

  action: any;

  constructor(
    public modalService: NgbModal,
    public snackbar: MatSnackBar,
    public formBuilder: FormBuilder,
    public https: HttpService
  ) { }

  ngOnInit() {
    this.loadData();
    this.clearRecord();
  }

  loadData() {
    this.https.fetchRecordByURL(environment.manufacturer)
    .subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  clearRecord() {
    this.recordForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      id_: ['', Validators.required],
      address: ['', Validators.required],
      cash: [null, Validators.required],
      transactionId: null,
      timestamp: null
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
    this.loadData();
  }

  newRecord(modal) {
    this.clearRecord();
    this.openModal(modal);
    this.action = 'new';
  }

  editRecord(record, modal) {
    this.action = 'edit';
    this.recordForm = this.formBuilder.group(record);
    this.openModal(modal);
  }

  onSubmit() {
    this.submitted = true;
    if (this.recordForm.invalid) {
      return;
    } else {

      if (this.action === 'new') {
        this.https.postNewRecord(this.recordForm.value, environment.manufacturer)
        .subscribe((resp: any) => {
          console.log(resp);
          this.loadData();
          this.modalService.dismissAll();
        });
      }
      if (this.action === 'edit') {
      }

      this.submitted = false;
    }
  }

}

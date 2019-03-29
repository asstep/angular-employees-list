import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {EmployeesListService} from "../shared/services/employees-list.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface DialogData {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string
    availability: boolean;
    salary: number;
    tax: number;
}

export interface EmployeesList {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string
    availability: boolean;
    salary: number;
    tax: number;
    total: number;
}

@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.sass'],
})

export class EmployeesListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthday', 'gender', 'availability', 'salary', 'tax', 'total', 'buttons'];
    emplObsv;
    emplList = [];
    emplItem = {};
    dataSource;

    constructor(private employeesListService: EmployeesListService,
                private ref: ChangeDetectorRef,
                public dialog: MatDialog) {
    }

    getEmployeesList() {
        this.emplObsv = this.employeesListService.readEmplList();
        this.employeesListService.readEmplList().subscribe(
            (data) => {
                this.emplList = data;
            }
        );
        const ELEMENT_DATA: EmployeesList[] = this.emplList;
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }

    readEmplItem(id) {
        this.emplItem = this.employeesListService.readEmplItem(id);
        const openDialog = this.dialog.open(DialogEmployeeEdit, {
            data: {
                id: this.emplItem['id'],
                firstName: this.emplItem['firstName'],
                lastName: this.emplItem['lastName'],
                birthday: this.emplItem['birthday'],
                gender: this.emplItem['gender'],
                availability: this.emplItem['availability'],
                salary: this.emplItem['salary'],
                tax: this.emplItem['tax'] * 100,
            }
        });
    }

    createEmployee() {
        this.dialog.open(DialogEmployeeCreate, {
            data: {
                firstName: '',
                lastName: '',
                birthday: '',
                gender: '',
                availability: '',
                salary: '',
                tax: '',
            }
        });
    }

    deleteEmplItem(id) {
        this.employeesListService.deleteEmplList(id);
        this.getEmployeesList();
    }

    ngOnInit() {
        this.getEmployeesList();
    }
}

@Component({
    selector: 'employee-edit-dialog',
    templateUrl: './employee-edit-dialog.html',
})
export class DialogEmployeeEdit {
    editEmployee: FormGroup;

    constructor(public dialogRef: MatDialogRef<DialogEmployeeEdit>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData,
                private editFormBuilder: FormBuilder,
                private employeesListService: EmployeesListService) {
    }

    private initForm(): void {
        this.editEmployee = this.editFormBuilder.group({
            id: ['', Validators.required],
            firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            birthday: ['', [Validators.required]],
            gender: ['', Validators.required],
            availability: [''],
            salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
            tax: ['',
                [Validators.min(0),
                    Validators.max(100),
                    Validators.required,
                    Validators.pattern('[0-9]*')]],
        })
    }

    submitEditEmpl(event) {
        event.preventDefault;
        this.employeesListService.updateEmplList(this.editEmployee.value);
        this.dialogRef.close();
    }

    ngOnInit() {
        this.initForm();
    }
}

@Component({
    selector: 'employee-create-dialog',
    templateUrl: './employee-create-dialog.html',
})
export class DialogEmployeeCreate {
    createEmployee: FormGroup;

    constructor(public dialogRef: MatDialogRef<DialogEmployeeCreate>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData,
                private createFormBuilder: FormBuilder,
                private employeesListService: EmployeesListService) {
    }

    private initForm(): void {
        this.createEmployee = this.createFormBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            birthday: ['', [Validators.required]],
            gender: ['', Validators.required],
            availability: [''],
            salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
            tax: ['',
                [Validators.min(0),
                    Validators.max(100),
                    Validators.required,
                    Validators.pattern('[0-9]*')]],
        })
    }

    submitCreateEmpl(event) {
        event.preventDefault;
        this.employeesListService.createEmplList(this.createEmployee.value);
        this.dialogRef.close();
    }

    ngOnInit() {
        this.initForm();
    }
}
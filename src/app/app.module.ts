import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {AppComponent} from './app.component';
import {DialogEmployeeEdit, DialogEmployeeCreate, EmployeesListComponent} from './employees-list/employees-list.component';
import {CurrencyWithSpace} from "./shared/pipes/currency-with-space.pipe";

@NgModule({
    declarations: [
        AppComponent,
        EmployeesListComponent,
        DialogEmployeeEdit,
        DialogEmployeeCreate,
        CurrencyWithSpace,
    ],
    entryComponents: [
        DialogEmployeeEdit,
        DialogEmployeeCreate,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

import {Injectable} from "@angular/core";
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class EmployeesListService {
    itemElem;
    employeesList = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Nilsen',
            birthday: new Date(1995, 2, 12),
            gender: 'male',
            availability: true,
            salary: 2500,
            tax: 0.12,
        },
        {
            id: 2,
            firstName: 'Sara',
            lastName: 'Howerton',
            birthday: new Date(1942, 3, 23),
            gender: 'female',
            availability: true,
            salary: 1500,
            tax: 0.21,
        },
        {
            id: 3,
            firstName: 'William',
            lastName: 'Finch',
            birthday: new Date(1975, 12, 5),
            gender: 'male',
            availability: false,
            salary: 4500,
            tax: 0.25,
        },
    ];

    createEmplList(user) {
        let listLength = this.employeesList.length;
        let lastId = this.employeesList[listLength-1].id;
        this.employeesList.push({
            id: ++lastId,
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.birthday,
            gender: user.gender,
            availability: user.availability,
            salary: user.salary,
            tax: user.tax/100,
        });
    }

    readEmplList() {
        return of(this.employeesList)
    }

    readEmplItem(id) {
        this.employeesList.forEach((item, key) => {
            if (item.id === id) {
                this.itemElem = item;
            }
        });
        return this.itemElem;
    }

    updateEmplList(user) {
        this.employeesList.forEach((item) => {
            if(item.id === user.id) {
                item.firstName = user.firstName;
                item.lastName = user.lastName;
                item.birthday = user.birthday;
                item.gender = user.gender;
                item.availability = user.availability;
                item.salary = user.salary;
                item.tax = user.tax/100;
            }
        });
    }

    deleteEmplList(id) {
        this.employeesList.forEach((item, key) => {
            if(item.id === id) {
                this.employeesList.splice(key,1)
            }
        });
        return this.employeesList;
    }
}
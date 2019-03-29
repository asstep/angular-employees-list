import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'currencyWithSpace'})
export class CurrencyWithSpace implements PipeTransform {
    transform(value: number): string {
        let currentValue;
        value = Math.round(value);
        currentValue = value.toLocaleString('fr');
        return currentValue;
    }
}
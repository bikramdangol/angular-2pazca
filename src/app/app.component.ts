import { Component } from '@angular/core';
import {CheckboxHeaderComponent} from './checkbox-header/checkbox-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Header with Checkbox to apply to all dropdown options.';
  frameworkComponents: any;
  constructor() {
    this.frameworkComponents = {
      headerWithCheckbox: CheckboxHeaderComponent
    };
  }
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'},
    {headerName: 'Opinion', field: 'opinion', editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams: {
      values: ['Select..', 'Like', 'Dislike', 'Neutral'],
      },
      headerComponent: 'headerWithCheckbox'
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, opinion: 'Select..' },
    { make: 'Ford', model: 'Mondeo', price: 32000, opinion: 'Like' },
    { make: 'Porsche', model: 'Boxter', price: 72000, opinion: 'Neutral' }
  ];
}

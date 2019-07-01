import {Component, ElementRef, OnDestroy} from '@angular/core';
import {IHeaderParams} from 'ag-grid-community';
import {IHeaderAngularComp} from 'ag-grid-angular';

interface MyParams extends IHeaderParams {
  menuIcon: string;
}

@Component({
  templateUrl: 'checkbox-header.component.html',
  styleUrls: ['checkbox-header.component.css']
})
export class CheckboxHeaderComponent implements OnDestroy, IHeaderAngularComp {
  public params: MyParams;
  private elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  agInit(params: MyParams): void {
    this.params = params;
    // this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
  }

  ngOnDestroy() {
    console.log(`Destroying HeaderComponent`);
  }

  onCheckboxValueChanged($event: Event) {
    console.log('change event: ', ($event.target as any).checked);
    console.log('params', this.params);
    const isSelected = ($event.target as any).checked;
    let firstSelection = 'Select..';
    if (isSelected) {
      this.params.api.forEachNode((rowNode, index) => {
        if (index ===  0) {
          firstSelection = rowNode.data.opinion;
        } else {
          rowNode.data.opinion = firstSelection;
        }
        console.log('first row opinion: ', firstSelection);
      });
      this.params.api.refreshCells();
    }
  }
}

import {Component} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {DataTransferService} from '../../../../core/services/data-transfer.service';

@Component({
  selector: 'app-checkbox-header',
  template: `<input type="checkbox"
                    [checked]="isAllSelected()"
                    (change)="toggleAllRows($event)"
  >`,
})
export class CheckboxHeaderComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(private updateService: DataTransferService) {
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  isAllSelected(): boolean {
    return this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  toggleAllRows(event): void {
    if (event.target.checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
    this.updateService.notifyHeaderCheckbox(this.params.api.getSelectedRows().length);
  }
}

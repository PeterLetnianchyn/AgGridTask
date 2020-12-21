import {Component} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {DataTransferService} from '../../../../core/services/data-transfer.service';

@Component({
  selector: 'app-checkbox-cell',
  template: ` <input type="checkbox"
                     [checked]="isSelected(videoID)"
                     (change)="toggleRow($event, videoID)"
  >`,
})
export class CheckRendererComponent implements ICellRendererAngularComp {
  public params: any;
  public videoID: string;

  constructor(private updateService: DataTransferService) {
  }

  public agInit(params: any): void {
    this.params = params;
    this.videoID = this.params.data.id.videoId;
  }
  public refresh(): boolean {
    return false;
  }
  isSelected(id: string): boolean {
    return this.params.api.getRowNode(id).isSelected();
  }
  toggleRow(event: any, videoID: string) {
    this.params.api.getRowNode(videoID).setSelected(event.currentTarget.checked);
    this.updateService.notifyHeaderCheckbox(this.params.api.getSelectedRows().length);
  }
}

import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {DataTransferService} from '../../../core/services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, ICellRendererAngularComp {
  public params: any;
  public totalRecordsCount: number;
  public selectedRecordsCount: number;


  constructor(private updateService: DataTransferService) { }


  agInit(params: any): void {
    this.params = params;
    this.totalRecordsCount = 0;
    this.params.api.forEachNode((rowNode) => {
      this.totalRecordsCount++;
    });
  }

  refresh(params: any): boolean {
    return false;
  }
  toggleSelection(event: any): void {
    this.params.columnApi.setColumnVisible('checkbox', event.currentTarget.checked);
  }

  ngOnInit(): void {
    this.updateService.notifyObservable$.subscribe((res) => {
        this.selectedRecordsCount = res;
    });
  }
}

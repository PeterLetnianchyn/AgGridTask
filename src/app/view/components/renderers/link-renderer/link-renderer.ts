import {Component} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';


@Component({
  selector: 'app-link-cell',
  template: `<a href="{{ link }}">{{ text }}</a>`,

})
export class LinkRendererComponent implements ICellRendererAngularComp {
  public params: any;
  public text: string;
  public link: string;

  public agInit(params: any): void {
    this.params = params;
    this.text = this.params.data.snippet.title;
    this.link = 'https://www.youtube.com/watch?v=' + this.params.data.id.videoId;
  }

  public refresh(): boolean {
    return false;
  }
}

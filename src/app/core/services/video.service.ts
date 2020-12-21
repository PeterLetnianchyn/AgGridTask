import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchItemListModel} from '../models/search-item-list-model';
import {VideoItemModel} from '../models/video-item-model';

@Injectable()
export class VideoService {


  private youtubeURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9rPKSPAYRevmwFFYiyrDutgLuD3NVhTM&maxResults=30&type=video&part=snippet&q=Java';

  constructor(private http: HttpClient) {
  }
  getVideoList(): Observable<VideoItemModel[]> {
    return this.http.get<SearchItemListModel>(this.youtubeURL).pipe(
      map(list => list.items)
    );
  }
}

import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '../../auth/request-options.interface';

@Injectable()
export class StalkerService {
  private nodesUrl = environment.serverUrl + 'nodes/';
  private stalkerUrl = environment.stalkerFlaskUrl + 'stalker';


  private httpOptions: RequestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response'
  };

  constructor(private http: HttpClient) {
  }

  getNodesByGroup(group: number) {
    return this.http.get(this.nodesUrl + 'group/' + group);
  }

  updateStalkerMap(data: any) {
    return this.http.post(this.stalkerUrl, data, this.httpOptions);
  }
}

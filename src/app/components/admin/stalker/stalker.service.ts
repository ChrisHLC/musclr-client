import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '../../auth/request-options.interface';
import {StalkerFormModel} from '../../../models/stalker-form.model';

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

  filterNodes(form: StalkerFormModel) {
    return this.http.post(this.nodesUrl + 'filter/', JSON.stringify(form), this.httpOptions);
  }

  updateStalkerMap(data: any) {
    return this.http.post(this.stalkerUrl, data, this.httpOptions);
  }
}

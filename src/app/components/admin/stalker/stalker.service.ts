import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StalkerService {
  private nodesUrl = environment.serverUrl + 'nodes/';


  constructor(private http: HttpClient) {
  }

  getNodesByGroup(group: number) {
    return this.http.get(this.nodesUrl + 'group/' + group);
  }

}

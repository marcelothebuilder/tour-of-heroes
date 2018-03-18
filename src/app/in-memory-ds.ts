import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { HEROES } from './mock-heroes';
import 'rxjs/add/observable/of';


export class InMemoryDataService extends InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return {
            hero: HEROES
        };
    }
}

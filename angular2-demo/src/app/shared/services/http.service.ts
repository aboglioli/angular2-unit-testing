import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpService {
  private url = 'https://jsonplaceholder.typicode.com';
  private postEndpoint = 'posts';

  constructor(private http: Http) { }

  joinUrl(...path: string[]) {
    return path.join('/');
  }

  getPosts() {
    const url = this.joinUrl(this.url, this.postEndpoint);

    this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }

  getPostById(id: string) {
    const url = this.joinUrl(this.url, this.postEndpoint, id);

    this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }

}

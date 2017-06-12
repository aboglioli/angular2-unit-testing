import { Injectable, ReflectiveInjector } from '@angular/core';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  Http,
  BaseRequestOptions,
  ConnectionBackend,
  RequestOptions,
  Response,
  ResponseOptions,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import '../../operators';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let backend: MockBackend;
  let lastConnection: MockConnection;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      HttpService
    ]);

    service = this.injector.get(HttpService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    backend.connections
      .subscribe((connection: MockConnection) => lastConnection = connection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should join urls', () => {
    expect(service.joinUrl('https://localhost', 'api', 'endpoint')).toBe('https://localhost/api/endpoint');
  });

  it('should getPosts()', fakeAsync(() => {
    const posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores n"
      }
    ];
    service.getPosts();
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(posts)
    })));
    tick();
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.url).toBe('https://jsonplaceholder.typicode.com/posts');
  }));

  it('should getPostById()', fakeAsync(() => {
    const posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores n"
      }
    ];
    service.getPostById('1');

    const url = lastConnection.request.url;
    const postId = url.substring(url.lastIndexOf('/')+1, url.length);
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(postId)
    })));
    tick();
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.url).toBe('https://jsonplaceholder.typicode.com/posts/1');

    service.getPostById('2');
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.url).toBe('https://jsonplaceholder.typicode.com/posts/2');
  }));
});

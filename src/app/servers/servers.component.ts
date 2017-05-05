import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'testName';
  bServerCreated = false;
  onServer(){
    this.bServerCreated = true;
  }

  constructor() { }

  ngOnInit() {
  }
}

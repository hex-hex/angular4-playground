import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'testName';
  strOutput = '';
  onServer(){
    this.strOutput = 'Create a server called:  ' + this.serverName;
  }

  constructor() { }

  ngOnInit() {
  }
}

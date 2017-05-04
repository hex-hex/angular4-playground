import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverId:number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus:string = 'No server was created.';
  serverName = '';
  onCreateServer(){
    this.serverCreationStatus = "There is a sever created";
  }
  onUpdateServerName(event:any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

}

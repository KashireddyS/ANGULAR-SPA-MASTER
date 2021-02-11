import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-dmeo',
  templateUrl: './styles-dmeo.component.html',
  styleUrls: ['./styles-dmeo.component.css']
})
export class StylesDmeoComponent implements OnInit {
  dynamicColor = 'Yellow';
  serverId = 10;
  serverStatus: string;
  isServerOnline: boolean;
  showOneline = true;

  constructor() { 
    this.getServerStatus();
  }

  ngOnInit() {
  }

  getServerStatus() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.isServerOnline = this.serverStatus == 'online';
  }

  getColor(): string {
    let color = this.serverStatus == 'online' ? '#90EE90' : '#FF6961';
    return color;
  }
}

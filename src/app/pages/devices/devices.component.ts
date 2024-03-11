import { Component } from '@angular/core';
import { Devices } from 'src/app/core/models/devices';
import { OperationalCenterService } from 'src/app/core/services/operational-center.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less']
})
export class DevicesComponent {
  devices: Devices[] = [];

  constructor(private operationalCenterService: OperationalCenterService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void{
    this.operationalCenterService.getDevices().subscribe(data => {
      this.devices = data;
      console.log(data);
    })
  }

  columns: string[] = ['Modelo'];

  columnMapping: { [key: string]: string } = {
    'Modelo': 'name'
  };
}

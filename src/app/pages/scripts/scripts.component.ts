import { Component, OnInit } from '@angular/core';
import { OperationalCenterService } from 'src/app/core/services/operational-center.service';
import { Script } from 'src/app/core/models/script';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.less']
})
export class ScriptsComponent{
  scripts: Script[] = [];

  constructor(private operationalCenterService: OperationalCenterService) {}

  ngOnInit(): void {
    this.getScripts();
  }

  getScripts(): void{
    this.operationalCenterService.getScripts().subscribe(data => {
      this.scripts = data;
      console.log(data);
    })
  }

  columns: string[] = ['Nome'];

  columnMapping: { [key: string]: string } = {
    'Nome': 'name'
  };
}

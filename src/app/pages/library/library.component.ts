import { Component } from '@angular/core';
import { Library } from 'src/app/core/models/library';
import { OperationalCenterService } from 'src/app/core/services/operational-center.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent {

  switchValue = false;

  toggleFormulario() {
    this.switchValue = !this.switchValue;

  }

  library: Library[] = [];

  constructor(private operationalCenterService: OperationalCenterService) {}

  ngOnInit(): void {
    this.getLibrary();
  }

  getLibrary(): void{
    this.operationalCenterService.getLibrary().subscribe(data => {
      this.library = data;
      console.log(data);
    })
  }

  columns: string[] = ['Marca','Modelo','Ano','Tipo','Categoria','Dispositivo Móvel','Firmware DM','Script','Firmware CAN'];

  columnMapping: { [key: string]: string } = {
    'Marca': 'vehicle_brand',
    'Modelo': 'vehicle_model',
    'Ano':'vehicle_model_year',
    'Tipo':'vehicle_type',
    'Categoria':'vehicle_category',
    'Dispositivo Móvel':'device',
    'Firmware DM':'device_firmware',
    'Script':'script',
    'Firmware CAN':'script_firmware'
  };
}

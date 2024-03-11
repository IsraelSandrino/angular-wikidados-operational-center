import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Script } from '../models/script';
import { Observable, map } from 'rxjs';
import { Devices } from '../models/devices';
import { Library } from '../models/library';

@Injectable({
  providedIn: 'root'
})
export class OperationalCenterService {

  constructor(private http: HttpClient) { }

  // Retorna as scritps de CAN
  getScripts(): Observable<Script[]> {
    return this.http.get<any>('assets/mocks/scripts.json').pipe(
      map(response => {
        if (response && response.data && Array.isArray(response.data)) {
          return response.data.map((item: { id: any; name: any; }) => ({
            id: item.id,
            name: item.name
          }));
        } else {
          throw new Error('Os dados da resposta da API não estão no formato esperado.');
        }
      })
    );
  };

  // Retorna os dispositivos móveis
  getDevices(): Observable<Devices[]> {
    return this.http.get<any>('assets/mocks/devices.json').pipe(
      map(response => {
        if (response && response.data && Array.isArray(response.data)) {
          return response.data.map((item: { id: any; name: any; }) => ({
            id: item.id,
            name: item.name
          }));
        } else {
          throw new Error('Os dados da resposta da API não estão no formato esperado.');
        }
      })
    );
  };

  getLibrary(): Observable<Library[]> {
    return this.http.get<any>('assets/mocks/library.json').pipe(
      map(response => {
        if (response && response.data && Array.isArray(response.data)) {
          return response.data.map((item: Library) => ({
            id: item.id,
            vehicle_brand: item.vehicle_brand,
            vehicle_model: item.vehicle_model,
            vehicle_model_year: item.vehicle_model_year,
            vehicle_type: item.vehicle_type,
            vehicle_category: item.vehicle_category,
            device: item.device,
            device_firmware: item.device_firmware,
            script: item.script,
            script_firmware: item.script_firmware
          }));
        } else {
          throw new Error('Os dados da resposta da API não estão no formato esperado.');
        }
      })
    )
  }
}

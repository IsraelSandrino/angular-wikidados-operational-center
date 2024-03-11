import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.less']
})
export class AdvancedSearchComponent {
  @Output() pesquisaAvancadaRealizada = new EventEmitter<any>();

  formularioPesquisaAvancada: FormGroup;

  marcas: string[] = ['Marca1', 'Marca2', 'Marca3']; // Exemplo de opções para o campo de seleção de marcas
  tipos: string[] = ['Tipo1', 'Tipo2', 'Tipo3']; // Exemplo de opções para o campo de seleção de tipos
  categorias: string[] = ['Categoria1', 'Categoria2', 'Categoria3']; // Exemplo de opções para o campo de seleção de categorias

  constructor(private formBuilder: FormBuilder) {
    this.formularioPesquisaAvancada = this.formBuilder.group({
      marca: [''],
      modelo: [''],
      anoModelo: [''],
      tipo: [''],
      categoria: [''],
      dispositivoMovel: [''],
      firmwareDM: ['']
    });
  }

  realizarPesquisaAvancada() {
    const dadosPesquisa = this.formularioPesquisaAvancada.value;
    this.pesquisaAvancadaRealizada.emit(dadosPesquisa);
  };

  listOfOption: string[] = [];
  listOfSelectedValue = ['1940', '2040'];

  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 1900; i < 2100; i++) {
      children.push(`${i}`);
    }
    this.listOfOption = children;
  }
}

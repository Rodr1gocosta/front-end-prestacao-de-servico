import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/model/tecnico';
import { TecnicosService } from './tecnicos.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit {

  tecnicos: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'acao'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
  clickedRows = new Set<Tecnico>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: Router,
              private service: TecnicosService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.tecnicos = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.route.navigate(['tecnicos/create'])
  }

}

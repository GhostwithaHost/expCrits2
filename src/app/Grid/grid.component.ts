import { Component, OnInit } from "@angular/core";


    @Component({
      selector: 'app-grid-component',
      templateUrl: 'grid.component.html',
      styleUrl: 'grid.component.scss',  
    })

export class GridComponent implements OnInit{
    public grid: GridData[] = [];

    constructor() {   
    }

    ngOnInit(): void {
    }
    
    public onClick() {

    }

}

interface GridData {
        XCoordinate: number;
        YCoordinate: number;
        playerOwned: string;
        numberEntered: number;
}

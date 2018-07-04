import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [MatToolbarModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  declarations: [],
  providers: [],
})
export class AppMaterialModule {}

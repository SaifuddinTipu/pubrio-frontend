import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'; 

export interface PeriodicElement {
  no: number;
  company: string;
  imagelink: string;
  Employees: string;
  Industry: string;
  Keywords: string;
  Location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, company: 'Amazon', imagelink: '../../assets/amazon.jfif', Employees: '1.468M', Industry: 'Information Technology', Keywords: 'ecommerce, retails', Location: 'Seattle, Washington'},
  {no: 2, company: 'Google', imagelink: '../../assets/google.jfif', Employees: '323,000', Industry: 'Information Technology', Keywords: 'ecommerce, fashion', Location: 'Mountain View, California'},
  {no: 3, company: 'Linkedin', imagelink: '../../assets/linkedin.jfif', Employees: '26,000', Industry: 'Information Technology', Keywords: 'education, technology', Location: 'Sunnyvale, California'},
  {no: 4, company: 'Microsoft', imagelink: '../../assets/microsoft.jfif', Employees: '11,000', Industry: 'Information Technology', Keywords: 'business software', Location: 'Redmond, Washington'},
  {no: 5, company: 'IBM', imagelink: '../../assets/ibm.jfif', Employees: '227,000', Industry: 'Information Technology', Keywords: 'software, information', Location: 'New York, New York'},
  {no: 6, company: 'Meta', imagelink: '../../assets/meta.jfif', Employees: '149,000', Industry: 'Information Technology', Keywords: 'consulting, IT service', Location: 'Mumbai, India'},
  {no: 7, company: 'Oracle', imagelink: '../../assets/oracle.jfif', Employees: '222,000', Industry: 'Information Technology', Keywords: 'management consultant', Location: 'Dublin, Ireland'}
];

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['select', 'Actions', 'Employees', 'Industry', 'Keywords', 'Location'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.no + 1}`;
  }

}

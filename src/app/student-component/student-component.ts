import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Student} from './model/student';


const ELEMENT_DATA: Student[] = [
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
]

@Component({
  selector: 'app-student-component',
  imports: [MatTableModule],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css'
})
export class StudentComponent {

  displayedColumns: string[] = ['index', 'name', 'group', 'average'];
  dataSource = ELEMENT_DATA;
}

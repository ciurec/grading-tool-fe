import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatCard} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {RestService} from '../../service/rest-service';
import {GroupModel} from '../../model/group.model';

@Component({
  selector: 'app-student-left-filter',
  imports: [
    NgForOf,
    MatCheckbox,
    MatCard,
    FormsModule
  ],
  templateUrl: './student-left-filter.html',
  standalone: true,
  styleUrl: './student-left-filter.css'
})
export class StudentLeftFilter implements OnInit {

  @Output() groupsChanged = new EventEmitter<string[]>();

  groups:GroupModel[] = [];


  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }


  onSelectionChange() {
    // const selectedGroups = this.groups
    //   .filter(g => g.selected)
    //   .map(g => g.name);

    // this.groupsChanged.emit(selectedGroups);
  }

  reset() {
    // this.groups.forEach(g => g.selected = false);
    this.groupsChanged.emit([]);
  }
}

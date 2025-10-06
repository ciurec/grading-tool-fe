import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatCard} from '@angular/material/card';
import {FormsModule} from '@angular/forms';

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
export class StudentLeftFilter {

  @Output() groupsChanged = new EventEmitter<string[]>();

  groups = [
    { name: 'Group A', selected: false },
    { name: 'Group B', selected: false },
    { name: 'Group C', selected: false },
    { name: 'Group D', selected: false }
  ];

  onSelectionChange() {
    const selectedGroups = this.groups
      .filter(g => g.selected)
      .map(g => g.name);

    this.groupsChanged.emit(selectedGroups);
  }

  reset() {
    this.groups.forEach(g => g.selected = false);
    this.groupsChanged.emit([]);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatCard} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-assignment-left-filter',
  imports: [
    NgForOf,
    MatCheckbox,
    MatCard,
    FormsModule,
    MatButton
  ],
  templateUrl: './assignment-left-filter.html',
  standalone: true,
  styleUrl: './assignment-left-filter.css'
})
export class AssignmentLeftFilter {

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

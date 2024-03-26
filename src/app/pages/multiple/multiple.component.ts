import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.scss'
})
export class MultipleComponent {

  selectAll = false;
  checkboxes = [
    { title: 'One', selected: false },
    { title: 'Two', selected: false },
    { title: 'Three', selected: false },
    { title: 'Four', selected: false },
    { title: 'Five', selected: false }
  ]

  toggleSelectAll() {
    // if (!this.selectAll) this.checkboxes.forEach((c) => (c.selected = false));
    // else this.checkboxes.forEach((c) => (c.selected = true));
    this.checkboxes.forEach((c) => (c.selected = this.selectAll));
  }
  checkboxChanged() {
    if (this.isAllCheckboxesSelected()) this.selectAll = true;
    else this.selectAll = false;

  }

  isAllCheckboxesSelected() {
    return this.checkboxes.every((c) => c.selected);
  }

  onClick() {
    let selectedCheckboxes = this.selectedCheckboxes;
    console.log(selectedCheckboxes);

  }


  get selectedCheckboxes() {
    return this.checkboxes.filter((c) => c.selected)
  }
}

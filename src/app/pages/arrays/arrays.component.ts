import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrays',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './arrays.component.html',
  styleUrl: './arrays.component.scss'
})
export class ArraysComponent {

  selectAll = false;
  operations = [1, 2, 3]
  checkboxes = [
    { id: 1, title: 'One', selected: false },
    { id: 2, title: 'Two', selected: false },
    { id: 3, title: 'Three', selected: false },
    { id: 4, title: 'Four', selected: false },
    { id: 5, title: 'Five', selected: false }
  ]

  ngOnInit(): void {
    this.checkboxes.forEach(checkbox => {
      if (this.operations.includes(checkbox.id)) {
        checkbox.selected = true;
      }
    });
    this.checkboxChanged();
  }

  toggleSelectAll() {
    this.checkboxes.forEach((c) => (c.selected = this.selectAll));
  }
  checkboxChanged() {
    if (this.isAllCheckboxesSelected()) this.selectAll = true;
    else this.selectAll = false;

  }

  isAllCheckboxesSelected() {
    return this.checkboxes.every((c) => c.selected);
  }

  // onClick() {
  //   let selectedCheckboxes = this.selectedCheckboxes;
  //   console.log(selectedCheckboxes);
  //   this.checkboxes.forEach(checkbox => checkbox.selected = false);
  //   this.selectAll = false;
  // }
  onClick() {
    let selectedCheckboxes = this.selectedCheckboxes;
    console.log(selectedCheckboxes);
    
    // Limpiar selecciones existentes
    this.checkboxes.forEach(checkbox => checkbox.selected = false);
    
    // Marcar solo los checkboxes cuyos IDs coincidan con los IDs en operations
    this.checkboxes.forEach(checkbox => {
        if (this.operations.includes(checkbox.id)) {
            checkbox.selected = true;
        }
    });
    
    this.selectAll = false;
}



  isFormValid(): boolean {
    // Verificar si al menos un checkbox está marcado
    if (this.selectedCheckboxes.length === 0) {
      return false;
    }

    // Si pasa ambas validaciones, el formulario es válido
    return true;
  }




  get selectedCheckboxes() {
    return this.checkboxes.filter((c) => c.selected)
  }

  isSelected(id: number): boolean {
    return this.operations.includes(id);
  }


}

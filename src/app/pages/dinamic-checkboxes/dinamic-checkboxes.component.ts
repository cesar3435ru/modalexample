import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dinamic-checkboxes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dinamic-checkboxes.component.html',
  styleUrl: './dinamic-checkboxes.component.scss'
})
export class DinamicCheckboxesComponent {
  
  selectAll = false;
  checkboxes = [
    { id: 1, title: 'One', selected: true },
    { id: 2, title: 'Two', selected: true },
    { id: 3, title: 'Three', selected: false },
    { id: 4, title: 'Four', selected: false },
    { id: 5, title: 'Five', selected: false }
  ]


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

  onClick() {
    // Obtener los checkboxes seleccionados actualmente
    let selectedCheckboxes = this.selectedCheckboxes;
    console.log(selectedCheckboxes);
  
    // Desmarcar solo los checkboxes que están seleccionados
    this.checkboxes.forEach(checkbox => {
      if (checkbox.selected) {
        checkbox.selected = false;
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


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.scss'
})
export class MultipleComponent {
  username: string = ''; // Nueva propiedad para el nombre de usuario
  // employee_id: number = null;
  employee_id: number | null = null;

  isUsernameTouched: boolean = false;
  isEmployeeTouched: boolean = false;


  validateUsername() {
    this.isUsernameTouched = true;
  }


  validateEmployee() {
    this.isEmployeeTouched = true;
  }

  // Función para verificar si el nombre de usuario es requerido
  isUsernameRequired(): boolean {
    return this.username.trim() === '' && this.isUsernameTouched;
  }

  // Función para verificar si la longitud del nombre de usuario excede el límite de 20 caracteres
  isUsernameLengthExceeded(): boolean {
    return this.username.length > 20;
  }


  isEmployeeInvalid(): boolean {
    const digitCount = this.employee_id ? Math.floor(Math.log10(Math.abs(this.employee_id))) + 1 : 0;
    return (
      this.isEmployeeTouched &&
      (this.employee_id === null || isNaN(this.employee_id) || digitCount < 4 || digitCount > 8)
    );
  }






  selectAll = false;
  checkboxes = [
    { title: 'One', selected: false },
    { title: 'Two', selected: false },
    { title: 'Three', selected: false },
    { title: 'Four', selected: false },
    { title: 'Five', selected: false }
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
    let selectedCheckboxes = this.selectedCheckboxes;
    console.log(selectedCheckboxes);
    console.log('Username:', this.username); // Mostrar el nombre de usuario seleccionado
    console.log('ID employee:', this.employee_id); // Mostrar el nombre de usuario seleccionado
    this.username = ''; // Vaciar el campo del nombre de usuario
    this.employee_id = null; //
    this.checkboxes.forEach(checkbox => checkbox.selected = false);
    this.selectAll = false;
    this.isUsernameTouched = false;
    this.isEmployeeTouched = false;
  }

  isFormValid(): boolean {
    // Verificar si el campo de nombre de usuario está vacío
    if (this.username.trim() === '') {
      return false;
    }

    if (this.employee_id === null) {
      return false;
    }

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

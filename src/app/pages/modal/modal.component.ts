import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  progress: number = 0;
  showProgressBar = false;
  showSecondInputs = false;
  constructor(private theForm: FormBuilder) {
    this.productForm.valueChanges.subscribe(() => {
      this.showProgressBar = true;
      this.updateProgress();

    });
  }

  productForm: FormGroup = this.theForm.group({
    nombre: ["", Validators.required],
    descripcion: ["", [Validators.required, Validators.minLength(10)]],
    stock: [null, Validators.required],
    categoria: ["", Validators.required],


  });


  // validateInput(campo: string) {
  //   return this.productForm.controls[campo].errors && this.productForm.controls[campo].touched
  // }

  validateInput(input: string) {
    const control = this.productForm.get(input);

    if (!control) {
      return false; // El control no existe
    }

    if (control.touched && control.errors) {
      if (control.errors['required']) {
        return true; // El campo es requerido y ha sido tocado
      }
      if (control.errors['minlength']) {
        return true; // El campo es demasiado corto y ha sido tocado
      }
    }

    return false; // No hay errores de validación o el control no ha sido tocado
  }

  updateProgress() {
    const totalFields = 4;
    const completedFields = Object.values(this.productForm.controls).filter(control => control.valid).length;
    this.progress = (completedFields / totalFields) * 100;

    if (completedFields >= 2) {
      this.showSecondInputs = true;
    }
  }


  saveProduct() {
    console.log(this.productForm.value);
    this.productForm.reset();
    this.showProgressBar = false;
    this.showSecondInputs = false; // Reinicia la visibilidad de los inputs

  }


  goBack() {
    this.showSecondInputs = false; // Oculta los ultimos segundos inputs
  }

}

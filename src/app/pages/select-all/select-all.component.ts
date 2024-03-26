import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CategoryProps } from '../../category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-all',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CheckboxModule, CommonModule],
  templateUrl: './select-all.component.html',
  styleUrl: './select-all.component.scss'
})
export class SelectAllComponent {

  categoryList: CategoryProps[] = [
    {
      label: "Category 1",
      value: "category1"
    },
    {
      label: "Category 2",
      value: "category2"
    },
    {
      label: "Category 3",
      value: "category3"
    }
  ]
  myForm = this.fb.group({
    nomina: [null, [Validators.required, Validators.pattern(/^\d{4,7}$/)]],
    selectedCategory: [[] as CategoryProps[], Validators.required]
    
  });
  constructor(private fb: FormBuilder) { }
  validateInput(input: string) {
    const control = this.myForm.get(input);

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
      if (control.errors['maxlength']) {
        return true; // El campo es demasiado grande y ha sido tocado
      }
    }

    return false; // No hay errores de validación o el control no ha sido tocado
  }

  // changeCheckBox(){
  //   console.log(this.myForm.controls.selectedCategory);

  // }
  changeCheckBox() {
    console.log(this.myForm.value.selectedCategory);
  }
  selectAll() {
    this.myForm.controls.selectedCategory.setValue(this.categoryList);

  }

  deselectAll() {
    this.myForm.controls.selectedCategory.setValue([]);

  }

  saveCategory() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

}

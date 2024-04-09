import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  progress: number = 0;
  showProgressBar = false;

  activeCategories: any[] = [];
  constructor(private theForm: FormBuilder, private category: CategoryService) {
    this.categoryForm.valueChanges.subscribe(() => {
      this.showProgressBar = true;
    });

    this.getActiveCategories();
    this.category.getActiveCategoriesObservable().subscribe(() => {
      this.getActiveCategories();
    });
  }

  categoryForm: FormGroup = this.theForm.group({
    title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
  });



  validateInput(input: string) {
    const control = this.categoryForm.get(input);

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
        return true; // El campo es demasiado largo y ha sido tocado
      }
    }

    return false; // No hay errores de validación o el control no ha sido tocado
  }

  updateProgress() {
    const totalFields = 1;
    const completedFields = Object.values(this.categoryForm.controls).filter(control => control.valid).length;
    this.progress = (completedFields / totalFields) * 100;
  }


  saveCategory() {
    if (this.categoryForm.valid) {
      const formData = new FormData();
      formData.append('title', this.categoryForm.get('title')?.value);
      this.category.addCategory(formData).subscribe({
        next: (response: any) => {
          console.log('IT WORKS!');
          this.category.activeCategoriesSubject.next();
        },
        error: (error: any) => {
          console.log(error);

        }
      });
      this.categoryForm.reset();
      this.showProgressBar = false;
    }
  }

  getActiveCategories() {
    this.category.listOfActiveCategories().subscribe({
      next: (response: any) => {
        this.activeCategories = response;
        console.log(this.activeCategories);

      },
      error: (error: any) => {
        console.log(error.error);
      }
    });

  }



  archiveCategory(id: number) {
    this.category.archiveCategoryById(id).subscribe({
      next: (response: any) => {
        console.log('GOOD!');
        this.category.activeCategoriesSubject.next();
      },
      error: (error: any) => {
        console.log(error);

      }
    });
  }

}

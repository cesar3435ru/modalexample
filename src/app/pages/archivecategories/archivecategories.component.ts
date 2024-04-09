import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivecategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archivecategories.component.html',
  styleUrl: './archivecategories.component.scss'
})
export class ArchivecategoriesComponent {

  archiveCategories: any[] = [];
  constructor(private category: CategoryService) {
    this.getArchiveCategories();
    this.category.getArchiveCategoriesObservable().subscribe(() => {
      this.getArchiveCategories();
    });
  }



  getArchiveCategories() {
    this.category.listOfArchiveCategories().subscribe({
      next: (response: any) => {
        this.archiveCategories = response;
        console.log(this.archiveCategories);

      },
      error: (error: any) => {
        console.log(error.error);
      }
    });

  }



  activeCategory(id: number) {
    this.category.activeCategoryById(id).subscribe({
      next: (response: any) => {
        console.log('GOOD!');
        this.archiveCategories = this.archiveCategories.filter(cat => cat.id !== id); // Filter out archived category
        this.category.archiveCategoriesSubject.next();
        this.category.activeCategoriesSubject.next();
      },
      error: (error: any) => {
        console.log(error);

      }
    });
  }

}

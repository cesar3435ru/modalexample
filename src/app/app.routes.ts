import { Routes } from '@angular/router';
import { ModalComponent } from './pages/modal/modal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectAllComponent } from './pages/select-all/select-all.component';
import { MultipleComponent } from './pages/multiple/multiple.component';
import { ArraysComponent } from './pages/arrays/arrays.component';
import { DinamicCheckboxesComponent } from './pages/dinamic-checkboxes/dinamic-checkboxes.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ArchivecategoriesComponent } from './pages/archivecategories/archivecategories.component';

export const routes: Routes = [
    {
        path: '', // Ruta por defecto
        redirectTo: 'modal',
        pathMatch: 'full',
    },
    {
        path: 'modal',
        component: ModalComponent
    },
    {
        path: 'checkbox',
        component: CheckboxComponent
    },
    {
        path: 'category',
        component: SelectAllComponent
    },

    {
        path: 'multiple', //Es el unico que se acopla a mis necesidades
        component: MultipleComponent
    },
    {
        path: 'arrays', //Es el unico que se acopla a mis necesidades
        component: ArraysComponent
    },
    {
        path: 'magic', //Es el unico que se acopla a mis necesidades
        component: DinamicCheckboxesComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'archivecategories',
        component: ArchivecategoriesComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },

];

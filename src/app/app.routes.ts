import { Routes } from '@angular/router';
import { ModalComponent } from './pages/modal/modal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectAllComponent } from './pages/select-all/select-all.component';
import { MultipleComponent } from './pages/multiple/multiple.component';

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
        path: '**',
        component: NotFoundComponent
    },

];

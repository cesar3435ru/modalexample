import { Routes } from '@angular/router';
import { ModalComponent } from './pages/modal/modal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
        path: '**',
        component: NotFoundComponent
    },

];

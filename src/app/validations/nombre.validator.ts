import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validardDesc(ctrl: AbstractControl): ValidationErrors | null {
    const desc = ctrl?.get('descripcion')?.value;

    if (desc && desc.length <= 20) {
        return { 'minLength': { message: 'La descripción debe tener al menos 20 caracteres' } };
    }

    return null;
}

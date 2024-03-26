import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
interface Modulo {
  id: number;
  descripcion: string;
}

interface DataInfo {
  [key: string]: Modulo[];
}
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  constructor(private theForm: FormBuilder) {

  }

  // dataInfo =
  //   {
  //     "ROLES": [
  //       {
  //         "id": 1,
  //         "descripcion": "AGREGAR ROL"
  //       },
  //       {
  //         "id": 2,
  //         "descripcion": "VER ROLES"
  //       },
  //       {
  //         "id": 3,
  //         "descripcion": "EDITAR ROL"
  //       },
  //       {
  //         "id": 4,
  //         "descripcion": "BORRAR ROL"
  //       }
  //     ],
  //     "DEPARTAMENTOS": [
  //       {
  //         "id": 5,
  //         "descripcion": "AGREGAR DEPTO"
  //       },
  //       {
  //         "id": 6,
  //         "descripcion": "VER DEPTOS"
  //       },
  //       {
  //         "id": 7,
  //         "descripcion": "EDITAR DEPTO"
  //       },
  //       {
  //         "id": 8,
  //         "descripcion": "BORRAR DEPTO"
  //       }
  //     ]
  //   }
  dataInfo: DataInfo = {
    "ROLES": [
      {
        "id": 1,
        "descripcion": "AGREGAR ROL"
      },
      {
        "id": 2,
        "descripcion": "VER ROLES"
      },
      {
        "id": 3,
        "descripcion": "EDITAR ROL"
      },
      {
        "id": 4,
        "descripcion": "BORRAR ROL"
      }
    ],
    "DEPARTAMENTOS": [
      {
        "id": 5,
        "descripcion": "AGREGAR DEPTO"
      },
      {
        "id": 6,
        "descripcion": "VER DEPTOS"
      },
      {
        "id": 7,
        "descripcion": "EDITAR DEPTO"
      },
      {
        "id": 8,
        "descripcion": "BORRAR DEPTO"
      }
    ]
  };

  permisosForm: FormGroup = this.theForm.group({
    nomina: [null, [Validators.required, Validators.pattern(/^\d{4,7}$/)]],
    // operacion_id: [null, Validators.required],

  });

  validateInput(input: string) {
    const control = this.permisosForm.get(input);

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



  // Arreglo para almacenar los IDs de las operaciones seleccionadas
  operacionesSeleccionadas: number[] = [];

  toggleOperacion(operacionId: number) {
    // Verificar si el ID de la operación está en el arreglo, si está lo eliminamos, de lo contrario lo agregamos
    const index = this.operacionesSeleccionadas.indexOf(operacionId);
    if (index === -1) {
      this.operacionesSeleccionadas.push(operacionId);
    } else {
      this.operacionesSeleccionadas.splice(index, 1);
    }
  }

  savePermisos() {
    if (this.permisosForm.valid) {
      console.log('Valores del formulario:', this.permisosForm.value);
      console.log('Operaciones seleccionadas:', this.operacionesSeleccionadas);

      // Aquí puedes enviar los valores al servidor o realizar otras acciones necesarias
      this.permisosForm.reset();
      this.operacionesSeleccionadas = []; // Limpiamos el arreglo después de guardar
    }
  }

  onChangeData($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked);
  }

  marcarTodos() {
    Object.keys(this.dataInfo).forEach(moduloKey => {
      const modulo = this.dataInfo[moduloKey];
      modulo.forEach((operacion: Modulo) => {
        const operacionId = operacion.id;
        const index = this.operacionesSeleccionadas.indexOf(operacionId);
        if (index === -1) {
          this.operacionesSeleccionadas.push(operacionId);
        }
      });
    });
  }
  


}

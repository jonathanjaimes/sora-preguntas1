import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { JugadorComponent } from "./jugador/jugador.component";
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
    },
    {
        path: 'jugador',
        component: JugadorComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
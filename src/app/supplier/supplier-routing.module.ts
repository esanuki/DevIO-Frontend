import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsSupplierComponent } from "./details-supplier/details-supplier.component";
import { EditSupplierComponent } from "./edit-supplier/edit-supplier.component";
import { ListSupplierComponent } from "./list-supplier/list-supplier.component";
import { NewSupplierComponent } from "./new-supplier/new-supplier.component";
import { RemoveSupplierComponent } from "./remove-supplier/remove-supplier.component";
import { SupplierGuard } from "./services/supplier.guard";
import { SupplierResolve } from "./services/supplier.resolve";
import { SupplierComponent } from "./supplier.component";

export const SupplierRoutes: Routes = [
    {
        path: '',
        component: SupplierComponent,
        children: [
            {
                path: 'new-supplier',
                component: NewSupplierComponent,
                canActivate: [SupplierGuard],
                canDeactivate: [SupplierGuard],
                data: [{claim: {nome: 'Fornecedor', valor: 'Adicionar'}}]
            },
            {
                path: 'edit-supplier/:id',
                component: EditSupplierComponent,
                canActivate: [SupplierGuard],
                data: [{claim: {nome: 'Fornecedor', valor: 'Atualizar'}}],
                resolve: {
                    supplier: SupplierResolve
                }
            },
            {
                path: 'remove-supplier/:id',
                component: RemoveSupplierComponent,
                canActivate: [SupplierGuard],
                data: [{claim: {nome: 'Fornecedor', valor: 'Excluir'}}],
                resolve: {
                    supplier: SupplierResolve
                }
            },
            {
                path: 'details-supplier/:id',
                component: DetailsSupplierComponent,
                canActivate: [SupplierGuard],
                data: [{claim: {nome: 'Fornecedor', valor: 'Visualizar'}}],
                resolve: {
                    supplier: SupplierResolve
                }
            },
            {
                path: 'list-supplier',
                component: ListSupplierComponent,
                canActivate: [SupplierGuard],
                canDeactivate: [SupplierGuard],
                data: [{claim: {nome: 'Fornecedor', valor: 'Visualizar'}}]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(SupplierRoutes)],
    exports: [RouterModule]
})
export class SupplierRoutingModule {}
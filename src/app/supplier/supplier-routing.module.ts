import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsSupplierComponent } from "./details-supplier/details-supplier.component";
import { EditSupplierComponent } from "./edit-supplier/edit-supplier.component";
import { ListSupplierComponent } from "./list-supplier/list-supplier.component";
import { NewSupplierComponent } from "./new-supplier/new-supplier.component";
import { RemoveSupplierComponent } from "./remove-supplier/remove-supplier.component";
import { SupplierComponent } from "./supplier.component";

export const SupplierRoutes: Routes = [
    {
        path: '',
        component: SupplierComponent,
        children: [
            {
                path: 'new-supplier',
                component: NewSupplierComponent
            },
            {
                path: 'edit-supplier',
                component: EditSupplierComponent
            },
            {
                path: 'remove-supplier',
                component: RemoveSupplierComponent
            },
            {
                path: 'details-supplier',
                component: DetailsSupplierComponent
            },
            {
                path: 'list-supplier',
                component: ListSupplierComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(SupplierRoutes)],
    exports: [RouterModule]
})
export class SupplierRoutingModule {}
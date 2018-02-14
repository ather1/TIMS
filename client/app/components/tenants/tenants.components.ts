import {Component} from '@angular/core';
import {TenantService} from '../../services/tenant.service';
import {Tenant} from '../../../Tenant';

@Component({
  moduleId: module.id,
  selector: 'tenants',
  templateUrl: 'tenants.component.html'
})

export class TenantsComponent { 
    tenants: Tenant[];
    title: string;
    
    constructor(private tenantService:TenantService){
        this.tenantService.getTenants()
            .subscribe(tenants => {
                this.tenants = tenants;
            });
    }
    
    addTenant(event){
        event.preventDefault();
        var newTenant = {
            title: this.title,

            isActive: false
        }
        
        this.tenantService.addTenant(newTenant)
            .subscribe(Tenant => {
                this.tenants.push(Tenant);
                this.title = '';
            });
    }
    
    // deleteTenant(id){
    //     var tasks = this.tenants;
        
    //     this.tenantService.deleteTenant(id).subscribe(data => {
    //         if(data.n == 1){
    //             for(var i = 0;i < tasks.length;i++){
    //                 if(this.tenants[i]._id == id){
    //                     tenants.splice(i, 1);
    //                 }
    //             }
    //         }
    //     });
    // }

    updateStatus(tenant){
        var _tenant = {
            _id:tenant._id,
            title: tenant.title,
            isDone: !tenant.isActive
        };

        this.tenantService.updateStatus(_tenant).subscribe(data => {
            tenant.isDone = !tenant.isDone;
        });
    }
}

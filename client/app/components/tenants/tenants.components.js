"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tenant_service_1 = require('../../services/tenant.service');
var TenantsComponent = (function () {
    function TenantsComponent(tenantService) {
        var _this = this;
        this.tenantService = tenantService;
        this.tenantService.getTenants()
            .subscribe(function (tenants) {
            _this.tenants = tenants;
        });
    }
    TenantsComponent.prototype.addTenant = function (event) {
        var _this = this;
        event.preventDefault();
        var newTenant = {
            title: this.title,
            isActive: false
        };
        this.tenantService.addTenant(newTenant)
            .subscribe(function (Tenant) {
            _this.tenants.push(Tenant);
            _this.title = '';
        });
    };
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
    TenantsComponent.prototype.updateStatus = function (tenant) {
        var _tenant = {
            _id: tenant._id,
            title: tenant.title,
            isDone: !tenant.isActive
        };
        this.tenantService.updateStatus(_tenant).subscribe(function (data) {
            tenant.isDone = !tenant.isDone;
        });
    };
    TenantsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tenants',
            templateUrl: 'tenants.component.html'
        }), 
        __metadata('design:paramtypes', [tenant_service_1.TenantService])
    ], TenantsComponent);
    return TenantsComponent;
}());
exports.TenantsComponent = TenantsComponent;
//# sourceMappingURL=tenants.components.js.map
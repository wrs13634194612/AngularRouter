import { Routes } from '@angular/router';
import { FirstComponent } from './routing/first/first.component';
import { RoutingComponent } from './routing/routing.component';
import { SecondComponent } from './routing/second/second.component';


import {LifeCycleComponent} from './life-cycle/life-cycle.component';
import {DetectComponent} from './life-cycle/detect/detect.component';
import {DrillingToolComponent} from './life-cycle/drilling-tool/drilling-tool.component';
import {RepairComponent} from './life-cycle/repair/repair.component';
import {ScrapComponent} from './life-cycle/scrap/scrap.component';



import {AssetSystemComponent} from './asset-system/asset-system.component';
import {AssetManagementComponent} from './asset-system/asset-management/asset-management.component';
import {AssetTransferComponent} from './asset-system/asset-transfer/asset-transfer.component';
import {InWellInspectionComponent} from './asset-system/in-well-inspection/in-well-inspection.component';

import {InboundManagementComponent} from './asset-system/inbound-management/inbound-management.component';
import {InventoryManagementComponent} from './asset-system/inventory-management/inventory-management.component';
import {RecycleManagementComponent} from './asset-system/recycle-management/recycle-management.component';
import {SalesManagementComponent} from './asset-system/sales-management/sales-management.component';

import {ScrapManagementComponent} from './asset-system/scrap-management/scrap-management.component';
import {WarehouseManagementComponent} from './asset-system/warehouse-management/warehouse-management.component';
import {WellSupplyCirculationComponent} from './asset-system/well-supply-circulation/well-supply-circulation.component';
import {WellTeamManagementComponent} from './asset-system/well-team-management/well-team-management.component';


import {SystemSettingsComponent} from './system-settings/system-settings.component';
import {AlterSettingComponent} from './system-settings/alter-setting/alter-setting.component';
import {ClassifyManagementComponent} from './system-settings/classify-management/classify-management.component';

import {InspectionItemsComponent} from './system-settings/inspection-items/inspection-items.component';
import {LevelSettingComponent} from './system-settings/level-setting/level-setting.component';
import {MaintenanceItemsComponent} from './system-settings/maintenance-items/maintenance-items.component';


import {ProcessConfigurationComponent} from './system-settings/process-configuration/process-configuration.component';

import {ProjectDepartmentSettingsComponent} from './system-settings/project-department-settings/project-department-settings.component';


import {ToolComponent} from './tool/tool.component';
import {SwaggerComponent} from './tool/swagger/swagger.component';


import {SystemComponent} from './system/system.component';
import {UserComponent} from './system/user/user.component';
import {RoleComponent} from './system/role/role.component';
import {MenuComponent} from './system/menu/menu.component';

import {DeptComponent} from './system/dept/dept.component';

import {NoticeComponent} from './system/notice/notice.component';

export const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
    ],
  },
  {
    path: 'system',
    component: SystemComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'role', component: RoleComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'dept', component: DeptComponent },
      { path: 'notice', component: NoticeComponent },
    ],
  },
  {
    path: 'tool',
    component: ToolComponent,
    children: [
      { path: 'swagger', component: SwaggerComponent },
    ],
  },
  {
    path: 'systemSettings',
    component: SystemSettingsComponent,
    children: [
      { path: 'inspectionItems', component: InspectionItemsComponent },
      { path: 'maintenanceItems', component: MaintenanceItemsComponent },
      { path: 'processConfiguration', component: ProcessConfigurationComponent },
      { path: 'classifyManagement', component: ClassifyManagementComponent },
      { path: 'alterSetting', component: AlterSettingComponent },
      { path: 'levelSetting', component: LevelSettingComponent },
      { path: 'projectDepartmentSettings', component: ProjectDepartmentSettingsComponent },
    ],
  },
  {
    path: 'assetSystem',
    component: AssetSystemComponent,
    children: [
      { path: 'assetManagement', component: AssetManagementComponent },
      { path: 'inboundManagement', component: AssetTransferComponent },
      { path: 'wellSupplyCirculation', component: InWellInspectionComponent },
      { path: 'inWellInspection', component: InboundManagementComponent },
      { path: 'recycleManagement', component: InventoryManagementComponent },
      { path: 'warehouseManagement', component: RecycleManagementComponent },
      { path: 'assetTransfer', component: SalesManagementComponent },
      { path: 'salesManagement', component: ScrapManagementComponent },
      { path: 'wellTeamManagement', component: WarehouseManagementComponent },
      { path: 'inventoryManagement', component: WellSupplyCirculationComponent },
      { path: 'scrapManagement', component: WellTeamManagementComponent },
    ],
  },
  {
    path: 'lifeCycle',
    component: LifeCycleComponent,
    children: [
      { path: 'drillingTool', component: DrillingToolComponent },
      { path: 'detect', component: DetectComponent },
      { path: 'repair', component: RepairComponent },
      { path: 'scrap', component: ScrapComponent },
    ],
  },
  { path: '', redirectTo: '/routing/first', pathMatch: 'full' },
];

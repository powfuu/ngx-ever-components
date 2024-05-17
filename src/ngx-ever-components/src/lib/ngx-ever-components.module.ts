import { NgModule } from '@angular/core';
import { EbuttonComponent } from './ebutton/ebutton.component';
import { EflexComponent } from './eflex/eflex.component';
import { EcardComponent } from './ecard/ecard.component';
import { EmodalComponent } from './emodal/emodal.component';
import { EitemComponent } from './eitem/eitem.component';
import { EbadgeComponent } from './ebadge/ebadge.component';
import { EcontentComponent } from './econtent/econtent.component';
import { EsearchComponent } from './esearch/esearch.component';
import { FormsModule } from '@angular/forms';
import { EinputComponent } from './einput/einput.component';
import { EtooltipComponent } from './etooltip/etooltip.component';
import { EtoastComponent } from './etoast/etoast.component';
import { CommonModule } from '@angular/common';
import { EloadingComponent } from './eloading/eloading.component';
import { SidesheetComponent } from './sidesheet/sidesheet.component';
import { VersionComponent } from './version/version.component';
import { DialogComponent } from './dialog/dialog.component';
import { ItemNavigatorComponent } from './item-navigator/item-navigator.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    EbuttonComponent,
    EflexComponent,
    EcardComponent,
    EmodalComponent,
    EitemComponent,
    EbadgeComponent,
    EcontentComponent,
    EsearchComponent,
    EinputComponent,
    EtooltipComponent,
    EtoastComponent,
    EloadingComponent,
    SidesheetComponent,
    VersionComponent,
    DialogComponent,
    ItemNavigatorComponent,
    DropdownComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    EbuttonComponent,
    EflexComponent,
    EcardComponent,
    EmodalComponent,
    EitemComponent,
    EbadgeComponent,
    EcontentComponent,
    EsearchComponent,
    EinputComponent,
    EtooltipComponent,
    EtoastComponent,
    EloadingComponent,
  ],
})
export class NgxEverComponentsModule {}

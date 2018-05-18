import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CreateComponentComponent } from './create-component/create-component.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  {path: '', component: TabsComponent},
  {path: 'new-character', component: CreateComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    TabsComponent,
    CreateComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

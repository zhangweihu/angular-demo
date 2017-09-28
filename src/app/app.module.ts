import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
  declarations: [    // 视图层
    AppComponent,
    HeroDetailComponent   // declarations数组包含应用中属于该模块的组件、管道和指令的列表
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

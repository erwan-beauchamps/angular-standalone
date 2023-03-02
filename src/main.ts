import { AppRoutingModule } from './app/app-routing.module';
import { CounterService } from './app/counter.service';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule)
  ]
});


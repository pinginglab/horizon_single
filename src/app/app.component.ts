import {Component, NgZone} from '@angular/core';
import {Settings} from './app.settings.model';
import {AppSettings} from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  title = 'horizon';

  constructor(public appSettings: AppSettings, zone: NgZone) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(){}
}

import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Transifex_Demo';

  constructor(private translationService: TranslationService) {
    translationService.init({
    token: '1/3a66db073fc2251edddf5dcd4f57d56a0e5572ee',
});
  }

  async ngOnInit() {
    const resp = await this.translationService.getLanguages();
    console.log("resp",resp)
    // await this.translationService.setCurrentLocale('el');
  }
}

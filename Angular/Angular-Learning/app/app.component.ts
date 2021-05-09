//import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'Angular-learning';
  favourite_movie = 'Lord of the Rings';
}

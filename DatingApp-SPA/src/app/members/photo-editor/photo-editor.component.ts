import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_model/photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css'],
})
export class PhotoEditorComponent implements OnInit {
  environment = environment;
  @Input() photos: Photo[];

  constructor() {}

  ngOnInit() {}
}

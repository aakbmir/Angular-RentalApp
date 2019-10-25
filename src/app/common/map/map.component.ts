import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  @Input() location: string;
  isPositionError: boolean = false;
  lat: any;
  lng: any;

  constructor(private mapService: MapService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  mapReadyhandler() {
    let currentLocation = this.location;
    if (Math.round(Math.random() * 10) > 5) {
      currentLocation = "asds";
    }
    console.log(currentLocation);
    this.mapService.getGeoLocation(currentLocation).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
      });
  }
}

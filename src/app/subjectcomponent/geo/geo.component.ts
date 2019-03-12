import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {

  public lat:any;
  public lng:any;
  
  public map: any = { lat: 51.678418, lng: 7.809007 };

  constructor() { 
  
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  
  }

  ngOnInit() {
  }

}

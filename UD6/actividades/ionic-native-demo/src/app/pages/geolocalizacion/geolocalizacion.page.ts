import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { addIcons } from 'ionicons';
import { locationOutline } from 'ionicons/icons';
import * as L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png',
});

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonText,
  ],
})
export class GeolocalizacionPage {
  lat: number | null = null;
  lon: number | null = null;
  error: string | null = null;
  private map: L.Map | null = null;

  constructor() {
    addIcons({ locationOutline });
  }

  async obtenerPosicion() {
    try {
      await Geolocation.requestPermissions();
      const pos = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
      this.error = null;
      this.initMap(this.lat, this.lon);
    } catch (e: any) {
      // Fallback para web
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            this.lat = pos.coords.latitude;
            this.lon = pos.coords.longitude;
            this.error = null;
            this.initMap(this.lat!, this.lon!);
          },
          (err) => {
            this.error = err.message;
          },
        );
      } else {
        this.error = 'Geolocalización no disponible';
      }
    }
  }

  private initMap(lat: number, lon: number) {
    setTimeout(() => {
      if (this.map) {
        this.map.remove();
      }
      this.map = L.map('map').setView([lat, lon], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);
      L.marker([lat, lon])
        .addTo(this.map)
        .bindPopup('📍 Estoy aquí')
        .openPopup();

      setTimeout(() => {
        this.map!.invalidateSize();
      }, 200);
    }, 600);
  }
}

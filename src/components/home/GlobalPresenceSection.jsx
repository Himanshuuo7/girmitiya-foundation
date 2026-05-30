import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Globe2, MapPin, Users } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { globalPresence } from '../../data/siteData';
import Button from '../common/Button';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

const countryCoordinates = {
  'India': [20.5937, 78.9629],
  'Fiji': [-17.7134, 178.0650],
  'Mauritius': [-20.3484, 57.5522],
  'South Africa': [-30.5595, 22.9375],
  'Suriname': [3.9193, -56.0278],
  'Trinidad & Tobago': [10.6918, -61.2225],
  'Guyana': [4.8604, -58.9302],
  'Canada': [56.1304, -106.3468],
  'United Kingdom': [55.3781, -3.4360],
  'Europe': [48.5260, 15.2551]
};

export default function GlobalPresenceSection() {
  const [activeCountry, setActiveCountry] = useState(globalPresence[0]);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const layersGroupRef = useRef(L.layerGroup());

  // Initialize map once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [20.0, 10.0],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 6,
      zoomControl: false,
      scrollWheelZoom: false
    });

    // Add CartoDB Voyager tiles (warm cream map)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Zoom control at top right
    L.control.zoom({ position: 'topright' }).addTo(map);

    mapRef.current = map;
    layersGroupRef.current.addTo(map);

    // Cleanup
    return () => {
      map.remove();
    };
  }, []);

  // Update markers and lines whenever activeCountry changes
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear old markers/lines
    layersGroupRef.current.clearLayers();

    const indiaLatLng = countryCoordinates['India'];

    globalPresence.forEach((country) => {
      const coords = countryCoordinates[country.country];
      if (!coords) return;

      const isActive = activeCountry.country === country.country;

      // Pulse custom marker using HTML/CSS
      const markerHtml = `
        <div class="relative flex items-center justify-center cursor-pointer">
          <span class="absolute inline-flex h-8 w-8 rounded-full ${isActive ? 'bg-[#7f1d1d]/35 animate-ping' : 'bg-[#d97706]/15'}"></span>
          <span class="absolute inline-flex h-6 w-6 rounded-full ${isActive ? 'bg-[#7f1d1d]/25' : 'bg-[#d97706]/10'}"></span>
          <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-white ${isActive ? 'bg-[#7f1d1d] scale-125' : 'bg-[#d97706]'} text-white shadow-md transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </div>
      `;

      const marker = L.marker(coords, {
        icon: L.divIcon({
          className: `custom-diaspora-marker-${country.country.replace(/\s+/g, '-')}`,
          html: markerHtml,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })
      }).addTo(layersGroupRef.current);

      marker.bindTooltip(`
        <div style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: bold; color: ${isActive ? '#7f1d1d' : '#5f3b24'}; border-radius: 8px;">
          ${country.flag} ${country.country}
        </div>
      `, {
        direction: 'top',
        offset: [0, -10],
        opacity: 0.95
      });

      marker.on('click', () => {
        setActiveCountry(country);
      });

      // Dotted polyline migration route from India
      if (country.country !== 'India') {
        L.polyline([indiaLatLng, coords], {
          color: isActive ? '#7f1d1d' : '#d97706',
          weight: isActive ? 2.5 : 1.5,
          dashArray: isActive ? '3, 4' : '6, 8',
          opacity: isActive ? 0.95 : 0.45
        }).addTo(layersGroupRef.current);
      }
    });

    // Fly smoothly to active country
    const activeCoords = countryCoordinates[activeCountry.country];
    if (activeCoords) {
      // Zoom levels: central hubs zoom slightly out, isolated islands zoom in
      const zoomLevel = activeCountry.country === 'India' || activeCountry.country === 'Europe' || activeCountry.country === 'Canada' ? 3 : 4;
      mapRef.current.flyTo(activeCoords, zoomLevel, {
        animate: true,
        duration: 1.4
      });
    }
  }, [activeCountry]);

  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Girmitiya Around the World"
          title="Connecting descendants, preserving heritage, and celebrating cultural identity across continents."
          text="A living map of communities, memory, and cultural exchange shaped by migration, family histories, and shared responsibility."
        />

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/12 bg-white/40 p-4 shadow-premium sm:p-6 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.04),_transparent_38%)]" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-primary/12 shadow-inner" style={{ minHeight: '32rem', height: '100%' }}>
              <div ref={mapContainerRef} className="absolute inset-0 h-full w-full" style={{ zIndex: 1 }} />
              
              {/* Custom Legend Overlay */}
              <div className="absolute bottom-4 left-4 z-[1000] rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-md backdrop-blur max-w-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Map Legend</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-earth">
                    <span className="h-3.5 w-3.5 rounded-full bg-[#7f1d1d] border border-white inline-block"></span>
                    <span>Active Diaspora Hub</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-earth">
                    <span className="h-3.5 w-3.5 rounded-full bg-[#d97706] border border-white inline-block"></span>
                    <span>Diaspora Community Presence</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-earth">
                    <span className="h-0 border-t-2 border-dashed border-[#d97706] w-6 inline-block"></span>
                    <span>Ancestral Connection Route</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(95,59,36,0.95),rgba(23,17,12,0.99))] p-7 text-light shadow-premium border border-primary/20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-light/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron">
                <Globe2 size={14} /> Active Region
              </span>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-light/10 text-3xl">
                  {activeCountry.flag}
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-light">{activeCountry.country}</h3>
                  <p className="text-sm uppercase tracking-[0.26em] text-light/50">Community presence</p>
                </div>
              </div>
              <p className="mt-5 text-[18px] leading-[1.8] text-light/90">{activeCountry.description}</p>

              <div className="mt-6 grid gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron">Presence</p>
                  <p className="mt-2 leading-7 text-light/85">{activeCountry.presence}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron">Activities</p>
                  <p className="mt-2 leading-7 text-light/85">{activeCountry.activities}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron">Cultural programs</p>
                  <p className="mt-2 leading-7 text-light/85">{activeCountry.programs}</p>
                </div>
              </div>
            </div>
            <Button to={activeCountry.learnMore} variant="secondary" className="mt-8 self-start bg-white hover:bg-saffron hover:text-white" icon={ArrowRight}>
              Learn More
            </Button>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {globalPresence.map((country) => {
            const isActive = activeCountry.country === country.country;
            return (
              <Card 
                key={country.country} 
                className={`group h-full transition-all duration-300 ${isActive ? 'bg-[#fffcf9]/95 border-primary/45 shadow-premium scale-[1.02]' : 'bg-white/60 hover:bg-white/80'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-3xl transition duration-300 ${isActive ? 'bg-primary/20 scale-105' : 'bg-primary/10'}`}>
                    {country.flag}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary">{country.country}</h3>
                    <p className="mt-2 text-sm leading-6 text-earth/80">{country.description}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-earth/80 border-t border-primary/5 pt-4">
                  <p className="flex gap-2"><Users size={16} className="mt-0.5 shrink-0 text-primary" /> {country.presence}</p>
                  <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" /> {country.activities}</p>
                </div>
                <button 
                  onClick={() => setActiveCountry(country)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-saffron transition-colors"
                >
                  <span>Select Region</span>
                  <ArrowRight size={14} />
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
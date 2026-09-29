import React from "react";
import "./AccreditationPartners.css";

// 1. Government & Official Tourism Board Accreditations (Row 1)
const governmentLogos = [
  { name: "Ministry of Tourism" },
  { name: "Incredible India" },
  { name: "NIDHI" },
  { name: "Trek Tamilnadu" },
  { name: "Thailand" },
  { name: "Indonesia" },
  { name: "Bali" },
  { name: "Vietnam" },
  { name: "Laos" },
  { name: "Cambodia" },
  { name: "Singapore" },
  { name: "Malaysia" },
  { name: "Nepal" },
  { name: "Sri Lanka" },
  { name: "Maldives" },
  { name: "Mauritius" },
  { name: "Seychelles" },
  { name: "Fiji" },
  { name: "Cook Islands" },
  { name: "Australia" },
  { name: "New Zealand" },
  { name: "Dubai" },
  { name: "Saudi Arabia" },
  { name: "Armenia" },
  { name: "Azerbaijan" },
  { name: "Georgia" },
  { name: "Kazakhstan" },
  { name: "Uzbekistan" }
];

// 2. Commercial Brand Partners: Airlines, Hotels, Cruise & Booking (Row 2)
const brandLogos = [
  { name: "IndiGo" },
  { name: "Air India" },
  { name: "Air India Express" },
  { name: "Akasa Air" },
  { name: "SpiceJet" },
  { name: "Fly91" },
  { name: "Emirates" },
  { name: "Etihad Airways" },
  { name: "Qatar Airways" },
  { name: "Scoot" },
  { name: "Thai Airways" },
  { name: "Singapore Airlines" },
  { name: "Malaysia Airlines" },
  { name: "SriLankan Airlines" },
  { name: "AirAsia" },
  { name: "Cordelia Cruises" },
  { name: "Wonderla" },
  { name: "Taj Hotels" },
  { name: "The Oberoi Group" },
  { name: "ITC Hotels" },
  { name: "The Leela Palaces" },
  { name: "Marriott International" },
  { name: "Hyatt Hotels" },
  { name: "Hilton" },
  { name: "Accor" },
  { name: "Radisson Hotel" },
  { name: "Novotel" },
  { name: "Bloom Hotels" },
  { name: "Bookmark Resorts" },
  { name: "CGH Earth" },
  { name: "Daiwik Hotels" },
  { name: "jüSTa Hotels & Resorts" },
  { name: "Marigold Regency" },
  { name: "OYO" },
  { name: "Poppys Hotel" },
  { name: "Praveg" },
  { name: "Sterling Holiday Resorts" },
  { name: "The Residency" },
  { name: "MakeMyTrip" },
  { name: "RedBus" }
];

const filenameMapping = {
  "Ministry of Tourism": "Ministry_of_Tourism_India.png",
  "Incredible India": "INCREDIBLE INDIA BLACK(1).png",
  "NIDHI": "logo.png",
  "Trek Tamilnadu": "logo (4).png",
  "Thailand": "tourismthailand-logo.png",
  "Indonesia": "logo-wonderful-indonesia-warna (1).png",
  "Bali": "logo (2).png",
  "Vietnam": "vietnam logo-bw.png",
  "Laos": "Lao-Simply-Beautiful-.png",
  "Cambodia": "Cambodia Logo.png",
  "Singapore": "stb-logo.png",
  "Malaysia": "logo (4)_1.png",
  "Nepal": "brand-logo.png",
  "Sri Lanka": "sri-lanka.png",
  "Maldives": "logo (6).png",
  "Mauritius": "logo-grey.png",
  "Seychelles": "tourism-seychelles-logo-with-tagline-full-colour-rgb-735px@72ppi-300x222.png",
  "Fiji": "Fiji Logo.png",
  "Cook Islands": "custom-web_header_logo-zsoht0us.png",
  "Australia": "aus-logo-menu.png",
  "New Zealand": "tnz-footer-logo.png",
  "Dubai": "Dubai Logo.png",
  "Saudi Arabia": "saudi logo.png",
  "Armenia": "Armenia Logo.png",
  "Azerbaijan": "Azerbaijan Logo.png",
  "Georgia": "Georgia Logo.png",
  "Kazakhstan": "Kazakhstan Travel Logo.png",
  "Uzbekistan": "Uzbekistan White Logo.png",
  "IndiGo": "IndiGo.png",
  "Air India": "AIR INDIA LOGO(1).png",
  "Air India Express": "Air India Express Logo.png",
  "Akasa Air": "akasa_air_tag_line_color.png",
  "SpiceJet": "SpiceJet-Logo.png",
  "Fly91": "FLY91 Logo.png",
  "Emirates": "Emirates-Logo-1999.png",
  "Etihad Airways": "latest-etihad-logo.png",
  "Qatar Airways": "Qatar_Airways_Logo.png",
  "Scoot": "SCOOT.png",
  "Thai Airways": "THAI-logo-4-1.png",
  "Singapore Airlines": "SINGAPORE AIRLINES LOGO.png",
  "Malaysia Airlines": "Malaysia-Airlines-Logo.png",
  "SriLankan Airlines": "SriLankan_Airlines-Logo.wine.png",
  "AirAsia": "AirAsia-Logo-2009.png",
  "Cordelia Cruises": "Cordelia Final Logo-01.png",
  "Wonderla": "Wonderla Logo.png",
  "Taj Hotels": "Taj Logo.png",
  "The Oberoi Group": "OHR.png",
  "ITC Hotels": "ITC_Hotels_logo.png",
  "The Leela Palaces": "The_Leela_Palaces,_Hotels_and_Resorts_logo.png",
  "Marriott International": "Marriott Logo.png",
  "Hyatt Hotels": "Hyatt Hotels Symbol.png",
  "Hilton": "Hilton Worldwide Logo.png",
  "Accor": "Accor Logo.png",
  "Radisson Hotel": "120px-Radisson_logo.png",
  "Novotel": "Novotel-Logo.png",
  "Bloom Hotels": "Bloom Hotels Logo.png",
  "Bookmark Resorts": "Hero Logo Variant - Colours - Logo Horizontal Pink_0.png",
  "CGH Earth": "main_logo_color.png",
  "Daiwik Hotels": "DaiwikLogo-1.png",
  "jüSTa Hotels & Resorts": "juSTa-Brand-Logo-transparent-2560x1396-1.png",
  "Marigold Regency": "Marigold Regency Logo.png",
  "OYO": "OYO_Rooms_(logo).png",
  "Poppys Hotel": "poppys-logo-white.png",
  "Praveg": "logo (4)_1.png",
  "Sterling Holiday Resorts": "sterling-logo.png",
  "The Residency": "Residency-logo_hnj8yn.png",
  "MakeMyTrip": "MakeMyTrip Logo.png",
  "RedBus": "RedBus Logo.png"
};

const logoModules = import.meta.glob("../assets/logo/*.{png,jpg,jpeg,svg,webp}", { eager: true });

function mapLogosWithImages(list) {
  return list.map(item => {
    const filename = filenameMapping[item.name];
    if (filename) {
      const matchedKey = Object.keys(logoModules).find(key => key.endsWith(`/${filename}`));
      if (matchedKey && logoModules[matchedKey]) {
        return { ...item, image: logoModules[matchedKey].default };
      }
    }
    return { ...item, image: "" };
  });
}

const row1 = mapLogosWithImages(governmentLogos);
const row2 = mapLogosWithImages(brandLogos);

// Duplicate rows for continuous scrolling marquee
const scrollingRow1 = [...row1, ...row1];
const scrollingRow2 = [...row2, ...row2];

function PartnerLogo({ logo }) {
  return (
    <div className="tripist-partner-logo" aria-label={logo.name}>
      {logo.image ? (
        <img src={logo.image} alt={logo.name} loading="lazy" draggable="false" />
      ) : (
        <span className="tripist-partner-placeholder">{logo.name}</span>
      )}
    </div>
  );
}

export default function AccreditationPartners() {
  return (
    <section className="tripist-accreditation" aria-labelledby="tripist-accreditation-title">
      <div className="tripist-accreditation-container">
        <div className="tripist-accreditation-heading">
          <span className="tripist-accreditation-eyebrow">Trusted Connections</span>
          <h2 id="tripist-accreditation-title">Our Accreditations &amp; Partners</h2>
          <p>
            Proudly connected with trusted travel organisations, industry networks,
            and partners that help us deliver reliable travel experiences.
          </p>
        </div>
      </div>

      {/* Row 1: Top Carousel - Government & Official Boards (Left Scroll) */}
      <div className="tripist-logo-marquee mb-3">
        <div className="tripist-logo-track scroll-left">
          {scrollingRow1.map((logo, index) => (
            <PartnerLogo key={`gov-${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Row 2: Lower Carousel - Brand Partners (Right Scroll) */}
      <div className="tripist-logo-marquee">
        <div className="tripist-logo-track scroll-right">
          {scrollingRow2.map((logo, index) => (
            <PartnerLogo key={`brand-${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>

      <div className="tripist-accreditation-container">
        <div className="tripist-accreditation-note">
          <span className="tripist-accreditation-line" />
          <span>Building journeys with trusted travel partners</span>
          <span className="tripist-accreditation-line" />
        </div>
      </div>
    </section>
  );
}
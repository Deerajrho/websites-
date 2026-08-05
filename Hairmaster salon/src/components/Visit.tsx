import { MapPin, MessageCircle } from "lucide-react";
import salonInterior from "@/assets/hero/salon-interior.png";

const WHATSAPP_URL = "https://wa.me/917020170857";
const INSTAGRAM_URL = "https://www.instagram.com/hairmaster_salon_ngp?igsh=MWZvNW1xeTRoMnhjYg==";
const MAPS_URL = "https://maps.app.goo.gl/K2zmGXY6KtFPqtvq6?g_st=ac";

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit__inner">
        <p className="eyebrow eyebrow--light">Book a visit</p>
        <h2 className="section-title section-title--light">Ready for your next look?</h2>
        <p className="visit__lede">
          Tell us what you're starting with and where you want to go. We'll build the rest around
          it.
        </p>
        <div className="visit__actions">
          <a href="tel:+917020170857" className="btn btn--foil">
            Call +91 70201 70857
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost-light"
          >
            <MessageCircle className="btn__icon" aria-hidden="true" />
            WhatsApp us
          </a>
        </div>

        <div className="visit__body">
          <div className="visit__details">
            <div>
              <h3>Hours</h3>
              <p>
                Open every day
                <br />
                8am – 10:30pm
              </p>
            </div>
            <div>
              <h3>Studio</h3>
              <p>
                Hair Master, Besa Rd
                <br />
                Opposite Shreekant Electronics, above Apollo Pharmacy
                <br />
                Besa, Nagpur, Besa Pipla, Maharashtra 440037
              </p>
            </div>
            <div>
              <h3>Follow</h3>
              <p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="visit__map"
            aria-label="Open Hair Master's location in Google Maps"
          >
            <img src={salonInterior} alt="Hair Master salon" className="visit__map-img" />
            <span className="visit__map-pin">
              <MapPin className="visit__map-pin-icon" aria-hidden="true" strokeWidth={1.75} />
            </span>
            <span className="visit__map-caption">
              <strong>View on Google Maps</strong>
              Hair Master · Besa, Nagpur
            </span>
          </a>
        </div>
      </div>
      <div className="level-strip level-strip--footer" aria-hidden="true" />
    </section>
  );
}

// src/components/LocalSolarTime.jsx
import React, { useEffect, useState } from "react";

export default function LocalSolarTime() {
  const [coords, setCoords] = useState(null);
  const [place, setPlace] = useState(null);
  const [solarTime, setSolarTime] = useState("--:--:--");
  const [offsetStr, setOffsetStr] = useState("");
  const [sunTimes, setSunTimes] = useState(null);

  // 1️⃣ Get latitude & longitude
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        });
      },
      err => {
        console.error(err);
        alert("Unable to retrieve your location.");
      }
    );
  }, []);

  // 2️⃣ Reverse–geocode city/country
  useEffect(() => {
    if (!coords) return;
    async function fetchPlace() {
      try {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.lon}&localityLanguage=en`
        );
        const data = await res.json();
        setPlace({
          city: data.city || data.locality || data.principalSubdivision || "Unknown",
          country: data.countryName || "Unknown"
        });
      } catch (e) {
        console.error(e);
      }
    }
    fetchPlace();
  }, [coords]);

  // 3️⃣ Fetch sunrise & sunset times
  useEffect(() => {
    if (!coords) return;
    async function fetchSunTimes() {
      try {
        // Sunrise-Sunset API gives UTC times in JSON
        const res = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lon}&formatted=0`
        );
        const data = await res.json();
        if (data.status === "OK") {
          const sunriseUTC = new Date(data.results.sunrise);
          const sunsetUTC = new Date(data.results.sunset);
          // Convert to user's local clock time string
          setSunTimes({
            sunrise: sunriseUTC.toLocaleTimeString(),
            sunset: sunsetUTC.toLocaleTimeString()
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchSunTimes();
  }, [coords]);

  // 4️⃣ Calculate Local Solar Time every second
  useEffect(() => {
    if (!coords) return;

    const offsetMinutes = coords.lon * 4; // 4 minutes per degree
    const offsetMs = offsetMinutes * 60 * 1000;

    // Format offset for display
    const sign = offsetMs >= 0 ? "+" : "-";
    const absMs = Math.abs(offsetMs);
    const offH = Math.floor(absMs / (1000 * 3600));
    const offM = Math.floor((absMs % (1000 * 3600)) / (60 * 1000));
    setOffsetStr(`${sign}${offH}h ${offM}m`);

    const timer = setInterval(() => {
      const utcNow = new Date();
      const lstInstant = new Date(utcNow.getTime() + offsetMs);

      // Use UTC getters on adjusted instant to get solar clock
      const hh = String(lstInstant.getUTCHours()).padStart(2, "0");
      const mm = String(lstInstant.getUTCMinutes()).padStart(2, "0");
      const ss = String(lstInstant.getUTCSeconds()).padStart(2, "0");
      setSolarTime(`${hh}:${mm}:${ss}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [coords]);

  return (
    <div style={{
      maxWidth: 420,
      margin: "24px auto",
      padding: 20,
      borderRadius: 12,
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ marginBottom: 8 }}>🌞 Local Solar Time</h2>

      {!coords && <p>Fetching coordinates…</p>}

      {coords && (
        <>
          <p>
            Latitude: <strong>{coords.lat.toFixed(5)}°</strong><br />
            Longitude: <strong>{coords.lon.toFixed(5)}°</strong>
          </p>

          {place && (
            <p>
              Location: <strong>{place.city}, {place.country}</strong>
            </p>
          )}

          <p>Solar Offset: <strong>{offsetStr}</strong> from UTC</p>

          <h3 style={{ fontSize: "2rem", marginTop: 16 }}>{solarTime}</h3>

          {sunTimes && (
            <div style={{ marginTop: 20 }}>
              <p>🌅 Sunrise: <strong>{sunTimes.sunrise}</strong></p>
              <p>🌇 Sunset: <strong>{sunTimes.sunset}</strong></p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

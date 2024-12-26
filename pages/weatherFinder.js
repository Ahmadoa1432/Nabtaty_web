import { useState } from 'react';
import Link from 'next/link';

const WeatherFinder = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
        Weather Finder
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '250px',
            color: '#555'
          }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Get Weather
        </button>
        <Link href="/HomePage">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to Homepage
          </button>
        </Link>
      </div>
      {error && <p style={{ color: 'red', fontSize: '1.2rem' }}>{error}</p>}
      {weather && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ color: '#333', fontSize: '1.8rem' }}>
            Weather in {weather.name}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            🌡️ Temperature: {weather.main.temp}°C
          </p>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            🌤️ Condition: {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherFinder;

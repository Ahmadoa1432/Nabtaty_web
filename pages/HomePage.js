import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #4CAF50, #2e7d32)',
          color: 'white',
          padding: '80px 20px',
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: 'bold' }}>
          Welcome to Nabtaty
        </h1>
        <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
          Diagnose plant diseases with the power of Artificial Intelligence.
        </p>
        <Link href="/weatherFinder">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              color: '#4CAF50',
              background: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              marginTop: '20px',
            }}
          >
            Go to Weather Finder API
          </button>
        </Link>
      </section>

      {/* this is the About Section Ahmad :) */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '800px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#333' }}>About us</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8rem', color: '#555' }}>
            We are student From King Abdulaziz University, And this is our senior project app
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '800px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#333' }}>About the app</h2>
        </div>
        <Link href="/about">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              color: '#000',
              background: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              marginTop: '20px',
            }}
          >
            Go to About the app Page
          </button>
        </Link>
      </section>

      {/* Features Section :D */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Key Features</h2>
        <ul
          style={{
            fontSize: '1.2rem',
            listStyleType: 'none',
            padding: '0',
            margin: '20px auto',
            maxWidth: '600px',
            color: '#000',
          }}
        >
          <li style={{ marginBottom: '10px' }}>🌱 AI-powered plant disease detection</li>
          <li style={{ marginBottom: '10px' }}>📋 Detailed treatment recommendations</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;

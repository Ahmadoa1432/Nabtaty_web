import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #6fbf73, #28a745)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to our CPIT-405 Project</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
        Please click the button to enter the HomePage.
      </p>

      <div style={{ textAlign: 'center' }}>
        <Link
          href="/HomePage"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            margin: '10px',
            fontSize: '1.2rem',
            color: '#fff',
            backgroundColor: '#6c757d',
            textDecoration: 'none',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
        >
          Go to the HomePage
        </Link>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #6fbf73, #28a745)',
          color: 'white',
          textAlign: 'center',
          padding: '50px 20px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Plant Health AI</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Transforming agriculture with AI-driven solutions for plant disease diagnosis.
        </p>
      </section>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f8f9fa',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '800px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Our Mission</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8rem', color: '#555' }}>
            Plant diseases are a significant issue worldwide, costing millions due to production loss and inefficient treatments. Our project
            focuses on identifying and addressing the symptoms of diseases in date palm trees specific to the Kingdom of Saudi Arabia. Using
            a deep learning model, we aim to assist farmers by diagnosing diseases, recommending solutions, and preventing future occurrences.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8rem', color: '#555', marginTop: '20px' }}>
            We are Team Green Bit, dedicated to providing innovative solutions for diagnosing plant diseases to enhance agricultural efficiency.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '800px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}>Our Tools</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', margin: '10px' }}>
              <Image src="/rn.png" alt="React Native" width={100} height={100} />
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>React Native</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
              <Image src="/f.png" alt="Figma" width={100} height={100} />
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>Figma</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
              <Image src="/tns.png" alt="TensorFlow" width={100} height={100} />
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>TensorFlow</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
              <Image src="/vs.png" alt="Visual Studio" width={100} height={100} />
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>Visual Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

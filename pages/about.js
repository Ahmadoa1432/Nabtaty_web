import Image from 'next/image';


export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <p
        style={{
          fontSize: '1rem',
          lineHeight: '1.5rem',
          color: '#333',
          textAlign: 'center',
          width: '90%',
          height: '90%',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto', 
        }}
      >         
      Plant diseases are a big issue worldwide. Their costs can raise up to millions by affecting production size and the cost of their treatment can be inefficient and costly. 
      The world is researching different methods to mitigate such issues, 
      but their research and solutions are curated to the environment of their plants. Our project will focus on mitigating the issue of 
      identifying the symptoms of date palm trees in our country, Kingdom of Saudi Arabia.
    Will use a deep learning model trained specifically in identifying palm trees infections and diseases. Doing so will allow us to curate our model to specifically helping date farmers with issues in their harvest. Our project should provide information on how to mitigate such an issue and prevent it from happening again. Information about disease type, occurrence and recommendations for the next steps will be provided to our clients
        <br></br> <br></br>
    We are team Green Bit. Our project aims provide better solution for diagonising plant diseases symptoms.

      </p>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '90%',
          height: '90%',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{fontSize: '1rem',
          lineHeight: '2rem',
          color: '#333',
          textAlign: 'center',
          backgroundColor: '#fff',}}>Our Tools:</p>
        {/* Optimized Image using Next.js's Image Component */}
        <Image
          src="/rn.png" // Ensure this image is in the public folder
          alt="Example description"
          width={150}
          height={100}
          style={{ borderRadius: '0px', marginBottom: '20px' }}
        />
        <Image
          src="/f.png" // Ensure this image is in the public folder
          alt="Example description"
          width={150}
          height={100}
          style={{ borderRadius: '0px', marginBottom: '20px' }}
        />
        <Image
          src="/tns.png" // Ensure this image is in the public folder
          alt="Example description"
          width={150}
          height={100}
          style={{ borderRadius: '0px', marginBottom: '20px' }}
        />
        <Image
          src="/vs.png" // Ensure this image is in the public folder
          alt="Example description"
          width={150}
          height={100}
          style={{ borderRadius: '0px', marginBottom: '20px' }}
        />
        </div>
        </div>
    </div>
    </div>
  );
}

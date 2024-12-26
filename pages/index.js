import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif',textAlign: "center" }}>
      <h1>Welcome to My Next.js App!</h1>
      <p>
        This is the Home page. From here, you can navigate to other pages.
      </p>
      <p>
        <Link href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go to the About Page
        </Link>
      </p>
      <br></br>
      <p><Link href="/weatherFinder" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go to the Weather Finder Page
        </Link>
        </p>
    </div>
  );
}

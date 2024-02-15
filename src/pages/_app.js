// Impor dependensi yang diperlukan
import '../styles/globals.css';
import Nav from "@/components/Nav"; // Ganti dengan path yang benar jika diperlukan
import Footer from '../components/Footer'; // Ganti dengan path yang benar jika diperlukan
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Pastikan path ini benar

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* GoogleAnalytics komponen dengan GA Tracking ID yang benar */}
      <GoogleAnalytics ga_id="G-94L5HHJXSH" />

      {/* Komponen navigasi */}
      <Nav />

      {/* Komponen utama yang sedang diakses */}
      <Component {...pageProps} />

      {/* Footer aplikasi */}
      <Footer />
    </>
  );
}

export default MyApp;

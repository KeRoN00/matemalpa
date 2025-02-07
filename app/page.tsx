export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Nawigacja */}
      <nav className="fixed top-0 w-full bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-slate-800">MATE@</div>
          <div className="flex gap-4">
            <a href="#home" className="text-lg">Home</a>
            <a href="#about" className="text-lg">About</a>
            <a href="#contact" className="text-lg">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Główna część */}
      <main className="flex flex-col items-center justify-center flex-grow mt-16 min-h-screen">
        <div className="text-6xl font-extrabold font-ranchers">Witaj w aplikacji</div>
        <div className="flex items-center justify-center gap-4 mt-4">
          STRONA GŁÓWNA
        </div>
      </main>
      
      {/* Testowy komponent */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl">Testowy komponent</div>
        <p className="mt-4">Przewiń w dół, aby sprawdzić, czy nawigacja pozostaje na górze.</p>
      </div>
      
      {/* Stopka */}
      <footer className="w-full bg-gray-800 text-white p-4">
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

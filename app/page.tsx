export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      {/* Nawigacja */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-5 shadow-lg backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-slate-800">MATE@</div>
          <div className="flex gap-4">
            <a href="#home" className="text-lg text-slate-800">Home</a>
            <a href="#about" className="text-lg">About</a>
            <a href="#contact" className="text-lg">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Główna część */}
      <main className=" -z-20 linear-gradient flex flex-col items-center justify-center h-screen w-full flex-grow  bg-gradient-to-r from-yellow-500 to-orange-500 relative">
        <div className=" -z-10 bg-gradient-to-br from-white to-transparent comic-background rotate-6 h-[3000px] w-[5000px] absolute bg-fixed bg-repeat" />          <div className="  min-h-screen w-full items-right content-center justify-center">
        <div className="flex items-center justify-center text-6xl font-extrabold font-ranchers ">Witaj w aplikacji</div>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          STRONA GŁÓWNA
        </div>
        </div>
      </main>
      
      {/* Testowy komponent */}
      <div className="z-100 flex flex-col items-center justify-center h-screen bg-black w-full">
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

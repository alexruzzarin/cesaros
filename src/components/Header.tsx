import { useEffect, useState } from 'react';

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toogleShowMenu = () => {
    setShowMenu((state) => {
      return !state;
    });
  };

  useEffect(() => {
    const scrollListener = () => {
      setIsOnTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <header
        className={`flex items-center justify-between flex-wrap p-6 fixed top-0 inset-x-0 z-100 transition duration-500 ease-in-out ${
          !isOnTop || showMenu
            ? 'bg-white shadow-md'
            : 'text-white text-shadow-md'
        }`}
      >
        <h1>
          <img
            className={`block transition-all duration-500 ease-in-out ${
              isOnTop ? '-my-1 h-24' : '-my-5 h-12'
            }`}
            src="/images/logo.png"
            alt="Césaros Buffet"
          />
        </h1>
        <nav className="hidden md:block">
          <a className="ml-6" href="#">
            Localização
          </a>
          <a className="ml-6" href="#">
            Horarios
          </a>
          <a className="ml-6" href="#">
            Eventos
          </a>
          <a className="ml-6" href="#">
            Cardápio
          </a>
          <a className="ml-6" href="#">
            Avaliações
          </a>
          <a className="ml-6" href="#">
            Contato
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          onClick={toogleShowMenu}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>
      <nav
        className={`${
          showMenu ? 'block' : 'hidden'
        } md:hidden fixed top-0 inset-x-0 z-100 mt-24 bg-white`}
      >
        <a href="#">Localização</a>
        <a href="#">Horarios</a>
        <a href="#">Eventos</a>
        <a href="#">Cardápio</a>
        <a href="#">Avaliações</a>
        <a href="#">Contato</a>
      </nav>
    </>
  );
};

export default Header;

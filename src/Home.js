import React from 'react';
import logo from './logo.svg';
import './App.css';

const Home = () => {
  return (
    <div>
      <header className="App-header relative flex h-full w-full overflow-hidden">
        <nav
          className="relative z-20 top-0 right-0 w-full inline-block px-10 py-5 text-2xl text-white bg-transparent bg-opacity-50 rounded-xl">
          <div className="flex justify-between">
            <img src={logo} className="h-20 lg:h-32" alt="logo" />
              <ul className="flex items-center">
                <li className="px-4 py-4">
                  <a className="text-menu--item tracking-widest hover:font-thin" href="#menu">Menu</a>
                </li>
                <li className="px-4 py-4">
                  <a className="text-menu--item tracking-widest hover:font-thin" href="#javascript">Reservasi</a>
                </li>
                <li className="px-4 py-4">
                  <a className="text-menu--item tracking-widest hover:font-thin" href="#javascript">Kontak</a>
                </li>
              </ul>
          </div>
        </nav>
      </header>
      <main className="container mx-auto">
        <section className="py-10">
          <div className="flex flex-wrap md:flex-nowrap p-5">
            <div className="flex items-center justify-center p-5 mx-auto w-full lg:w-1/2">
              <img alt="background" className="object-fill" src="/assets/bg.png" />
            </div>
            <div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
              <h2 className="text-4xl tracking-widest uppercase pb-5" data-scroll>Discover our menu</h2>
              <p className="text-2xl mb-12 p-5" data-scroll>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
                iaculis lectus. In
                lobortis tortor eget venenatis ultrices. Fusce rhoncus tincidunt purus et egestas. Maecenas erat nisl, porta
                nec.</p>
              <button className="px-3 py-4">
                <a
                  className="px-3 py-4 bg-black text-white font-sans uppercase tracking-widest border hover:text-black hover:bg-white hover:border-black transition duration-300"
                  href="#menu">Go to menu</a>
              </button>
            </div>
          </div>
        </section>
        <section id="menu" className="py-10">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
              <img alt="menu" className="h-64 m-5" src="/assets/latte.png" />
              <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">Events</h2>
              <div className="px-20 text-center">
                <p> Maecenas erat nisl, porta
                  nec
                  fringilla in, tincidunt eget sem. Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum rhoncus
                  ipsum,
                  in porta lectus viverra eget
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
              <img alt="menu" className="h-64 m-5" src="/assets/choco.png" />
              <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">Events</h2>
              <div className="px-20 text-center">
                <p> Maecenas erat nisl, porta
                  nec
                  fringilla in, tincidunt eget sem. Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum rhoncus
                  ipsum,
                  in porta lectus viverra eget
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto mt-20">
        <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center lg:justify-between">
          <div className="flex justify-center items-center w-full lg:w-1/4">
            <img alt="Picnic Bistro Logo" className="h-24 md:h-32" src={logo} />
          </div>
          <div className="flex justify-center h-64 w-full lg:w-1/4">
            <ul>
              <li className="font-sans text-2xl font-bold tracking-wide pb-6">SITE MENU</li>
              <li className="pb-1">Meniu</li>
              <li className="pb-1">Rezervari</li>
              <li className="pb-1">Contact</li>
              <li className="pb-1">Politica de utilizare a site-ului</li>
              <li className="pb-1">Politica de cookies</li>
              <li className="pb-1">Informatii GDPR</li>
            </ul>
          </div>
          <div className="flex justify-center h-64 w-full lg:w-1/4">
            <ul className="-ml-20">
              <li className="font-sans text-2xl font-bold tracking-wide pb-4">FIND US</li>
              <li className="font-sans  font-bold text-lg py-2">Adresa :</li>
              <li>Ineu, Bihor, RO</li>
              <li className="font-sans  font-bold text-lg py-2">Phone / Email :</li>
              <li>+40 742 742 642</li>
              <li>info@picnicbistro.ro</li>
            </ul>
          </div>
          <div className="flex justify-center h-64 w-full ml-10 lg:-ml-0 lg:w-1/4">
            <ul>
              <li className="font-sans text-2xl font-bold tracking-wide pb-4">SOCIAL</li>
              <li className="font-sans font-bold text-lg py-2">Find us on social</li>
              <li>instagram • facebook • soundcloud</li>
              <li className="font-sans font-bold text-lg py-2">Leave us a note</li>
              <li>resengo • yelp • tripadvisor</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center pt-20">
          <p className="text-sm">
            Dev by <a href="https://blondelguillau.me">Guillaume Blondel</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

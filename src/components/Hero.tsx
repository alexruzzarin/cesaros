const Hero = () => {
  return (
    <section
      className="bg-fixed w-full h-screen bg-fixed bg-cover bg-center flex justify-center shadow-inner"
      style={{ backgroundImage: 'url("/images/background/bg-02.jpg")' }}
    >
      <div className="my-auto mx-auto">
        <h2 className="text-6xl text-white font-bold uppercase">
          Buffet à quilo
          <br />
          em Caxias do Sul
        </h2>
      </div>
    </section>
  );
};

export default Hero;

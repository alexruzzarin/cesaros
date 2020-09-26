import Header from '../components/Header';
import Hero from '../components/Hero';
import Location from '../components/Location';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Location />
        <section className="h-48">Content</section>
      </main>
    </>
  );
};

export default Index;

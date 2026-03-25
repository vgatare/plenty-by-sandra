import CollectionGrid from '@/components/collections/CollectionGrid';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export const metadata = {
  title: 'Collections | Plenty by Sandra - Umushanana Gowns',
  description: 'Explore our exquisite collection of Umushanana gowns for bridal, ceremonies, and custom occasions. Handcrafted in Kigali, Rwanda.',
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-plum overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-plum-light via-plum to-black opacity-80" />
        <div className="grain-overlay" />

        <div className="relative z-10 text-center section-padding">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
            Discover
          </p>
          <h1 className="text-display text-4xl md:text-7xl lg:text-8xl text-ivory mb-6">
            Our Collections
          </h1>
          <p className="text-ivory/70 text-lg md:text-xl font-body max-w-xl mx-auto">
            Each piece tells a story of Rwandan heritage, crafted with love and
            precision for your most special moments.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <CollectionGrid />

      {/* CTA Section */}
      <section className="bg-plum text-ivory section-padding py-20 text-center">
        <div className="grain-overlay" />
        <div className="relative z-10">
          <h2 className="text-section text-3xl md:text-5xl mb-6">
            Looking for Something Unique?
          </h2>
          <p className="text-ivory/70 font-body max-w-xl mx-auto mb-8">
            We create bespoke Umushanana pieces tailored to your vision.
            Let&apos;s bring your dream gown to life.
          </p>
          <a
            href="/custom-orders"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-plum font-medium text-sm hover:bg-gold-light transition-colors duration-300"
          >
            Start a Custom Order
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}

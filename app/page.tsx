import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import CollectionStrip from '@/components/home/CollectionStrip';
import SandraTouch from '@/components/home/SandraTouch';
import InstagramGrid from '@/components/home/InstagramGrid';
import Testimonials from '@/components/home/Testimonials';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CollectionStrip />
      <SandraTouch />
      <InstagramGrid />
      <Testimonials />
      <WhatsAppButton />
    </>
  );
}

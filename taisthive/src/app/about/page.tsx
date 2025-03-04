import { HeadBanner, FootBanner } from '@/components';
import { nigerian_meal2, tray2 } from '@/assets/images';
import { type JSX } from 'react';

export async function generateMetadata() {
  return {
    title: 'Taisthive | About',
  };
}

export default function AboutPage(): JSX.Element {
  return (
    <article>
      {/* Head Banner */}
      <HeadBanner
        displayImage={nigerian_meal2}
        message="Discover *Our *Story"
      />

      {/* Foot Banner */}
      <FootBanner displayImage={tray2} message="We're here to serve you" />
    </article>
  );
}

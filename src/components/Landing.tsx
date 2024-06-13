import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

interface LandingProps {
  translationsKey: string;
}

const Landing: React.FC<LandingProps> = (
  const t = useTranslations(translationsKey);

  return (
    <div className="font-montserrat relative min-h-screen w-full overflow-auto">
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        src={t('backgroundVideoUrl')}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          {/* Glass Panel */}
          <div className="m-10 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md">
            <h1 className="animate-fade-in-bottom mb-4 text-4xl font-bold md:text-4xl">
              {t('splash_heading_one')}
            </h1>
            <h2 className="animate-fade-in-bottom mb-8 text-2xl md:text-4xl">
              {t('splash_heading_one')}
            </h2>

            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_one')}
            </p>
            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_two')}
            </p>

            <a
              href="./contact"
              className="animate-fade-in-bottom rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              <h2 className="animate-fade-in-bottom mb-8 text-2xl md:text-4xl">
                {t('heading_two')}
              </h2>

              <p>{t('paragraph_three')}</p>
            </a>
            <p>{t('paragraph_four')}</p>
            <p>{t('paragraph_five')}</p>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Image
            src={t('hero_image_url')}
            alt="Dummy Attorney"
            width={400}
            height={400}
            className="mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

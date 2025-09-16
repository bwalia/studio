"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Logo() {
  const [logoSrc, setLogoSrc] = useState('/logo.png');

  useEffect(() => {
    // Append a timestamp to the image URL to bypass the browser's cache.
    setLogoSrc(`/logo.png?t=${new Date().getTime()}`);
  }, []);

  return (
    <Link href="/" className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
      <Image src="/logo-no-bg.png" alt="WorkStation Logo" width={300} height={79} className="text-primary" />
=======
      <Image src={logoSrc} alt="WorkStation Logo" width={32} height={32} className="text-primary" />
>>>>>>> 4c07a30 (logo is not showing correct size it is too tiny fix it to render correct)
=======
      <Image src={logoSrc} alt="WorkStation Logo" width={300} height={79} className="text-primary" />
>>>>>>> 8d6d5e8 (Logo fixed)
      <span className="font-headline text-xl font-bold">WorkStation</span>
    </Link>
  );
}

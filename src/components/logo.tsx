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
      <Image src="/logo-no-bg.png" alt="WorkStation Logo" width={300} height={79} className="text-primary" />
      <span className="font-headline text-xl font-bold">WorkStation</span>
    </Link>
  );
}

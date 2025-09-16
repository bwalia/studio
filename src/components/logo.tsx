import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="WorkStation Logo" width={24} height={24} className="text-primary" />
      <span className="font-headline text-xl font-bold">WorkStation</span>
    </Link>
  );
}

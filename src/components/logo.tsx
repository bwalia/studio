import { CodeXml } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <CodeXml className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold">DevRel Hub</span>
    </Link>
  );
}

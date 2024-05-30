import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container my-4">
      <nav className="flex flex-row justify-between p-6 bg-primary rounded-lg">
        <Button variant="outline">Back</Button>
        <div className="flex flex-row gap-2">
          <Button
            variant="link"
            className="text-primary-foreground">
            <Link
              href="https://www.google.com/"
              target="_blank">
              LinkedIn
            </Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground">
            <Link
              href="https://www.google.com/"
              target="_blank">
              Github
            </Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground">
            <Link
              href="https://www.google.com/"
              target="_blank">
              hhsi@hugodehsign.com
            </Link>
          </Button>
        </div>
      </nav>
    </footer>
  );
}

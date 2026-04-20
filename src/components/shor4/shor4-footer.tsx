import Link from "next/link";
import { Shor4Logo } from "./shor4-logo";

export function Shor4Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Shor4Logo size={32} />
            <div>
              <span className="block text-sm font-bold tracking-widest text-white">
                SHOR4
              </span>
              <span className="block text-[10px] tracking-[0.15em] text-white/30 uppercase">
                by Magneticmark LLC
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
            <Link href="#products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#market" className="hover:text-white transition-colors">
              Market
            </Link>
            <Link href="#sponsorship" className="hover:text-white transition-colors">
              Sponsorship
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact */}
          <div className="text-right text-xs text-white/20 space-y-1">
            <div>jr@shor4.com</div>
            <div>www.shor4.com</div>
          </div>
        </div>

        {/* XL wordmark */}
        <div className="mt-16 select-none overflow-hidden">
          <div
            aria-hidden
            className="whitespace-nowrap text-[18vw] font-bold leading-[0.85] tracking-[-0.06em] text-white/[0.04] sm:text-[16vw] lg:text-[14vw]"
          >
            SHOR<span className="text-amber-400/30">4</span>.
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row font-mono text-xs text-white/20">
          <span>© {new Date().getFullYear()} Magneticmark LLC · All rights reserved</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/40">Privacy</Link>
            <Link href="#" className="hover:text-white/40">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

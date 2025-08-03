import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer
      className="border-t border-blue-100 py-10 mt-16"
      style={{
        background: 'linear-gradient(90deg, #4285C5 0%, #34A853 100%)'
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/images/logo_white.png"
            alt="EduLives Logo"
            width={200}
            height={50}
            className="object-contain w-70"
            priority
          />
        </div>
        <p className="text-white text-center text-sm">
          Empowering educational institutions with simple, effective management.
        </p>
        <div className="flex gap-6 mt-2">
          <Link href="#" className="text-white hover:text-blue-100 text-sm">Privacy Policy</Link>
          <Link href="#" className="text-white hover:text-blue-100 text-sm">Terms</Link>
          <Link href="#" className="text-white hover:text-blue-100 text-sm">Contact</Link>
        </div>
        <p className="text-white text-xs mt-4">
          © {new Date().getFullYear()} EduLives. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

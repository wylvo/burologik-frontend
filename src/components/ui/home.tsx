import NewsletterSubscribeForm from "@/components/ui/newsletter-subscribe-form"
import { Link } from "@tanstack/react-router"

function Home() {
  return (
    <div className="bg-[url('https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/cover_image.jpg')] bg-cover bg-no-repeat bg-center h-64 flex min-h-svh flex-col items-center justify-center gap-12 p-6 md:p-10">
      <Link to="/" className="flex items-center self-start">
        <img
          src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/branding/logo/burologik_logo_verbose.jpg"
          alt="urologik logo"
          className="w-32 h-12 object-cover"
        />
      </Link>
      <div className="flex flex-col gap-4 font-libre-baskerville text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white text-center">
        <p>Libérez votre potentiel,</p>
        <p>un réglage à la fois</p>
      </div>
      <div className="w-full max-w-sm">
        <NewsletterSubscribeForm />
      </div>
    </div>
  )
}

export default Home

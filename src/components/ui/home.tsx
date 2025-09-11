import NewsletterSubscribeForm from "@/features/newsletter/components/newsletter-subscribe-form"
import { Link } from "@tanstack/react-router"
import { Card } from "./shadcn/card"

function Home() {
  return (
    <div className="p-8 lg:p-4 min-h-svh bg-[url('https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/cover_image.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-4">
        <Card className="flex items-center md:self-start p-4 py-0.5 lg:py-2  border border-brand-50/20 bg-brand-50/35 backdrop-blur-sm rounded-sm ">
          <Link to="/">
            <img
              src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/branding/logo/burologik_logo_verbose.jpg"
              alt="urologik logo"
              className="w-24 h-10 object-cover lg:w-32 lg:h-12"
            />
          </Link>
        </Card>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-4 font-libre-baskerville text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
            <p className="text-2xl text-white/95">À venir bientôt</p>
            <hr className="w-[80%] sm:w-[65%] lg:w-[50%]" />
            <h1 className="md:leading-13.5 lg:leading-17.5">
              Libérez votre potentiel,
              <br />
              un réglage à la fois
            </h1>
          </div>
          <div className="w-full max-w-sm">
            <NewsletterSubscribeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

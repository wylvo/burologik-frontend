import NewsletterSubscribeForm from "@/features/newsletter/components/newsletter-subscribe-form"
import { Link } from "@tanstack/react-router"
import { Card } from "./shadcn/card"
import Section from "./section"
import Wrapper from "./wrapper"

function Home() {
  return (
    <>
      <Section className="relative flex items-center justify-center p-16 lg:p-32 min-h-svh bg-[url('https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/cover_image.webp')] bg-cover bg-no-repeat bg-center">
        <Card className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-[2.5%] lg:left-[1.5%] px-4 py-0.5 lg:py-2 border border-b md:order-brand-50/20 bg-brand-50/35 backdrop-blur-sm rounded-sm">
          <Link to="/">
            <img
              src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/branding/logo/burologik_logo_verbose.jpg"
              alt="urologik logo"
              className="w-24 h-10 object-cover lg:w-32 lg:h-12"
            />
          </Link>
        </Card>
        <Wrapper className="space-y-6 lg:space-y-3 text-4xl lg:text-6xl text-white text-center font-libre-baskerville">
          <p className="text-2xl text-white/95">À venir bientôt</p>
          <hr className="w-[80%] lg:w-[50%] mx-auto" />
          <h1 className="lg:leading-17.5">
            Libérez votre potentiel,
            <br />
            un réglage à la fois
          </h1>
        </Wrapper>
      </Section>
      <Section className="bg-brand-50 text-foreground">
        <Wrapper>
          <h2 className="text-2xl font-medium lg:text-4xl mb-8">À Propos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-x-12 gap-y-12 md:gap-y-18">
            <div className="space-y-4 order-1 md:order-1">
              <p>
                L'histoire de Burologik débute en 2021 avec Marc-André qui
                débute un nouveau travail comme gestionnaire des opérations dans
                le milieu de l'ébénisterie.
              </p>
              <p>
                En 2022, il décide d'optimiser son bureau personnel qui est
                inadapté pour lui, offre peu d'espace et de fonction
                ergonomique. Il fait donc des recherches pour s'inspirer et
                découvre que le marché offre des bureaux fabriqués avec du
                bois/mélamine de basse qualité et peu de fonctions ergonomiques
                adaptées pour leurs clients.
              </p>
              <p>
                Étant donné qu'il travaille dans le milieu du bois, il opte pour
                fabriquer son propre bureau et l'adapter pour ses propres
                besoins. Il choisit donc des pattes ergonomiques à manivelle et
                crée le premier bureau Burologik, et l'image pour une idée bien
                plus grande et innovante.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <img
                className="max-h-[350px] w-full rounded-xl object-cover object-[50%_55%]"
                src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/a-propos-1.webp"
                alt="Photo du premier bureau en couleur 2002"
              />
            </div>
            <div className="order-4 md:order-2">
              <img
                className="max-h-[350px] w-full rounded-xl object-cover object-[50%_25%]"
                src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/a-propos-5.webp"
                alt="Photo du premier bureau en couleur 2002"
              />
            </div>
            <div className="space-y-4 order-3 md:order-2">
              <p>
                En 2023, son petit frère et son meilleur ami, séduits par le
                design et la fonctionnalité du premier modèle, lui demandent de
                leur en fabriquer un.
              </p>
              <p>
                C'est ainsi que naissent les deuxième et troisième bureaux
                Burologik. Cette fois équipés de pieds électriques, une avancée
                significative par rapport au premier modèle. Cette intérêt
                marque le début d'une véritable aventure.
              </p>
            </div>
            <div className="space-y-4 order-5 md:order-3">
              <p>
                En 2024, Marc-André suit un cours de lancement d'entreprise,
                complété par un cours de vente. Cette formation l'aide à
                réaliser une étude de marché plus approfondie et construire
                l'image de Burologik.
              </p>
            </div>
            <div className="order-6 md:order-3">
              <img
                className="max-h-[200px] w-full rounded-xl object-cover object-[50%_17%]"
                src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/a-propos-3.webp"
                alt="Photo du premier bureau en couleur 2002"
              />
            </div>
            <div className="order-8 md:order-4">
              <img
                className="max-h-[350px] w-full rounded-xl object-cover"
                src="https://brtegctbbzghofpzzmhv.supabase.co/storage/v1/object/public/pages/home/a-propos-2.webp"
                alt="Photo du premier bureau en couleur 2002"
              />
            </div>
            <div className="space-y-4 order-7 md:order-4">
              <p>Burologik se lance officiellement en 2025.</p>
              <p>
                Notre objectif est d'offrir des bureaux fabriqués localement au
                Canada, durables et adaptés aux besoins de chacun.
              </p>
              <p>
                Nos bureaux sont méticuleusement fabriqué à la main, avec le
                souci du détail et une passion pour la qualité.
              </p>

              <p>
                Nous voulons offrir un bureau qui non seulement remplit sa
                fonction, mais qui devient aussi un travail d'artisanat durable
                dans votre espace.
              </p>
              <p>
                Un bureau Burologik c'est bien plus qu'un poste de travail:
                c'est un engagement envers votre confort, votre style et vos
                ambitions. Dans le futur, nous aimerions proposer plus de
                couleurs et d'accessoires pour permettre une personnalisation
                maximale.s
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section className="bg-gradient-to-b from-[var(--color-brand-50)] to-[var(--color-brand-950)] text-background">
        <Wrapper className="">
          <h2 className="text-2xl font-medium lg:text-4xl mb-16 text-center text-brand-800">
            Abonnez-vous à notre infolettre!
          </h2>
          <div className="w-full max-w-sm mx-auto">
            <NewsletterSubscribeForm />
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

export default Home

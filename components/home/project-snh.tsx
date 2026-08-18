import Image from 'next/image'

export function ProjectSnh() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <Image
          src="/bahamas-island.png"
          alt="Pristine tropical island in The Bahamas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          Vision
        </span>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-balance text-primary-foreground sm:text-5xl">
          Project SNH-INC Bahamas
        </h2>
        <span className="mx-auto mt-6 block h-px w-16 bg-accent" />
        <div className="mt-8 space-y-5 text-left leading-relaxed text-primary-foreground/85 sm:text-center">
          <p>
            Our vision is to build a city composed of modular units that can be
            readily added to or removed from a framework to meet rising demand,
            accommodate the social mobility of owners who wish to upgrade their
            living spaces, and simplify the moving process. Each single modular
            unit is based on a standard 40ft high-cube shipping container.
          </p>
          <p>
            Units can be combined in a cohesive manner to provide the desired
            living space for each owner. All units will be off-grid capable
            through the use of rooftop solar panels or wind turbines, providing
            their own independent water source — and for tract-home models, a
            virtual marketplace enables owners to seek or advertise available
            space in a particular locale.
          </p>
        </div>
      </div>
    </section>
  )
}

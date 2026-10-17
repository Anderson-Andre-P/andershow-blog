import Image from './Image'

const CompanyLogo = ({ logo, company }) => (
  <Image
    src={logo}
    alt={company}
    width="56"
    height="56"
    className="rounded-md border border-zinc-200 dark:border-zinc-700"
  />
)

const ExperienceCard = ({ company, href, logo, role, level, period, highlights, description }) => (
  <li className="group relative my-5 flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
    {href ? (
      <a
        className="shrink-0"
        href={href}
        rel="noreferrer"
        target="_blank"
        aria-label={`${company} website`}
      >
        <CompanyLogo logo={logo} company={company} />
      </a>
    ) : (
      <div className="shrink-0">
        <CompanyLogo logo={logo} company={company} />
      </div>
    )}

    <div className="flex min-w-0 flex-col">
      <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{company}</h3>

      <div className="mt-0.5 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{role}</span>
        <span className="inline-block rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
          {level}
        </span>
      </div>

      <span className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">{period}</span>

      {highlights && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {description?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {paragraph}
        </p>
      ))}
    </div>
  </li>
)

export default ExperienceCard

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900'

// One main action per area (e.g. the resume); everything else uses the secondary style
export const primaryButton = `${base} bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700`

export const secondaryButton = `${base} border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800`

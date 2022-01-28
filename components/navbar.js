import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon, HomeIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-16 w-full items-center justify-between px-8 py-4">
      <div>
        {router.pathname !== '/' && (
          <Link href="/">
            <a>
              <HomeIcon className="h-7 w-7 text-blue-600 dark:text-gray-200" />
            </a>
          </Link>
        )}
      </div>
      <div
        className={`flex items-center justify-center rounded-full border border-blue-600 dark:border-gray-400`}
      >
        <Switch
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={`pointer-events-none relative inline-block h-6 w-6 translate-x-0 transform rounded-full bg-blue-500 shadow ring-0 transition duration-200 ease-in-out dark:translate-x-5 dark:bg-black`}
          >
            <span
              className={`absolute inset-0 flex h-full w-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in dark:opacity-0 dark:duration-100 dark:ease-out`}
              aria-hidden="true"
            >
              <SunIcon className="h-5 w-5 text-yellow-300" />
            </span>
            <span
              className={`absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out dark:opacity-100 dark:duration-200 dark:ease-in`}
              aria-hidden="true"
            >
              <MoonIcon className="h-5 w-5 text-white" />
            </span>
          </span>
        </Switch>
      </div>
    </div>
  )
}

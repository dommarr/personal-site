import Head from 'next/head'
import Navbar from '../components/navbar'

const projects = [
  {
    name: 'AppCity',
    date: '2020 - Present',
    alive: true,
    url: 'https://www.appcity.com/',
    type: 'Professional',
    description: 'A marketplace for business software/apps.',
    built: 'NextJS, Vercel, Supabase, Algolia, Tailwind',
  },
  {
    name: 'Works with Alexa',
    date: '2016 - 2018',
    alive: true,
    url: 'https://workswithalexa.carrd.co/',
    type: 'Professional',
    description: 'UX for smart home on Amazon.com.',
    built: 'JavaScript',
  },
  {
    name: 'Stir Fry',
    date: '2020',
    alive: false,
    url: 'https://trystirfry.webflow.io/',
    type: 'HBS Rock Summer Fellows',
    description:
      'A platform to follow a recipe with friends over video ("virtual kitchen").',
    built: 'Webflow, Zapier, Daily.co',
  },
  {
    name: 'Slate',
    date: '2019',
    alive: false,
    url: 'https://previewer.adalo.com/f1113abf-b172-476b-a73a-1e3f5aa5c289',
    type: 'Side project',
    description:
      'A mobile app to organize events targeting educational institutions/camps.',
    built: 'Adalo',
  },
  {
    name: 'Joyner',
    date: '2019',
    alive: false,
    url: 'https://joyner.carrd.co/',
    type: 'Side project',
    description:
      'A resource for startup joiners. Aggregates startup job listings and opportunities.',
    built: 'Carrd',
  },
  {
    name: 'Drip & Jest',
    date: '2019',
    alive: false,
    url: 'https://www.makerpad.co/stories/dom-marrone-unbundling-youtube-without-code',
    type: 'Side project',
    description:
      'Unbundled YouTube using no-code tools. Drip = YouTube for athletes. Jest = YouTube for comedians.',
    built: 'Glide, Zapier, WayScript',
  },
  {
    name: 'Recs',
    date: '2018',
    alive: false,
    url: 'https://travelrecs.glideapp.io/',
    type: 'Side project',
    description: 'Share and discover travel recs from friends.',
    built: 'Glide',
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-white py-2 dark:from-slate-700 dark:via-slate-800 dark:to-gray-900">
      <Head>
        <title>Portfolio | Dom Marrone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8 w-full text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-6xl font-bold text-transparent dark:from-gray-400 dark:to-gray-50">
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-6 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow-lg dark:border-gray-900 sm:rounded-lg sm:shadow-blue-400/50 dark:sm:shadow-gray-300/50">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-900">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Dates Involved
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
                      >
                        Built with
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, projectIdx) => (
                      <tr
                        key={project.name}
                        className={
                          projectIdx % 2 === 0
                            ? 'bg-white dark:bg-gray-700'
                            : 'bg-gray-50 dark:bg-gray-800'
                        }
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                          <a target="_blank" href={project.url}>
                            {project.name}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-200">
                          {project.date}
                        </td>
                        <td className="whitespace-normal px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-200">
                          {project.type}
                        </td>
                        <td
                          className={`whitespace-nowrap px-6 py-4 text-center text-sm ${
                            project.alive ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {project.alive ? 'Alive' : 'Dead'}
                        </td>
                        <td className="whitespace-normal px-6 py-4 text-left text-sm text-gray-500 dark:text-gray-200">
                          {project.description}
                        </td>
                        <td className="whitespace-normal px-6 py-4 text-left text-sm text-gray-500 dark:text-gray-200">
                          {project.built}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

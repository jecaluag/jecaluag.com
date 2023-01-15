import Link from 'next/link'

const Back = () => (
  <Link href="/">
    <a className="group cursor-pointer select-none flex items-center gap-1 px-4 -mx-4 pb-0 text-xl text-neutral-500 hover:text-neutral-300 focus:text-neutral-300 transform translate-x-0 motion-safe:transition-all duration-moderate-01 hover:-translate-x-2 focus:-translate-x-2">
      <span className="flex-shrink-0 translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span className="ml-1 opacity-[0.01] motion-safe:transition-opacity ease-productive-standard duration-fast-02 group-hover:opacity-100 group-focus:opacity-100 text-sm">
        Back
      </span>
    </a>
  </Link>
)

export default Back
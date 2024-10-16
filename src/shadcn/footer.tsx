import { Link } from 'react-router-dom'

const items = ['PRIVACY POLICY', 'TERMS OF SERVICE', 'SUPPORT']

const ShadcnFooter = () => {
  return (
    <footer className='flex grow-0 w-full h-16 bg-[#f5f7f8] border-t border-t-black justify-center items-center gap-8 '>
      {items.map((item) => (
        <Link key={item} to='#' className='hover:underline'>
          {item}
        </Link>
      ))}
    </footer>
  )
}

export { ShadcnFooter }

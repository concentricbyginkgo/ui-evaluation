import { ShadcnFooter } from './footer'
import { Header } from './header'

const Shadcn = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Header />
      <div className='flex grow w-full bg-[#f5f7f8]'>Content</div>
      <ShadcnFooter />
    </main>
  )
}

export { Shadcn }

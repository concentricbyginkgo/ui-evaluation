import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { ShadcnFooter } from './footer'
import { ShadcnHeader } from './header'
import { ShadcnMainContent } from './main'
import { User, Root } from '@/common/types'

const USER_API_URL = 'https://dummyjson.com/users'

const Shadcn = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(USER_API_URL)
        const data = await resp.json()
        setUsers((data as Root).users)
      } catch (error) {
        toast.error('Error fetching Users', {
          description: (error as Error).message,
        })
      }
    }
    fetchData()
  }, [])

  return (
    <div className='w-screen h-screen flex flex-col'>
      <ShadcnHeader />
      <ShadcnMainContent
        open={drawerOpen}
        setOpen={setDrawerOpen}
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <ShadcnFooter />
      <Toaster position='bottom-left' richColors closeButton toastOptions={{}} />
    </div>
  )
}

export { Shadcn }

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Drawer } from './drawer'
import { User } from '@/common/types'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  users: User[]
  selectedUser: User | null
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>
}

const ShadcnMainContent = ({ open, setOpen, users, selectedUser, setSelectedUser }: Props) => {
  const handleCardClick = (user: User) => {
    setSelectedUser(user)
    setOpen((prev) => !prev)
  }

  return (
    <main className='w-screen flex flex-col bg-[#f5f7f8]'>
      <section className='w-full h-[70px] flex justify-start items-center space-x-2 border-b border-black pl-5 bg-white opaque'>
        <Switch
          className='data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300'
          id='toggle-sheet'
          checked={open}
          onCheckedChange={() => setOpen((prev) => !prev)}
        />
        <Label htmlFor='toggle-sheet'>Open Editor</Label>
      </section>
      <section className='w-full flex flex-col'>
        {users?.map((user) => (
          <Card className='h-28' onClick={() => handleCardClick(user)}>
            <CardContent className='flex justify-start items-center p-0 h-full ml-3 gap-2'>
              <Avatar>
                <AvatarImage src={user.image} />
                <AvatarFallback>
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className='w-28'>
                <p className='font-bold'>{user.birthDate}</p>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
              <div>
                <p className='font-bold'>{user.company.name}</p>
                <p>{user.company.address.address}</p>
                <p>{user.company.department}</p>
                <p>{user.company.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
      <Drawer open={open} setOpen={setOpen} user={selectedUser} />
    </main>
  )
}

export { ShadcnMainContent }

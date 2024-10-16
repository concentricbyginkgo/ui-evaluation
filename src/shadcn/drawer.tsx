import { useState } from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetOverlay,
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { User } from '@/common/types'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: User | null
}

const Drawer = ({ user, open, setOpen }: Props) => {
  const [internalUser, setInternalUser] = useState<Record<string, any>>(user || {})

  const renderByValueType = (key: string, value: unknown) => {
    if (typeof value === 'string') {
      return (
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor={key}>{key}</Label>
          <Input type='text' id={key} value={value} />
        </div>
      )
    } else if (typeof value === 'number') {
      return (
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor={key}>{key}</Label>
          <Input type='number' id={key} value={value} />
        </div>
      )
    }
    return undefined
  }

  return (
    <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <SheetContent
        side='right'
        className='bg-white max-w-xl overflow-y-auto'
        style={{ maxWidth: '33%' }}>
        {user &&
          Object.entries(user).map(([key, val], index) => (
            <div key={index}>{renderByValueType(key, val)}</div>
          ))}
      </SheetContent>
    </Sheet>
  )
}

export { Drawer }

import { Snackbar, Alert, AlertColor } from '@mui/material'
import React, { createContext, useContext } from 'react'

type SnackBarOptions = {
  message: string
  color: AlertColor
}

type SnackBarContextActions = {
  showSnackBar: (options: SnackBarOptions) => void
}

const SnackBarContext = createContext({} as SnackBarContextActions)

interface SnackBarContextProviderProps {
  children: React.ReactNode
}

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>('')
  const [typeColor, setTypeColor] = React.useState<AlertColor>('info')

  const showSnackBar = ({ message, color }: SnackBarOptions) => {
    setMessage(message)
    setTypeColor(color)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setTypeColor('info')
  }

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={typeColor}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  )
}

const useSnackBar = (): SnackBarContextActions => {
  const context = useContext(SnackBarContext)

  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider')
  }

  return context
}

export { SnackBarProvider, useSnackBar }

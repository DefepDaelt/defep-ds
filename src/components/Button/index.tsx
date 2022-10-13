import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ 
  children, asChild
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  
  return (
    <Component
      className={clsx('py-4 px-3 bg-orange-500 rounded font-bold text-white text-sm w-full transition-colors hover:bg-orange-300 focus:ring-2 ring-white')}
    >
      {children}
    </Component>
  )
}
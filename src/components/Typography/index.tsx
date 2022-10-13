import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TypographyProps {
  type?: 'text' | 'header'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Typography({ 
  type = 'text', size = 'md', children, asChild
}: TypographyProps) {
  const Component = asChild ? Slot : (type === 'header') ? 'h2' : 'span'
  
  return (
    <Component
      className={clsx('text-gray-100 font-sans', {
        'text-xs':  type === 'text'   && size === 'sm',
        'text-sm':  type === 'text'   && size === 'md',
        'text-md':  type === 'text'   && size === 'lg',
        'text-lg':  type === 'header' && size === 'sm',
        'text-xl':  type === 'header' && size === 'md',
        'text-2xl': type === 'header' && size === 'lg',
      })}
    >
      {children}
    </Component>
  )
}
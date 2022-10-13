import { InputHTMLAttributes, ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function Root({ children }: TextInputRootProps) {  
  return (
    <div
      className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full h-12 focus-within:ring-2 ring-orange-500'
    >
      {children}
    </div>
  )
}

Root.displayName = 'TextInput.Root'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: TextInputInputProps) {  
  return (
    <input
      className='outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'
      {...props}
    />
  )
}

Input.displayName = 'TextInput.Input'

export interface TextInputIconProps {
  children: ReactNode
}

function Icon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

Icon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root,
  Input,
  Icon
}

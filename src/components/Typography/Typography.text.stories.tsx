import { Meta, StoryObj } from '@storybook/react'

import { Typography, TypographyProps } from './'

export default {
  title: 'Components/Typography/Text',
  component: Typography,
  args: {
    type: 'text',
    size: 'md',
    children: 'Lorem Ipsum.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg',],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TypographyProps>

export const Medium: StoryObj<TypographyProps> = {
  args: {
    size: 'md'
  }
}

export const Small: StoryObj<TypographyProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TypographyProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponents: StoryObj<TypographyProps> = {
  args: {
    size: 'lg',
    asChild: true,
    children: (
      <p
        className='text-gray-400'
      >
        Faça login e comece a usar!
      </p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

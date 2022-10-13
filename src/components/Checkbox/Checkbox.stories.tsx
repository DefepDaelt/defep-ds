import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'

import { Checkbox, CheckboxProps } from './'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Typography size='sm'>
            Lembrar de mim por 30 dias
          </Typography>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

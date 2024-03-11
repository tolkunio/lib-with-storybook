import { ComponentProps } from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import { clsx } from 'clsx'

import s from './Tag.module.scss'

export type TagProps = {
  readonly?: boolean
} & ComponentProps<typeof Toggle.Root>

export const Tag = ({ className, readonly = false, ...rest }: TagProps) => {
  const classNames = {
    tag: clsx(s.tag, className),
  }

  return <Toggle.Root className={classNames.tag} {...rest} />
}

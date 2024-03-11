import type { Meta } from '@storybook/react'
import {Tag} from "./Tag";
import {Slash} from "../../assets/icons";


export default {
  component: Tag,
  title: 'Components/Tag',
} as Meta<typeof Tag>

export const Default = {
  args: {
    children: (
      <>
        <Slash className={'icon'} /> Hashtag
      </>
    ),
  },
}

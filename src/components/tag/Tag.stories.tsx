import type { Meta } from '@storybook/react'
import {Tag} from "./Tag";
import {Slash} from "../../assets/icons";
import {StoryObj} from "@storybook/react";
import {Button} from "../button";


const meta:Meta<typeof Tag>={
  component: Tag,
  title: 'Components/Tag',
}
export default meta
export type Story = StoryObj<typeof Button>
export const Default = {
  args: {
    children: (
      <>
        <Slash className={'icon'} /> Hashtag
      </>
    ),
  },
}


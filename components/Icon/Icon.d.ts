import type { IconName } from './IconName'
import type { IconSize } from './IconSize'
import type { IconColor } from './IconColor'

declare function Icon(props: {
  name: IconName
  className?: string
  size?: IconSize
  helper?: string
  color?: IconColor
  filled?: boolean
  invertedFill?: boolean
  fillSize?: 'default' | 'large' | 'extraLarge'
  badge?: string
}): JSX.Element;

declare const Icons: string[]

declare const IconColors: string[]

export default Icon
export { Icons, IconColors }
export type { IconColor, IconName, IconSize }

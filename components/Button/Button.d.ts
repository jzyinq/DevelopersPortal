import { IconName } from '../Icon/Icon'

type ButtonAppearance =
  | 'default'
  | 'primary'
  | 'destructive'
  | 'destructive-simple'
  | 'constructive'
  | 'simple'
  | 'subdued'
  | 'subdued-inverse'
  | 'subdued-compact'
  | 'rounded'

declare function Button(props: {
  appearance?: ButtonAppearance
  disabled?: boolean
  minimalWidth?: boolean
  fullWidth?: boolean
  noHover?: boolean
  pending?: boolean
  icon?: IconName
  iconRight?: string
  onClick?: Function
  text?: string
  type?: 'button' | 'reset' | 'submit'
  cutText?: boolean
  breakLongContent?: boolean
  setRef?: any
  focused?: boolean
  className?: string
  dataId?: string
  // for tooltip on draggable element
  onMouseEnter?: (event: MouseEvent) => void
  onMouseLeave?: (event: MouseEvent) => void
  onDragEnter?: (event: DragEvent) => void
  active?: boolean
  badge?: string
  size?: 'small' | 'large'
  form?: string
}): JSX.Element

export default Button
export type { ButtonAppearance }

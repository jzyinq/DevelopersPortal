declare function Spinner(props: {
  className?: 'small' | 'medium' | 'large' | 'x-large'
  inverseColor?: boolean
  noMargin?: boolean
  progress?: number
  type?:  'default' | 'centered' | 'fullscreen'
  dataId?: string
}): JSX.Element

export default Spinner

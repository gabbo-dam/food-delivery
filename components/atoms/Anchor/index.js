import Link from 'next/link'
import { StyledAnchor } from './styles'

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      <StyledAnchor {...props}>
        {props.children}
      </StyledAnchor>
    </Link>
  )
}

export default Anchor

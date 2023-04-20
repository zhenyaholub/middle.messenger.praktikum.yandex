import { type IMediator } from '../../types/mediator'
import { type Button } from '../button/button'
import { type Field } from '../field/field'
import { type Link } from '../link/link'
import { type Title } from '../title/title'

export interface FormPropsType {
  title: Title
  fields: Field[]
  topButton: Button
  bottomButton: Link
  mediator: IMediator
}

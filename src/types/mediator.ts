import { type Field } from '../components/field/field'
import { type Block } from '../utils/block'

export interface IMediator {
  fields: Field[]
  notify: (sender: Block, data: unknown) => void
  add: (component: Field[]) => void
}

import { Component } from '@/domain/designer/Component/Component'
import ComponentType from './ComponentType'
export default class Line extends Component {
  readonly type: ComponentType = ComponentType.line
}

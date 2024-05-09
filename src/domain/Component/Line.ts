import { Component } from '@/domain/Component/Component'
import ComponentType from './ComponentType'
export default class Line extends Component {
  readonly type: ComponentType = ComponentType.line
}

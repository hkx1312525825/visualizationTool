import { Component } from '@/domain/Component/Component'
import ComponentType from '../../Component/ComponentType'
import type ComponentConfig from '../../Component/ComponentConfig'
import type { VisConfig } from '../../Component/VisConfig'
import { LineConfig } from './LineConfig'
import type { VisComponentData } from '../../Component/ComponentConfig'
export default class Line extends Component {
  vis: VisConfig | null = null
  readonly type: ComponentType = ComponentType.line

  private _config: LineConfig
  get config(): LineConfig {
    return this._config
  }

  constructor(props: { data: VisComponentData }) {
    super()
    this._config = new LineConfig(props)
  }
}

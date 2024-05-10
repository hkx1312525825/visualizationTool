import ComponentConfig, { type VisComponentData } from '@/domain/Component/ComponentConfig'

export class LineConfig extends ComponentConfig {
  private _data: VisComponentData
  get data() {
    return this._data
  }

  constructor(props: { data: VisComponentData }) {
    super()
    this._data = props.data
  }
}

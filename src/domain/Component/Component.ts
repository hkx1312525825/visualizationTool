import { UUID } from 'uuidjs'
import type ComponentType from './ComponentType'
import type ComponentConfig from './ComponentConfig'
import type { VisConfig } from './VisConfig'

/**
 * 组件基类
 */
export abstract class Component {
  // 组件唯一标识
  id: string = UUID.generate()

  // 组件类型
  abstract type: ComponentType

  // 组件基础配置
  abstract config: ComponentConfig

  abstract vis: VisConfig | null
}

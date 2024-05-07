import { UUID } from 'uuidjs'
import type ComponentType from './ComponentType'

export abstract class Component {
  // 组件名称
  name: string = '组件'

  // 组件唯一标识
  id: string = UUID.generate()

  // 组件位置
  position: { x: number; y: number } = { x: 0, y: 0 }

  // 组件大小
  size: { width: number; height: number } = { width: 100, height: 100 }

  // 组件样式
  style: { [key: string]: any } = {}

  // 组件标题
  title: string = '组件'

  // 组件类型
  abstract type: ComponentType

  // 组件属性
  properties: { [key: string]: any } = {}
}

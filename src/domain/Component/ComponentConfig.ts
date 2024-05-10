export type VisComponentData = Array<VisComponentDataRow>
export type VisComponentDataRow = { [key: string]: string | number | boolean | null | undefined }
/**
 * 组件配置
 */
export default abstract class ComponentConfig {
  // 组件位置
  position: { x: number; y: number } = { x: 0, y: 0 }

  // 组件大小
  size: { width: number; height: number } = { width: 100, height: 100 }

  // 组件样式
  style: { [key: string]: any } = {}

  // 组件标题
  title: string = '组件'

  abstract data: VisComponentData
}

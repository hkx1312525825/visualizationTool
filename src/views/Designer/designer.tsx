import { defineComponent, onMounted, ref } from 'vue'
import classes from './designer.module.less'
import BasicComponent from '@/components/VisComponents/BasicComponent'
import Line from '@/domain/Component/Line'
import DataPanel from './DataPanel/dataPanel'
import VisPanel from './VisPanel/visPanel'

// 设计器
export default defineComponent({
  setup() {
    const comp = ref<Line | null>(null)
    onMounted(() => {
      comp.value = new Line()
    })
    return () => (
      <div class={classes.designer}>
        <div class={classes.header}>
          <div class={classes.headerTitle}>设计器</div>
          <div class={classes.headerAction}>
            <span>导入</span>
            <span>撤销</span>
          </div>
        </div>
        <div class={classes.content}>
          <DataPanel class={classes.dataPanel}></DataPanel>
          {comp.value && (
            <BasicComponent class={classes.visComponent} comp={comp.value}></BasicComponent>
          )}
          <VisPanel class={classes.visPanel}></VisPanel>
        </div>
      </div>
    )
  }
})

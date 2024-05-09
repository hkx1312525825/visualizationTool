import { defineComponent, onMounted, ref } from 'vue'
import classes from './designer.module.less'
import BasicComponent from '@/components/VisComponents/BasicComponent'
import Line from '@/domain/Component/Line'

// 设计器
export default defineComponent({
  setup() {
    const comp = ref<Line | null>(null)
    onMounted(() => {
      comp.value = new Line()
    })
    return () => (
      <div class={classes.designer}>
        <div class={classes.header}>头部工具条</div>
        <div class={classes.content}>
          {comp.value && <BasicComponent comp={comp.value}></BasicComponent>}
        </div>
      </div>
    )
  }
})

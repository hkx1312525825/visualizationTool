import { defineComponent } from 'vue'
import classes from './designer.module.less'

// 设计器
export default defineComponent({
  setup() {
    return () => <div class={classes.designer}>
        <div class={classes.header}>头部工具条</div>
        <div class={classes.content}>内容</div>
    </div>
  }
})

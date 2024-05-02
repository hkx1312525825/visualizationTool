import { defineComponent } from 'vue'
import classes from './home.module.less'

export default defineComponent({
  setup() {
    return () => <div class={classes.container}>
      <div></div>
    </div>
  }
})

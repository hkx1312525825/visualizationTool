import { defineComponent } from 'vue'
import classes from './home.module.less'

export default defineComponent({
  setup() {
    return () => (
      <div onClick={() => {}} class={classes.container}>
        <div></div>
      </div>
    )
  }
})

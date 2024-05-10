import { defineComponent, ref } from 'vue'
import classes from './visPanel.module.less'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'VisPanel',
  setup() {
    const fold = ref(false)
    const foldIcon = () => {
      fold.value = !fold.value
    }
    return () => (
      <div class={{ [classes.visPanel]: true, [classes.fold]: fold.value }}>
        <div class={classes.panelHeader}>
          <span onClick={foldIcon} class={classes.foldIcon}>
            {!fold.value ? <RightCircleOutlined /> : <LeftCircleOutlined />}
          </span>
        </div>
        {!fold.value && <div>VisPanel</div>}
      </div>
    )
  }
})

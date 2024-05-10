import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import classes from './dataPanel.module.less'
export default defineComponent({
  name: 'DataPanel',
  setup() {
    const fold = ref(false)
    const foldIcon = () => {
      fold.value = !fold.value
    }
    return () => (
      <div class={{ [classes.dataPanel]: true, [classes.fold]: fold.value }}>
        <div class={classes.panelHeader}>
          <span onClick={foldIcon} class={classes.foldIcon}>
            {!fold.value ? <LeftCircleOutlined /> : <RightCircleOutlined />}
          </span>
        </div>
        {!fold.value && <div></div>}
      </div>
    )
  }
})

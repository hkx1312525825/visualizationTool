import type { Component } from '@/domain/Component/Component'
import { defineComponent, onMounted, ref } from 'vue'
import { Chart } from '@antv/g2'
import ComponentType from '@/domain/Component/ComponentType'
import classes from './BasicComponent.module.less'
export default defineComponent({
  props: {
    comp: {
      type: Object as () => Component,
      required: true
    }
  },
  setup(props: { comp: Component }) {
    const componentRef = ref<HTMLElement>()

    // 这里可以进行组件的渲染和初始化操作
    onMounted(() => {
      console.log(componentRef, props.comp)
      const chart = new Chart({ container: componentRef.value })
      chart.options({
        height: 500,
        padding: 'auto',
        type: ComponentType.line,
        data: props.comp.config.data,
        encode: { x: 'date', y: 'uv' },
        tooltip: {
          type: props.comp.type,
          channel: 'y'
        },
        scale: {
          x: { range: [0, 1] },
          y: { domainMin: 0, nice: true }
        }
      })
      //   chart.line({
      //     type: 'smooth'
      //   })
      chart.render()
    })
    return () => (
      <div class={classes.outerContainer}>
        <div ref={componentRef}></div>
      </div>
    )
  }
})

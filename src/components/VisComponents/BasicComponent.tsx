import type { Component } from '@/domain/Component/Component'
import { defineComponent, onMounted, ref } from 'vue'
import { Chart } from '@antv/g2'
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
        type: 'interval',
        data: [
          { date: '2020-1-1', value: 100 },
          { date: '2020-1-2', value: 200 }
        ],
        encode: { x: 'date', y: 'value' },
        tooltip: {
          type: props.comp.type
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
    return () => <div style="width: 100px;height: 100px;" ref={componentRef}></div>
  }
})

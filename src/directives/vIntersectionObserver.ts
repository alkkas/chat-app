import { type Directive } from 'vue'

const vIntersectionObserver: Directive<HTMLElement, (...args: any) => void> = {
  mounted: (el, obj) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries, _) => {
      if (entries[0].isIntersecting) {
        obj.value()
      }
    }, options)

    observer.observe(el)
  }
}

export default vIntersectionObserver

import ButtonView from './ButtonView.vue'
import CloseBtn from './CloseBtn.vue'
import ErrorView from './ErrorView.vue'
import IconView from './IconView.vue'
import InputView from './InputView.vue'
import SpinnerView from './SpinnerView.vue'

export default [
  { name: 'ButtonView', implementation: ButtonView },
  { name: 'InputView', implementation: InputView },
  { name: 'IconView', implementation: IconView },
  { name: 'SpinnerView', implementation: SpinnerView },
  { name: 'ErrorView', implementation: ErrorView },
  { name: 'CloseBtn', implementation: CloseBtn }
]

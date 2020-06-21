import { shallowMount } from '@vue/test-utils'
import ApiValues from '../components/ApiValues.vue'

describe('Foo', () => {
    it('renders a welcome message', () => {
        fetchMock.mockOnce('test')


        const wrapper = shallowMount(ApiValues, {
            data() {
              return {
                values: ['x'],
              }
            }
          })
      
          // see if the message renders
          expect(wrapper.find('.values').text()).toEqual('test')
    })
  })
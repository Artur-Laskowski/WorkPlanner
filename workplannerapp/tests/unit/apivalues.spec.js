import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import ApiValues from '@/components/ApiValues.vue'

describe('ApiValues.vue', () => {
  it('displays value from api', async () => {

    fetchMock.mockOnce(JSON.stringify(["value"]))

    const wrapper = shallowMount(ApiValues, {
      data() {
        return {
          values: ['x'],
        }
      }
    })

    await flushPromises()
    expect(wrapper.find('.values').text()).toBe('value')
  })
})

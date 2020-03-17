import { shallowMount } from '@vue/test-utils'
import HelloWorld from './components/HelloWorld.vue'

const wrapper = shallowMount(HelloWorld)


describe('HelloWorld', () => {
    it('has a created hook', () => {
        expect(typeof HelloWorld.created).toBe('function')
    })

    it('sets the current default data', () => {
        expect(typeof HelloWorld.data).toBe('function')
        const defaultData = HelloWorld.data()
        expect(defaultData.message).toBe('hello!')
    })

    it('currently sets the message when created', () => {
        expect(wrapper.vm.$data.message).toBe('bye!')
    })

    it('renders the current message', () => {
        expect(wrapper.text()).toBe('bye!')
    })
})

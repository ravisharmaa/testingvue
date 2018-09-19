import {mount} from '@vue/test-utils';
import expect from 'expect'
import Counter from '../src/components/Counter.vue'

describe('Counter', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Counter);
    });
    it("defaults to the counter of 0", () => {
        expect(wrapper.vm.count).toBe(0)
    });

    it("present  the current count", () => {
        expect(wrapper.find('.count').html()).toContain(0)
    });

    it(" has a button", () => {
        expect(wrapper.contains('button')).toBe(true)
    });

    it("increments the count when button is clicked", () => {
        expect(wrapper.find('.count').html()).toContain(0);
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.vm.count).toBe(1)
    })
});
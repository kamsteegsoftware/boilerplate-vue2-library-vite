import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: {
            type: 'string'
        }
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (_: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Button },
    template: '<Button @onClick="onClick" v-bind="$props" />',
});

export const Default : any = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
    label: 'Click me!',
};


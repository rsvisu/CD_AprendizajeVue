export default {
    template: `
        <label>
            <input type="checkbox" v-model="assignment.complete">
            {{ assignment.name }}
        </label>`,

    props: {
        assignment: Object
    }
}
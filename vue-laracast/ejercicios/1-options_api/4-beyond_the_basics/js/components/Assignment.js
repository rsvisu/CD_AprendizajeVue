export default {
    template: `
        <label class="p-4 flex items-center">
            <input 
                type="checkbox" 
                v-model="assignment.complete"
                class="mr-1"
            >
            {{ assignment.name }}
        </label>`,

    props: {
        assignment: Object
    }
}
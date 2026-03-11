export default {
    template: `
        <div class="flex gap-2 mb-4">
            <button 
                @click="this.$emit('update:currentTag', tag);"
                class="cursor-pointer bg-gray-500 p-1 text-xs"
                :class=" {
                'border border-blue-300 text-blue-300': tag === currentTag
                }"
                v-for="tag in tags"
            >{{ tag }}</button>
        </div>
        `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['todos', ...new Set(this.initialTags)];
        }
    }
}
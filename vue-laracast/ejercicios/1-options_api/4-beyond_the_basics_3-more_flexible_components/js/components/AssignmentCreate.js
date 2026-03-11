export default {
    template: `
        <form @submit.prevent="add">
            <div class="flex h-12 mt-2">
                <input type="text" v-model="newAssignment" placeholder="Nueva asignatura..." class="bg-gray-500 w-full px-2">
                <button type="submit" class="cursor-pointer bg-gray-500 border-l px-2">Añadir</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            if (this.newAssignment.trim().length === 0) {
                alert('La asignatura no puede estar vacia');
                return;
            }

            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}
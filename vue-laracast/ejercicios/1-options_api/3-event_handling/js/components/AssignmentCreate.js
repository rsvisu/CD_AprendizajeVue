export default {
    template: `
        <form @submit.prevent="add">
            <input type="text" v-model="newAssignment" placeholder="Nueva asignatura..." class="bg-gray-500 p-3">
            <button type="submit" class="cursor-pointer bg-gray-500 ml-1 p-3">Añadir</button>
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
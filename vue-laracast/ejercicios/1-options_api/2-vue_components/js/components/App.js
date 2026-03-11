export default {
    data() {
        return {
            assignments: [{
                id: 1, name: 'Terminar proyecto', complete: true
            }, {
                id: 2, name: 'Hacer mates', complete: false
            }, {
                id: 3, name: 'Hacer lengua', complete: false
            }

            ]
        }
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter((assignment) => assignment.complete);
        },

        inProgressAssignments() {
            return this.assignments.filter((assignment) => !assignment.complete);
        }
    }

}
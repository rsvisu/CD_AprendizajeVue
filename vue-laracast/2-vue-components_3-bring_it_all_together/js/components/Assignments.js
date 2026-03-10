import AssignmentsList from "./AssignmentList.js";

export default {
    components: {
        AssignmentsList
    },

    template: `
        <div class="space-y-6">
            <AssignmentsList :assignments="filters.inProgress" title="En Progreso:"/>
            <AssignmentsList :assignments="filters.completed" title="Completadas:"/>
        </div>
`,

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
        filters() {
            return {
                inProgress: this.assignments.filter((assignment) => !assignment.complete),
                completed: this.assignments.filter((assignment) => assignment.complete)
            }
        }

    }
}
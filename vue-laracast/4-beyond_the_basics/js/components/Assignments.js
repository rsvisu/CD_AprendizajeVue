import AssignmentsList from "./AssignmentList.js";
import AssignmentsCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentsCreate
    },

    template: `
        <div class="space-y-6">
            <AssignmentsList :assignments="filters.inProgress" title="En Progreso:"/>
            <AssignmentsList :assignments="filters.completed" title="Completadas:"/>
            <AssignmentsCreate @add="add"/>
        </div>
    `,

    data() {
        return {
            assignments: [
                {
                    id: 1, name: 'Terminar proyecto', tag: 'matematicas', complete: true
                },
                {
                    id: 2, name: 'Hacer mates', tag: 'lengua', complete: false
                },
                {
                    id: 3, name: 'Hacer lengua', tag: 'ciencia', complete: false
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

    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}
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
            assignments: []
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data;
            });
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
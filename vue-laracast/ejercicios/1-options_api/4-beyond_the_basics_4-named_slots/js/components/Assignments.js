import AssignmentsList from "./AssignmentList.js";
import AssignmentsCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentsCreate
    },

    template: `
        <div class="flex gap-8">
            <AssignmentsList :assignments="filters.inProgress" title="En Progreso:">
                <AssignmentsCreate @add="add"/>
            </AssignmentsList>
            <AssignmentsList :assignments="filters.completed" title="Completadas:" canToggle />
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
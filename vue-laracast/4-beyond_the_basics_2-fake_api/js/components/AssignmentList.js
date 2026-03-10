import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template:`
        <section v-show="assignments.length">
            <!-- Encabezado -->
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            
            <!-- Tags -->
            <AssignmentTags
                v-model:currentTag="currentTag" 
                :initialTags="assignments.map(a => a.tag)"
            />
            
            <!-- Lista -->            
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <li
                    :key="assignment.id"
                    v-for="assignment in filteredAssignments"
                >
                    <Assignment :assignment="assignment" />
                </li>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'todos'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'todos') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}
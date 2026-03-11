import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template:`
        <section v-show="show && assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <!-- Encabezado -->
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" @click="show = false"  class="cursor-pointer">&times;</button>
            </div>
            
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
            
            <slot></slot>
            
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: 'todos',
            show: true
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
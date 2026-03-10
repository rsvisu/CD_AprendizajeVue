import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },

    template:`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <li
                    :key="assignment.id"
                    v-for="assignment in assignments"
                >
                    <Assignment :assignment="assignment" />
                </li>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}
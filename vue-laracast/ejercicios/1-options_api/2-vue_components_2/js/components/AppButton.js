export default {
    template: `
                  <button 
                    :class="{
                        'border rounded px-4 m-3 py-2 cursor-pointer disabled:cursor-not-allowed': true,
                        'bg-blue-200 hover:bg-blue-300': type === 'primary',
                        'bg-purple-200 hover:bg-purple-300': type === 'secondary',
                        'bg-gray-200 hover:bg-gray-300': type === 'muted',
                        'is-loading': processing
                    }" 
                    :disabled="processing"
                  >
                    <slot/>
                  </button>
                `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }

}
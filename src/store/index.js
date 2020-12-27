import { createStore } from 'vuex'

export default createStore({
    state: {
        role: '',
        permission: [],
        token: ''
    },
    mutations: {
        change_role(state, role) {
            state.role = role
        },
        change_permission(state, permission) {
            state.permission = permission
        },
        change_token(state, token) {
            state.token = token
        }
    },
    actions: {},
    modules: {}
})
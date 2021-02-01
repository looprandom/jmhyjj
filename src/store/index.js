import { createStore } from 'vuex'
import { asyncRouterMap, constantRouterMap } from '../router/index'

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.indexOf(role) >= 0)
    } else {
        return true
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 */
function filterAsyncRouter(asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

export default createStore({
    state: {
        role: '',
        permission: [],
        token: '',
        constantRouterMap,
        addRouters: [],
        roles: []
    },
    mutations: {
        change_role(state, role) {
            state.role = role
        },
        change_permission(state, permission) {
            state.permission = permission
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data
                let accessedRouters
                if (roles.indexOf('admin') >= 0) {
                    console.log('admin>=0')
                    accessedRouters = asyncRouterMap
                } else {
                    console.log('admin<0')
                    accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                }
                console.log('accessedRouters', accessedRouters)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        },
        getInfo(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('SET_ROLES', ['超级管理员', 'admin'])
                    resolve({ data: { roles: ['超级管理员', 'admin'] } })
                }, 500)
            })
        }
    },
    modules: {},
    getters: {
        addRouters: state => state.addRouters,
        roles: state => state.roles
    }
})
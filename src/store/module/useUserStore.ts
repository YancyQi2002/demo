export interface UserInfo {
    token: string
}

export const KEY_USER_ID = 'user'

const useUserStore = defineStore({
    id: KEY_USER_ID,
    state: ():UserInfo => ({
        token: ''
    }),

    actions: {
        setToken(token :string) {
            this.$state.token = token
        },
        login(user :Partial<UserInfo>) {
            this.$state = {
                ...this.$state,
                ...user
            }
        }
    }
})

const instance = useUserStore()

instance.$subscribe((mutation, state) => {
    
})

export default useUserStore
import AxiosInstance from "./AxiosInstance"

const UserService = {
    loadUsers: async (page: number, search: string) => {
        const url = search
            ? `/user/loadUsers?page=${page}&search=${encodeURIComponent(search)}`
            : `/user/loadUsers?page=${page}`

        const response = await AxiosInstance.get(url)
        return response
    },

    storeUser: async (data: any) => {
        const response = await AxiosInstance.post('/user/storeUser', data)
        return response
    },

    updateUser: async (userId: string | number, data: any) => {
        const response = await AxiosInstance.put(
            `/user/updateUser/${userId}`,
            data
        )
        return response
    },

    destroyUser: async (userId: string | number) => {
        const response = await AxiosInstance.delete(
            `/user/destroyUser/${userId}`
        )
        return response
    }
}

export default UserService
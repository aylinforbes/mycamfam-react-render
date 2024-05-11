const token = 'a85db8785a61c58fb81b2dcb4aec64ca5c9f02e86bab6fd9'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://mycamfam.onrender.com/api/chameleons`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
                'mode': 'cors'
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

create: async (data: any = {}) => {
    const response = await fetch(`https://mycamfam.onrender.com/api/chameleons`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`,
            'mode': 'cors'
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},

update: async (id: string, data:any = {}) => {
    const response = await fetch(`https://mycamfam.onrender.com/api/chameleons/${id}`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`,
            'mode': 'cors'
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to update data on the server')
    }

    return await response.json()
},

delete: async (id: string) => {
    const response = await fetch(`https://mycamfam.onrender.com/api/chameleons/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`,
            'mode': 'cors'
        },

    })

    if (!response.ok) {
        throw new Error('Failed to delete data from the server')
    }

    return;
},
}
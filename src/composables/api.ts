export default function useApi() {
    let baseUrl = import.meta.env.VITE_API_UNIRA;

    const toSimat = () => {
        if(baseUrl !== import.meta.env.VITE_API_UNIRA) {
            baseUrl = import.meta.env.VITE_API_SIMAT;
        }
    }

    const toMontak = () => {
        if(baseUrl !== import.meta.env.VITE_API_UNIRA) {
            baseUrl = import.meta.env.VITE_API_MONTAK;
        }
    }


    async function requestToServer(endpoint: string, method: string, body?: any) {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const response = await fetch(baseUrl + `${endpoint}`, {
                    body: body ? JSON.stringify(body) : null,
                    method: method || 'GET',
                });
                if (!response.ok) {
                    reject(response.statusText)
                }
                const data = await response.json();
                return resolve(data);
            } catch (error) {
                reject(error)
            }
        })
    }

    async function getResource(endpoint: string) {
        return requestToServer(endpoint, 'GET');
    }

    async function graphqlResource(endpoint: string, body: any) {
        return requestToServer(endpoint, 'POST', {
            query: body
        });
    }

    async function postResource(endpoint: string, body: any) {
        return requestToServer(endpoint, 'POST', body);
    }


    async function putResource(endpoint: string, body: any) {
        return requestToServer(endpoint, 'PUT', body);
    }


    async function deleteResource(endpoint: string) {
        return requestToServer(endpoint, 'DELETE');
    }


    return {
        getResource,
        postResource,
        putResource,
        deleteResource,
        graphqlResource,
        toSimat,
        toMontak
    }
}
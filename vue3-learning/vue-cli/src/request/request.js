import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})

export function getList() {
    return request.get("/data");
}

export function getDetail(id) { 
    return request.get(`/data/${id}`);
}

export function addData(data) { 
    return request.post("/data", data);
}

export function deleteData(id) { 
    return request.delete(`/data/${id}`);
}

export function updateData(id, data) { 
    return request.put(`/data/${id}`, data);
}
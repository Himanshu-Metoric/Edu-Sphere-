import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dashboard Services
export const dashboardService = {
  getDashboardData: () => api.get('/dashboard'),
  getCourses: () => api.get('/dashboard/courses'),
  getProgress: () => api.get('/dashboard/progress'),
};

// Faculty Services
export const facultyService = {
  getFacultyList: () => api.get('/faculty'),
  getFacultyDetails: (id) => api.get(`/faculty/${id}`),
  getFacultyCourses: (id) => api.get(`/faculty/${id}/courses`),
};

// Doubts Services
export const doubtsService = {
  getDoubts: () => api.get('/doubts'),
  createDoubt: (doubtData) => api.post('/doubts', doubtData),
  getDoubtDetails: (id) => api.get(`/doubts/${id}`),
  resolveDoubt: (id, resolution) => api.put(`/doubts/${id}/resolve`, { resolution }),
};

export default api; 

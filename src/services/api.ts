const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-api.onrender.com';

// Helper para headers con autenticación
const getAuthHeaders = (token?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

// ==================== EXPERIENCE ====================
export const getExperiences = async () => {
  const response = await fetch(`${API_URL}/experience`);
  if (!response.ok) throw new Error('Error al obtener experiencias');
  return response.json();
};

export const createExperience = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/experience`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear experiencia');
  return response.json();
};

export const updateExperience = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/experience/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar experiencia');
  return response.json();
};

export const deleteExperience = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/experience/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar experiencia');
  return response.json();
};

// ==================== PROJECTS ====================
export const getProjects = async () => {
  const response = await fetch(`${API_URL}/project`);
  if (!response.ok) throw new Error('Error al obtener proyectos');
  return response.json();
};

export const createProject = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/project`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear proyecto');
  return response.json();
};

export const updateProject = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/project/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar proyecto');
  return response.json();
};

export const deleteProject = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/project/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar proyecto');
  return response.json();
};

// ==================== CERTIFICATIONS ====================
export const getCertifications = async () => {
  const response = await fetch(`${API_URL}/certification`);
  if (!response.ok) throw new Error('Error al obtener certificaciones');
  return response.json();
};

export const createCertification = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/certification`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear certificación');
  return response.json();
};

export const updateCertification = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/certification/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar certificación');
  return response.json();
};

export const deleteCertification = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/certification/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar certificación');
  return response.json();
};

// ==================== EDUCATION ====================
export const getEducation = async () => {
  const response = await fetch(`${API_URL}/education`);
  if (!response.ok) throw new Error('Error al obtener educación');
  return response.json();
};

export const createEducation = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/education`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear educación');
  return response.json();
};

export const updateEducation = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/education/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar educación');
  return response.json();
};

export const deleteEducation = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/education/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar educación');
  return response.json();
};

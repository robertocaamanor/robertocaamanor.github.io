const API_URL = import.meta.env.VITE_API_URL;

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

// ==================== AUTH ====================
export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error('Error al iniciar sesión');
  return response.json();
};

// ==================== EXPERIENCE ====================
export const getExperiences = async () => {
  const response = await fetch(`${API_URL}/api/experiences`);
  if (!response.ok) throw new Error('Error al obtener experiencias');
  return response.json();
};

export const createExperience = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/experiences`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear experiencia');
  return response.json();
};

export const updateExperience = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/experiences/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar experiencia');
  return response.json();
};

export const deleteExperience = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/api/experiences/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar experiencia');
  return response.json();
};

// ==================== PROJECTS ====================
export const getProjects = async () => {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) throw new Error('Error al obtener proyectos');
  return response.json();
};

export const createProject = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/projects`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear proyecto');
  return response.json();
};

export const updateProject = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar proyecto');
  return response.json();
};

export const deleteProject = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar proyecto');
  return response.json();
};

// ==================== CERTIFICATIONS ====================
export const getCertifications = async () => {
  const response = await fetch(`${API_URL}/api/certifications`);
  if (!response.ok) throw new Error('Error al obtener certificaciones');
  return response.json();
};

export const createCertification = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/certifications`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear certificación');
  return response.json();
};

export const updateCertification = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/certifications/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar certificación');
  return response.json();
};

export const deleteCertification = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/api/certifications/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar certificación');
  return response.json();
};

// ==================== EDUCATION ====================
export const getEducation = async () => {
  const response = await fetch(`${API_URL}/api/education`);
  if (!response.ok) throw new Error('Error al obtener educación');
  return response.json();
};

export const createEducation = async (data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/education`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al crear educación');
  return response.json();
};

export const updateEducation = async (id: number, data: any, token: string) => {
  const response = await fetch(`${API_URL}/api/education/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar educación');
  return response.json();
};

export const deleteEducation = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/api/education/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error('Error al eliminar educación');
  return response.json();
};

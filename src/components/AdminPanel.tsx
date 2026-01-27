import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import * as api from '../services/api';

interface Experience {
  id?: number;
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}

const AdminPanel = () => {
  const { user, logout, token } = useAuth();
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'certifications' | 'education'>('experience');
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    setIsLoading(true);
    try {
      const data = await api.getExperiences();
      setExperiences(data);
    } catch (error) {
      console.error('Error al cargar experiencias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteExperience = async (id: number) => {
    if (!token || !confirm('¿Estás seguro de eliminar este elemento?')) return;
    
    try {
      await api.deleteExperience(id, token);
      await loadExperiences();
    } catch (error) {
      console.error('Error al eliminar:', error);
      alert('Error al eliminar el elemento');
    }
  };

  const handleSaveExperience = async (data: Experience) => {
    if (!token) return;
    
    try {
      if (editingItem?.id) {
        await api.updateExperience(editingItem.id, data, token);
      } else {
        await api.createExperience(data, token);
      }
      await loadExperiences();
      setShowForm(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al guardar el elemento');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Panel de Administración
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Bienvenido, {user?.email}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => window.location.href = '/'}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Ver Portafolio
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'experience'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Experiencia
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'projects'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'certifications'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Certificaciones
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'education'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Educación
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {activeTab === 'experience' && 'Experiencia Laboral'}
              {activeTab === 'projects' && 'Proyectos'}
              {activeTab === 'certifications' && 'Certificaciones'}
              {activeTab === 'education' && 'Educación'}
            </h2>
            <button
              onClick={() => {
                setEditingItem(null);
                setShowForm(true);
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              + Agregar Nuevo
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">Cargando...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills?.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => {
                          setEditingItem(exp);
                          setShowForm(true);
                        }}
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => exp.id && handleDeleteExperience(exp.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Modal */}
        {showForm && (
          <ExperienceForm
            item={editingItem}
            onSave={handleSaveExperience}
            onCancel={() => {
              setShowForm(false);
              setEditingItem(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

// Componente de formulario
const ExperienceForm = ({ item, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState({
    company: item?.company || '',
    position: item?.position || '',
    period: item?.period || '',
    location: item?.location || '',
    type: item?.type || '',
    description: item?.description || '',
    skills: item?.skills?.join(', ') || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {item ? 'Editar Experiencia' : 'Nueva Experiencia'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Empresa
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Cargo
            </label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Período
            </label>
            <input
              type="text"
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="ej: ene. 2022 - actualidad"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ubicación
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tipo
            </label>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="ej: Jornada completa"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descripción
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Habilidades (separadas por coma)
            </label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="React, Node.js, TypeScript"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;

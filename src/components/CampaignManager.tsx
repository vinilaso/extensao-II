import React, { useState } from 'react';
import { 
  ArrowLeft,
  Target,
  Calendar,
  DollarSign,
  Users,
  Eye,
  MousePointer,
  Plus,
  Edit3,
  Trash2,
  Play,
  Pause,
  BarChart3
} from 'lucide-react';

interface CampaignManagerProps {
  onBack: () => void;
}

interface Campaign {
  id: string;
  name: string;
  objective: string;
  budget: string;
  startDate: string;
  endDate: string;
  targetAudience: string;
  status: 'Ativa' | 'Pausada' | 'Finalizada' | 'Rascunho';
  reach: string;
  clicks: string;
  conversions: string;
}

const CampaignManager: React.FC<CampaignManagerProps> = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    objective: 'awareness',
    budget: '',
    startDate: '',
    endDate: '',
    targetAudience: '',
    description: ''
  });

  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Campanha Feriado - Hospedagem',
      objective: 'Conversões',
      budget: 'R$ 850',
      startDate: '2024-01-15',
      endDate: '2024-01-30',
      targetAudience: 'Donos de pets, 25-45 anos',
      status: 'Ativa',
      reach: '15.2k',
      clicks: '1.8k',
      conversions: '156'
    },
    {
      id: '2',
      name: 'Promoção Day Care',
      objective: 'Tráfego',
      budget: 'R$ 450',
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      targetAudience: 'Profissionais, 30-50 anos',
      status: 'Finalizada',
      reach: '8.5k',
      clicks: '920',
      conversions: '78'
    },
    {
      id: '3',
      name: 'Adestramento Premium',
      objective: 'Reconhecimento',
      budget: 'R$ 320',
      startDate: '2024-01-20',
      endDate: '2024-02-05',
      targetAudience: 'Novos donos de pets',
      status: 'Ativa',
      reach: '5.8k',
      clicks: '650',
      conversions: '45'
    }
  ]);

  const objectives = [
    { value: 'awareness', label: 'Reconhecimento da Marca' },
    { value: 'traffic', label: 'Tráfego para o Site' },
    { value: 'conversions', label: 'Conversões/Vendas' },
    { value: 'engagement', label: 'Engajamento' },
    { value: 'leads', label: 'Geração de Leads' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: formData.name,
      objective: objectives.find(obj => obj.value === formData.objective)?.label || 'Reconhecimento',
      budget: `R$ ${formData.budget}`,
      startDate: formData.startDate,
      endDate: formData.endDate,
      targetAudience: formData.targetAudience,
      status: 'Rascunho',
      reach: '0',
      clicks: '0',
      conversions: '0'
    };
    
    setCampaigns(prev => [newCampaign, ...prev]);
    setFormData({
      name: '',
      objective: 'awareness',
      budget: '',
      startDate: '',
      endDate: '',
      targetAudience: '',
      description: ''
    });
    setShowCreateForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativa':
        return 'bg-green-100 text-green-800';
      case 'Pausada':
        return 'bg-yellow-100 text-yellow-800';
      case 'Finalizada':
        return 'bg-gray-100 text-gray-800';
      case 'Rascunho':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => setShowCreateForm(false)}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para Campanhas
            </button>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Criar Nova Campanha
            </h1>
            <p className="text-gray-600">
              Configure sua campanha publicitária para alcançar seus objetivos
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Informações Básicas
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Campanha *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ex: Promoção de Verão - Hospedagem"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-2">
                      Objetivo da Campanha *
                    </label>
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      {objectives.map((obj) => (
                        <option key={obj.value} value={obj.value}>
                          {obj.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Descreva os detalhes da sua campanha..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Orçamento e Cronograma
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Orçamento Total (R$) *
                    </label>
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      min="1"
                      placeholder="1000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data de Início *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data de Término *
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Público-Alvo
                </h2>
                
                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Público-Alvo *
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Donos de pets, 25-45 anos, região metropolitana"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Criar Campanha
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Gerenciar Campanhas
              </h1>
              <p className="text-gray-600">
                Crie, monitore e otimize suas campanhas publicitárias
              </p>
            </div>
            <button 
              onClick={() => setShowCreateForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Campanha
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-medium text-green-600">+12%</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">3</p>
            <p className="text-sm text-gray-600">Campanhas Ativas</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-8 h-8 text-green-600" />
              <span className="text-sm font-medium text-green-600">+18%</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">29.5k</p>
            <p className="text-sm text-gray-600">Alcance Total</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <MousePointer className="w-8 h-8 text-purple-600" />
              <span className="text-sm font-medium text-green-600">+25%</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">3.37k</p>
            <p className="text-sm text-gray-600">Cliques Totais</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-orange-600" />
              <span className="text-sm font-medium text-red-600">-5%</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">R$ 1.620</p>
            <p className="text-sm text-gray-600">Investimento Total</p>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Suas Campanhas
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campanha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Objetivo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orçamento
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alcance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversões
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {campaign.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {campaign.targetAudience}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.objective}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.reach}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.conversions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                          <BarChart3 className="w-4 h-4" />
                        </button>
                        {campaign.status === 'Ativa' ? (
                          <button className="text-yellow-600 hover:text-yellow-900 transition-colors duration-200">
                            <Pause className="w-4 h-4" />
                          </button>
                        ) : campaign.status === 'Pausada' ? (
                          <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                            <Play className="w-4 h-4" />
                          </button>
                        ) : null}
                        <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignManager;
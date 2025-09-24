import React, { useState } from 'react';
import { 
  ArrowLeft,
  Calendar,
  TrendingUp,
  Users,
  MessageCircle,
  Share2,
  Eye,
  MousePointer,
  Download,
  Target,
  DollarSign,
  BarChart3
} from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onBack }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30days');

  const periods = [
    { value: '7days', label: 'Últimos 7 dias' },
    { value: '30days', label: 'Últimos 30 dias' },
    { value: 'lastmonth', label: 'Mês passado' },
    { value: 'custom', label: 'Período personalizado' }
  ];

  const engagementData = [
    { metric: 'Curtidas', value: '12.5k', change: '+23%', changeType: 'positive' },
    { metric: 'Comentários', value: '2.8k', change: '+15%', changeType: 'positive' },
    { metric: 'Compartilhamentos', value: '1.2k', change: '+8%', changeType: 'positive' },
    { metric: 'Alcance', value: '45.2k', change: '-5%', changeType: 'negative' }
  ];

  const serviceEngagement = [
    { service: 'Hospedagem', percentage: 45, color: 'bg-blue-500' },
    { service: 'Day Care', percentage: 30, color: 'bg-green-500' },
    { service: 'Adestramento', percentage: 15, color: 'bg-purple-500' },
    { service: 'Veterinário', percentage: 10, color: 'bg-orange-500' }
  ];

  const campaigns = [
    {
      name: 'Campanha Feriado - Hospedagem',
      status: 'Ativa',
      alcance: '15.2k',
      cliques: '1.8k',
      conversoes: '156',
      investimento: 'R$ 850'
    },
    {
      name: 'Promoção Day Care',
      status: 'Finalizada',
      alcance: '8.5k',
      cliques: '920',
      conversoes: '78',
      investimento: 'R$ 450'
    },
    {
      name: 'Adestramento Premium',
      status: 'Ativa',
      alcance: '5.8k',
      cliques: '650',
      conversoes: '45',
      investimento: 'R$ 320'
    }
  ];

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
                Análise e Relatórios
              </h1>
              <p className="text-gray-600">
                Acompanhe o desempenho das suas publicações e campanhas
              </p>
            </div>
            <button className="bg-vibrant-green hover:bg-vibrant-green/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Exportar Relatório
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Período:</span>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vibrant-green focus:border-transparent text-sm"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Métricas Gerais de Engajamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {engagementData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{item.metric}</span>
                  <span className={`text-sm font-medium ${
                    item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.change}
                  </span>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Line Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Evolução do Engajamento
              </h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Gráfico de linhas - Evolução de curtidas, comentários e compartilhamentos</p>
                </div>
              </div>
            </div>

            {/* Service Engagement Pie Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Engajamento por Serviço
              </h3>
              <div className="space-y-4">
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Desempenho de Campanhas
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campanha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alcance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliques
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Conversões
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Investimento
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {campaigns.map((campaign, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {campaign.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          campaign.status === 'Ativa' 
                            ? 'bg-vibrant-green/20 text-vibrant-green' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {campaign.alcance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {campaign.cliques}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {campaign.conversoes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {campaign.investimento}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recomendações Estratégicas
          </h2>
          <div className="bg-gradient-to-r from-soft-green/30 to-vibrant-green/20 rounded-lg border border-vibrant-green/30 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-vibrant-green/20 rounded-lg">
                <Target className="w-6 h-6 text-vibrant-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Oportunidade de Investimento
                </h3>
                <p className="text-gray-700 mb-4">
                  Detectamos um alto engajamento no serviço de 'hospedagem' com a proximidade do feriado. 
                  Recomendamos investir <strong>R$ 1.200</strong> em um anúncio focado neste serviço para 
                  alcançar mais clientes.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-vibrant-green hover:bg-vibrant-green/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Criar Campanha
                  </button>
                  <span className="text-sm text-gray-600">
                    Potencial de alcançar +25% mais clientes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

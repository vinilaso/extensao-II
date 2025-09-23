import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Building2, 
  BarChart3, 
  Settings,
  LogOut,
  TrendingUp,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true, page: 'dashboard' },
    { icon: FileText, label: 'Postagens', active: false, page: 'posts' },
    { icon: Building2, label: 'Campanhas', active: false, page: 'campaigns' },
    { icon: BarChart3, label: 'Relatórios', active: false, page: 'analytics' },
    { icon: Settings, label: 'Configurações', active: false, page: 'settings' },
  ];

  const statsCards = [
    {
      title: 'Postagens Agendadas',
      value: '12',
      subtitle: 'próximos 7 dias',
      change: '+15%',
      changeType: 'positive',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Engajamento Recente',
      value: '8.5k',
      subtitle: 'última semana',
      change: '+23%',
      changeType: 'positive',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Investimento em Campanhas',
      value: 'R$ 4.280',
      subtitle: 'campanha ativa principal',
      change: '-8%',
      changeType: 'negative',
      icon: DollarSign,
      color: 'purple'
    }
  ];

  const recentActivities = [
    {
      title: 'Nova postagem criada',
      time: 'há 2 horas',
      user: 'Por João Silva'
    },
    {
      title: 'Nova postagem criada',
      time: 'há 2 horas',
      user: 'Por João Silva'
    },
    {
      title: 'Nova postagem criada',
      time: 'há 2 horas',
      user: 'Por João Silva'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-cubes text-2xl text-blue-600"></i>
            <span className="text-xl font-semibold text-gray-900">Dashboard</span>
          </div>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.page)}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                item.active
                  ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } w-full text-left`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6">
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600">
              Confira o resumo das suas atividades recentes
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${
                    card.color === 'blue' ? 'bg-blue-100' :
                    card.color === 'green' ? 'bg-green-100' :
                    'bg-purple-100'
                  }`}>
                    <card.icon className={`w-5 h-5 ${
                      card.color === 'blue' ? 'text-blue-600' :
                      card.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {card.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 mb-1">
                  {card.value}
                </p>
                <p className="text-sm text-gray-500">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Atividades Recentes
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {activity.user}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
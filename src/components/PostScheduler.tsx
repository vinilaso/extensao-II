import React, { useState } from 'react';
import { 
  ArrowLeft,
  Image,
  Calendar,
  Clock,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

interface PostSchedulerProps {
  onBack: () => void;
}

const PostScheduler: React.FC<PostSchedulerProps> = ({ onBack }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-100 text-blue-600 border-blue-200' }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

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
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Agendar Nova Postagem
          </h1>
          <p className="text-gray-600">
            Crie e agende sua postagem para as redes sociais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content Creation */}
          <div className="space-y-6">
            {/* Post Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Conteúdo da Postagem
              </h2>
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Digite o conteúdo da sua postagem..."
                className="w-full h-32 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
              />
              
              <button className="flex items-center mt-4 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Image className="w-5 h-5 mr-2" />
                Adicionar Mídia
              </button>
            </div>

            {/* Configuration */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Configurações
              </h2>
              
              {/* Social Media Platforms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Rede Social
                </label>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`flex items-center px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedPlatforms.includes(platform.id)
                          ? platform.color
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <platform.icon className="w-4 h-4 mr-2" />
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    />
                    <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hora
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    />
                    <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Pré-visualização
                </h2>
                {selectedPlatforms.includes('instagram') && (
                  <div className="flex items-center text-pink-600">
                    <Instagram className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                )}
              </div>
              
              {/* Mock Instagram Post Preview */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="text-center text-gray-500 py-8">
                  {postContent ? (
                    <div className="text-left">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">seu_perfil</span>
                      </div>
                      <p className="text-gray-900 text-sm leading-relaxed">
                        {postContent}
                      </p>
                    </div>
                  ) : (
                    'Sua postagem aparecerá aqui...'
                  )}
                </div>
              </div>

              {scheduledDate && scheduledTime && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Agendado para:</strong> {new Date(scheduledDate).toLocaleDateString('pt-BR')} às {scheduledTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Schedule Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Agendar Postagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostScheduler;
export interface GameMissionReward {
  xp: number;
  coins?: number;
  item?: string; // ID do item que será desbloqueado
  theme: 'transito' | 'recursos_natureza' | 'trabalho_natureza' | 'meios_transporte' | 'sinalizacao' | 'seguranca' | 'agua' | 'solo' | 'ar' | 'agricultura' | 'industria' | 'sustentabilidade' | 'revisao_transito' | 'paisagens';
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}

export interface GameMission {
  missionId: number;
  reward: GameMissionReward;
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}


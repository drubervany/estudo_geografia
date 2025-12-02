import { Injectable } from '@angular/core';
import { GameMissionReward } from '../models/game-mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionRewardsService {
  private rewards: { [missionId: number]: GameMissionReward } = {
    1: {
      xp: 10,
      coins: 5,
      item: 'traffic_light',
      theme: 'transito',
      minCorrectAnswers: 3
    },
    2: {
      xp: 10,
      coins: 5,
      item: 'sign_stop',
      theme: 'sinalizacao',
      minCorrectAnswers: 3
    },
    3: {
      xp: 10,
      coins: 5,
      item: 'helmet_safety',
      theme: 'seguranca',
      minCorrectAnswers: 3
    },
    4: {
      xp: 10,
      coins: 5,
      item: 'leaf_green',
      theme: 'recursos_natureza',
      minCorrectAnswers: 3
    },
    5: {
      xp: 10,
      coins: 5,
      item: 'water_drop',
      theme: 'agua',
      minCorrectAnswers: 3
    },
    6: {
      xp: 10,
      coins: 5,
      item: 'wheat',
      theme: 'agricultura',
      minCorrectAnswers: 3
    },
    7: {
      xp: 10,
      coins: 5,
      item: 'factory',
      theme: 'industria',
      minCorrectAnswers: 3
    },
    8: {
      xp: 15,
      coins: 10,
      item: 'robot',
      theme: 'trabalho_natureza',
      minCorrectAnswers: 3
    },
    9: {
      xp: 15,
      coins: 10,
      item: 'medal_transit',
      theme: 'revisao_transito',
      minCorrectAnswers: 4
    },
    10: {
      xp: 20,
      coins: 15,
      item: 'globe_champion',
      theme: 'paisagens',
      minCorrectAnswers: 5
    }
  };

  getReward(missionId: number): GameMissionReward | undefined {
    return this.rewards[missionId];
  }
}

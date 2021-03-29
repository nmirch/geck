import { createStore } from 'vuex'
import newBuild from '@/data/default-build'
import methods from '@/data/methods'
import infoPanelData from '@/data/info-build'

export default createStore({
  state: {
    build: newBuild,
    infoPanel: {
      name: 'Info Panel',
      type: 'Default',
      description: 'Click on things to see more info about them here...',
      wiki: 'https://www.fonline-reloaded.net/wiki/Main_Page'
    }
  },
  mutations: {
    mutateSpecial(state, data) {
      const { statName, statValue, pool } = data
      state.build.SPECIAL[statName].baseValue = statValue
      state.build.SPECIAL.PL.baseValue = pool
    }
  },
  actions: {
    refreshStats({ state, commit }) {
      Object.keys(state.build).forEach(category => {
        if (['SPECIAL', 'CharStats', 'Skills'].includes(category)) {
          const start = Date.now()
          Object.keys(state.build[category]).forEach(stat => {
            state.build[category][stat].value = methods[category][stat].updateStat(state.build)
          })
          const end = Date.now()
          console.log(`${category} refreshed in ${(end - start) / 1000} seconds`)
        }
      })
    },
    updateInfoPanel({ state, commit, dispatch }, { category, stat }) {
      state.infoPanel = { ...infoPanelData[category][stat] }
    },
    modifySpecial({ state, commit, dispatch }, { statName, modifier }) {
      let statValue = state.build.SPECIAL[statName].baseValue;
      let pool = state.build.SPECIAL.PL.baseValue;

      if (modifier === '+') {
        if (pool <= 0) {
          return;
        }
        if (statValue === 9 && state.build.Traits.Bonehead.tagged) {
          return;
        }
        if (statValue < 10) {
          statValue += 1;
          pool -= 1;
        }
      } else if (modifier === '-') {
        if (statValue <= 1) {
          return;
        }
        if (statValue === 5 && state.build.Traits.Bruiser.tagged) {
          return;
        }
        statValue -= 1;
        pool += 1;
      }
      const mutationData = {
        statName,
        statValue,
        pool
      }
      commit('mutateSpecial', mutationData)
      dispatch("refreshStats")
    },
    tagSkill({ state, commit, dispatch }, skill) {
      if (skill === 'Scavenging') {
        return
      }
      const tagged = state.build.Skills[skill].tagged
      const taggedSkills = state.build.buildInfo.taggedSkills
      if (tagged) {
        state.build.Skills[skill].tagged = false
        state.build.buildInfo.taggedSkills -= 1
      } else if (!tagged && taggedSkills < 3) {
        state.build.Skills[skill].tagged = true
        state.build.buildInfo.taggedSkills += 1
      } else {
        return
      }
      dispatch('refreshStats')
    },
    tagTrait({ state, commit, dispatch }, trait) {
      const tagged = state.build.Traits[trait].tagged
      const taggedTraits = state.build.buildInfo.taggedTraits
      if (trait === 'Bruiser') {
        const ST = state.build.SPECIAL.ST.baseValue
        if (tagged) {
          if (ST < 5) {
            return
          } else {
            state.build.Traits[trait].tagged = false
            state.build.buildInfo.taggedTraits -= 1
            state.build.SPECIAL.ST.baseValue -= 4
          }
        } else if (taggedTraits < 2) {
          state.build.Traits[trait].tagged = true
          state.build.buildInfo.taggedTraits += 1
          if (ST <= 6) {
            state.build.SPECIAL.ST.baseValue += 4
          } else {
            state.build.SPECIAL.ST.baseValue += 10 - ST
            state.build.SPECIAL.PL.baseValue += 4 - (10 - ST)
          }
        }
      } else if (trait === 'Bonehead') {
        const IN = state.build.SPECIAL.IN.baseValue
        if (tagged) {
          state.build.Traits[trait].tagged = false
          state.build.buildInfo.taggedTraits -= 1
          state.build.SPECIAL.IN.baseValue += 1
        } else if (taggedTraits < 2 && IN > 1) {
          state.build.Traits[trait].tagged = true
          state.build.buildInfo.taggedTraits += 1
          state.build.SPECIAL.IN.baseValue -= 1
        }
      } else {
        if (tagged) {
          state.build.Traits[trait].tagged = false
          state.build.buildInfo.taggedTraits -= 1
        } else if (taggedTraits < 2) {
          state.build.Traits[trait].tagged = true
          state.build.buildInfo.taggedTraits += 1
        }
      }
      console.log('tagTrait() is refreshing...')
      dispatch('refreshStats')
    }
  },
  modules: {
  }
})

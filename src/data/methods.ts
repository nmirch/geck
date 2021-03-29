
export default {
  CharStats: {
    HitPoints: {
      updateStat: function (build) {
        const baseValue =
          55 +
          1 * build.SPECIAL.ST.baseValue +
          2 * build.SPECIAL.EN.baseValue;

        return baseValue
        // +
        // LIFEGIVERS
      }
    },
    ArmorClass: {
      updateStat: function (build) {
        const baseValue = 3 * build.SPECIAL.AG.baseValue;

        return baseValue
      }
    },
    ActionPoints: {
      updateStat: function (build) {
        const baseValue =
          5 +
          1 * Math.floor(build.SPECIAL.AG.baseValue / 2)
          - 2 * build.Traits.Bruiser.tagged

        return baseValue
      }
    },
    CarryWeight: {
      updateStat: function (build) {
        const baseValue =
          1 * Math.floor(((build.SPECIAL.ST.baseValue * 25 + 25) / 2.2) + 20 - 0.5)
        return baseValue;
      }
    },
    MeleeDamage: {
      updateStat: function (build) {
        const ST = build.SPECIAL.ST.baseValue
        const bruiser = build.Traits.Bruiser.tagged
        let baseValue = 0
        if (bruiser) {
          baseValue += 2 * (Math.floor(ST / 7) * ((ST - 6) + 1)) + Math.floor((ST % 7) / ST)
        } else {
          baseValue += Math.floor(ST / 7) * (ST - 6) + 1
        }
        return baseValue;
      }
    },
    DamageResistance: {
      updateStat: function (build) {
        const baseValue =
          -10 * build.Traits.Kamikaze.tagged + 0
        return baseValue;
      }
    },
    PoisonResistance: {
      updateStat: function (build) {
        const baseValue =
          3 * build.SPECIAL.EN.baseValue
        return baseValue;
      }
    },
    RadResisitance: {
      updateStat: function (build) {
        const baseValue =
          2 * build.SPECIAL.EN.baseValue
        return baseValue;
      }
    },
    Sequence: {
      updateStat: function (build) {
        const baseValue =
          2 +
          2 * build.SPECIAL.PE.baseValue
        return baseValue;
      }
    },
    HealingRate: {
      updateStat: function (build) {
        const baseValue =
          1 * Math.floor(build.SPECIAL.EN.baseValue / 2) + 7
        return baseValue;
      }
    },
    CriticalChance: {
      updateStat: function (build) {
        const baseValue =
          1 * build.SPECIAL.AG.baseValue +
          10 * build.Traits.Finesse.tagged
        return baseValue;
      }
    },
    PartyPoints: {
      updateStat: function (build) {
        const baseValue =
          10 * build.SPECIAL.CH.baseValue +
          50 * build.Traits.GoodNatured.tagged +
          Math.floor(build.Skills.Speech.value / 3)
        return baseValue;
      }
    },
    MaximumPerks: {
      updateStat: function (build) {
        return 8 - 2 * build.Traits.Skilled.tagged
      }
    },
    SkillPointsPerLevel: {
      updateStat: function (build) {
        const baseValue =
          5 +
          2 * build.SPECIAL.IN.baseValue +
          5 * build.Traits.Skilled.tagged // + EDUCATED * 2
        return baseValue;
      }
    },
    HitPointsPerLevel: {
      updateStat: function (build) {
        const EN = build.SPECIAL.EN.baseValue
        if (EN % 2) {
          const baseValue = Math.floor(EN / 2) + 2
          if (baseValue % 2) {
            return (baseValue / 2).toFixed(1)
          } else {
            return baseValue
          }
        } else {
          return EN / 2
        }
      }
    },
  },
  SPECIAL: {
    ST: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.ST.baseValue +
          2 * build.Drugs.Buffout.tagged +
          1 * build.Drugs.Psycho.tagged +
          1 * build.SPECIAL.ST.implanted +
          -2 * build.Drugs.Jet.tagged;
        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    PE: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.PE.baseValue +
          1 * build.Drugs.Cigarettes.tagged +
          1 * build.SPECIAL.PE.implanted +
          -2 * build.Drugs.Psycho.tagged +
          -2 * build.Drugs.Beer.tagged;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    EN: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.EN.baseValue +
          1 * build.SPECIAL.EN.implanted +
          1 * build.Drugs.Psycho.tagged +
          2 * build.Drugs.Buffout.tagged;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    CH: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.CH.baseValue +
          2 * build.Drugs.CharismaBoost.tagged +
          2 * build.Drugs.Mentats.tagged +
          1 * build.Drugs.Beer.tagged +
          1 * build.SPECIAL.CH.implanted +
          -1 * build.Drugs.Cigarettes.tagged +
          -1 * build.Drugs.Jet.tagged;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    IN: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.IN.baseValue +
          1 * build.SPECIAL.IN.implanted +
          2 * build.Drugs.Mentats.tagged;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    AG: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.AG.baseValue +
          1 * build.SPECIAL.AG.implanted +
          1 * build.Drugs.NukaCola.tagged +
          -1 * build.Drugs.Buffout.tagged;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    LK: {
      updateStat: function (build) {
        let statValue =
          1 * build.SPECIAL.LK.baseValue +
          1 * build.SPECIAL.LK.implanted;

        if (statValue > 10) {
          statValue = 10;
        } else if (statValue < 1) {
          statValue = 1;
        }

        return statValue;
      }
    },
    PL: {
      updateStat: function (build) {
        return build.SPECIAL.PL.baseValue;
      }
    },
  },
  Skills: {
    SmallGuns: {
      updateStat: function (build) {
        const baseValue =
          5 +
          20 * build.Skills.SmallGuns.tagged +
          4 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.SmallGuns.gainedSkillPoints +
          build.Skills.SmallGuns.stepSkillPoints +
          build.Books.SmallGuns.gainedSkillPoints;
      }
    },
    BigGuns: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.BigGuns.tagged +
          2 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.BigGuns.gainedSkillPoints +
          build.Skills.BigGuns.stepSkillPoints;
      }
    },
    EnergyWeapons: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.EnergyWeapons.tagged +
          2 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.EnergyWeapons.gainedSkillPoints +
          build.Skills.EnergyWeapons.stepSkillPoints;
      }
    },
    CloseCombat: {
      updateStat: function (build) {
        const baseValue =
          30 +
          20 * build.Skills.CloseCombat.tagged +
          2 * build.SPECIAL.ST.baseValue +
          2 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.CloseCombat.gainedSkillPoints +
          build.Skills.CloseCombat.stepSkillPoints;
      }
    },
    Scavenging: {
      updateStat: function (build) {
        return 0
      }
    },
    Throwing: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Throwing.tagged +
          4 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.Throwing.gainedSkillPoints +
          build.Skills.Throwing.stepSkillPoints;
      }
    },
    FirstAid: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.FirstAid.tagged +
          2 * build.SPECIAL.PE.baseValue +
          2 * (build.SPECIAL.IN.baseValue + build.Traits.Bonehead.tagged); // Temp fix for the Bonehead bug.

        return baseValue +
          build.Skills.FirstAid.gainedSkillPoints +
          build.Skills.FirstAid.stepSkillPoints +
          build.Books.FirstAid.gainedSkillPoints;
      }
    },
    Doctor: {
      updateStat: function (build) {
        const baseValue =
          5 +
          20 * build.Skills.Doctor.tagged +
          1 * build.SPECIAL.PE.baseValue +
          1 * (build.SPECIAL.IN.baseValue + build.Traits.Bonehead.tagged); // Temp fix for the Bonehead bug.

        return baseValue +
          build.Skills.Doctor.gainedSkillPoints +
          build.Skills.Doctor.stepSkillPoints;
      }
    },
    Sneak: {
      updateStat: function (build) {
        const baseValue =
          5 +
          20 * build.Skills.Sneak.tagged +
          3 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.Sneak.gainedSkillPoints +
          build.Skills.Sneak.stepSkillPoints;
      }
    },
    Lockpick: {
      updateStat: function (build) {
        const baseValue =
          10 +
          20 * build.Skills.Lockpick.tagged +
          1 * build.SPECIAL.PE.baseValue +
          1 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.Lockpick.gainedSkillPoints +
          build.Skills.Lockpick.stepSkillPoints;

      }
    },
    Steal: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Steal.tagged +
          3 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.Steal.gainedSkillPoints +
          build.Skills.Steal.stepSkillPoints;
      }
    },
    Traps: {
      updateStat: function (build) {
        const baseValue =
          10 +
          20 * build.Skills.Traps.tagged +
          1 * build.SPECIAL.PE.baseValue +
          1 * build.SPECIAL.AG.baseValue;

        return baseValue +
          build.Skills.Traps.gainedSkillPoints +
          build.Skills.Traps.stepSkillPoints;
      }
    },
    Science: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Science.tagged +
          4 * (build.SPECIAL.IN.baseValue + build.Traits.Bonehead.tagged); // Temp fix for the Bonehead bug.

        return baseValue +
          build.Skills.Science.gainedSkillPoints +
          build.Skills.Science.stepSkillPoints +
          build.Books.Science.gainedSkillPoints;
      }
    },
    Repair: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Repair.tagged +
          3 * (build.SPECIAL.IN.baseValue + build.Traits.Bonehead.tagged); // Temp fix for the Bonehead bug.

        return baseValue +
          build.Skills.Repair.gainedSkillPoints +
          build.Skills.Repair.stepSkillPoints +
          build.Books.Repair.gainedSkillPoints;
      }
    },
    Speech: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Speech.tagged +
          5 * build.SPECIAL.CH.baseValue;

        return baseValue +
          build.Skills.Speech.gainedSkillPoints +
          build.Skills.Speech.stepSkillPoints;
      }
    },
    Barter: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Barter.tagged +
          4 * build.SPECIAL.CH.baseValue;

        return baseValue +
          build.Skills.Barter.gainedSkillPoints +
          build.Skills.Barter.stepSkillPoints;
      }
    },
    Gambling: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Gambling.tagged +
          5 * build.SPECIAL.LK.baseValue;

        return baseValue +
          build.Skills.Gambling.gainedSkillPoints +
          build.Skills.Gambling.stepSkillPoints;
      }
    },
    Outdoorsman: {
      updateStat: function (build) {
        const baseValue =
          0 +
          20 * build.Skills.Outdoorsman.tagged +
          2 * build.SPECIAL.EN.baseValue +
          2 * (build.SPECIAL.IN.baseValue + build.Traits.Bonehead.tagged); // Temp fix for the Bonehead bug.

        return baseValue +
          build.Skills.Outdoorsman.gainedSkillPoints +
          build.Skills.Outdoorsman.stepSkillPoints +
          build.Books.Outdoorsman.gainedSkillPoints;
      }
    },
  },
  Traits: {
    FastMetabolism: {
      name: 'FastMetabolism',
      tagged: false,
    },
    Bruiser: {
      name: 'Bruiser',
      tagged: false,
    },
    OneHander: {
      name: 'OneHander',
      tagged: false,
    },
    Finesse: {
      name: 'Finesse',
      tagged: false,
    },
    Kamikaze: {
      name: 'Kamikaze',
      tagged: false,
    },
    HeavyHanded: {
      name: 'HeavyHanded',
      tagged: false,
    },
    FastShot: {
      name: 'FastShot',
      tagged: false,
    },
    BloodyMess: {
      name: 'BloodyMess',
      tagged: false,
    },
    Jinxed: {
      name: 'Jinxed',
      tagged: false,
    },
    GoodNatured: {
      name: 'GoodNatured',
      tagged: false,
    },
    ChemReliant: {
      name: 'ChemReliant',
      tagged: false,
    },
    Bonehead: {
      name: 'Bonehead',
      tagged: false,
    },
    Skilled: {
      name: 'Skilled',
      tagged: false,
    },
    Loner: {
      name: 'Loner',
      tagged: false,
    },
  },
  Perks: {
    MoreCritical: {
      name: 'MoreCritical',
      tagged: false,
      available: false,
    },
  },
  SupportPerks: {
    Awareness: {
      name: 'Awareness',
      tagged: false,
      available: false,
    },
  },
  Implants: {
    ST: {
      name: 'ST',
      tagged: false,
      available: false,
    },
  },
  Books: {
    SmallGuns: {
      name: 'SmallGuns',
      read: 0,
      gainedSkillPoints: 0,
    },
    FirstAid: {
      name: 'FirstAid',
      read: 0,
      gainedSkillPoints: 0,
    },
    Science: {
      name: 'Science',
      read: 0,
      gainedSkillPoints: 0,
    },
    Repair: {
      name: 'Repair',
      read: 0,
      gainedSkillPoints: 0,
    },
    Barter: {
      name: 'Barter',
      read: 0,
      gainedSkillPoints: 0,
    },
    Outdoorsman: {
      name: 'Outdoorsman',
      read: 0,
      gainedSkillPoints: 0,
    },
  },
  Drugs: {
    Buffout: {
      name: 'Buffout',
      tagged: false,
    },
    NukaCola: {
      name: 'NukaCola',
      tagged: false,
    },
    Psycho: {
      name: 'Psycho',
      tagged: false,
    },
    Cigarettes: {
      name: 'Cigarettes',
      tagged: false,
    },
    Beer: {
      name: 'Beer',
      tagged: false,
    },
    Jet: {
      name: 'Jet',
      tagged: false,
    },
    RadX: {
      name: 'RadX',
      tagged: false,
    },
    Mentats: {
      name: 'Mentats',
      tagged: false,
    },
    CharismaBoost: {
      name: 'CharismaBoost',
      tagged: false,
    },
  },
  Professions: {
    SmallGuns1: {
      tagged: false,
      available: false,
    }
  },
};

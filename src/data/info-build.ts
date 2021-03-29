export default {
  buildInfo: {
    taggedSkills: 0,
    taggedTraits: 0
  },
  SPECIAL: {
    ST: {
      name: 'STRENGTH',
      image: 'STRENGTH',
      type: 'SPECIAL',
      description: "Raw physical strength. A high Strength is good for physical Characters. Modifies: Hit Points, Melee Damage, and Carry Weight. Also you suffer hit chance penalty if you don't have enough Strength to handle your weapon, though this can be countered with increased weapon skill.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Strength'

    },
    PE: {
      name: 'PERCEPTION',
      image: 'PERCEPTION',
      type: 'SPECIAL',
      description: "The ability to see, hear, taste and notice unusual things. A high Perception is important for a sharpshooter. Modifies: Sequence, ranged combat distance modifiers, and range of sight.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Perception'

    },
    EN: {
      name: 'ENDURANCE',
      image: 'ENDURANCE',
      type: 'SPECIAL',
      description: "Stamina and physical Toughness. A Character with a high Endurance will survive where others may not. Modifies: Hit Points, Poison Resistance, Radiation Resistance, Healing Rate, and the additional Hit Points per level.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Endurance'

    },
    CH: {
      name: 'CHARISMA',
      image: 'CHARISMA',
      type: 'SPECIAL',
      description: "A combination of appearance and charm. A high Charisma is important for Characters that want to influence people with words. Modifies: NPC reactions, and Barter prices.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Charisma'

    },
    IN: {
      name: 'INTELLIGENCE',
      image: 'INTELLIGENCE',
      type: 'SPECIAL',
      description: "Knowledge, wisdom and the ability to think quickly. A high Intelligence is important for any character. Modifies: the number of new Skill points per level, dialogue options, and many Skills.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Intelligence'

    },
    AG: {
      name: 'AGILITY',
      image: 'AGILITY',
      type: 'SPECIAL',
      description: "Coordination and the ability to move well. A high Agility is important for any active character. Modifies: Action Points, Armor Class, and many Skills.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Agility'

    },
    LK: {
      name: 'LUCK',
      image: 'LUCK',
      type: 'SPECIAL',
      description: "Fate. Karma. An extremely high or low Luck will affect the Character - somehow. Events and situations will be changed by how lucky (or unlucky) your Character is.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Luck'

    },
    PL: {
      name: 'CHARACTER POINTS',
      image: 'CHARACTER POINTS',
      type: 'SPECIAL',
      description: "A pool of available points you must distribute among your SPECIAL stats. Available only when registering a new character",
      wiki: 'https://www.fonline-reloaded.net/wiki/Registration_Menu'

    },
  },
  Skills: {
    SmallGuns: {
      name: 'Small Guns',
      image: 'SmallGuns',
      type: 'Skills',
      description: "The use, care and general knowledge of small firearms - pistols, SMGs and rifles.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Small_Guns'

    },
    BigGuns: {
      name: 'Big Guns',
      image: 'BigGuns',
      type: 'Skills',
      description: "The operation and maintenance of really big guns - miniguns, rocket launchers, flamethrowers and such.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Big_Guns'

    },
    EnergyWeapons: {
      name: 'Energy Weapons',
      image: 'EnergyWeapons',
      type: 'Skills',
      description: "The care and feeding of energy-based weapons. How to arm and operate weapons that use laser or plasma technology.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Energy_Weapons'

    },
    CloseCombat: {
      name: 'Close Combat',
      image: 'CloseCombat',
      type: 'Skills',
      description: "A combination of martial arts, non-ranged weapons in hand-to-hand, or melee combat - knives, sledgehammers, spears, clubs and so on.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Close_Combat'

    },
    Scavenging: {
      name: 'Scavenging',
      image: 'Scavenging',
      type: 'Skills',
      description: "The ability to search through waste, junk, etc., for something that can be saved or used. The more time you spend on searching, the better you are at it. NOTE: Scavenging is a passive skill - meaning it can only be raised by using it and not by spending Skill Points.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Scavenging'

    },
    Throwing: {
      name: 'Throwing',
      image: 'Throwing',
      type: 'Skills',
      description: "The skill of muscle-propelled ranged weapons. Throwing knives, spears, and grenades.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Throwing'

    },
    FirstAid: {
      name: 'First Aid',
      image: 'FirstAid',
      type: 'Skills',
      description: "General healing skill. Used to heal small cuts, abrasions and other minor ills. In game terms, the use of First Aid can heal more hit points over time than just rest.",
      wiki: 'https://www.fonline-reloaded.net/wiki/First_Aid'

    },
    Doctor: {
      name: 'Doctor',
      image: 'Doctor',
      type: 'Skills',
      description: "The healing of major wounds and crippled limbs. Without this skill, it will take a much longer period of time to restore crippled limbs to use.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Doctor'

    },
    Sneak: {
      name: 'Sneak',
      image: 'Sneak',
      type: 'Skills',
      description: "Quiet movement, and the ability to remain unnoticed. If successful, you will be much harder to locate. You cannot run and sneak at the same time, unless you take Silent Running perk.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Sneak'

    },
    Lockpick: {
      name: 'Lockpick',
      image: 'Lockpick',
      type: 'Skills',
      description: "Lockpick is a skill of opening locks without the proper key.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Lockpick'

    },
    Steal: {
      name: 'Steal',
      image: 'Steal',
      type: 'Skills',
      description: "The ability to make the things of others your own. Can be used to steal from NPCs or places. NOTE: It does NOT work on players!",
      wiki: 'https://www.fonline-reloaded.net/wiki/Steal'

    },
    Traps: {
      name: 'Traps',
      image: 'Traps',
      type: 'Skills',
      description: "The Traps skill governs the player's ability to find and remove traps. The skill also has an impact on the player's ability to handle timed explosives properly. This excludes grenades, as they are handled under the Throwing skill.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Traps'

    },
    Science: {
      name: 'Science',
      image: 'Science',
      type: 'Skills',
      description: "Covers a variety of high technology skills, such as computers, biology, physics and geology.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Science'

    },
    Repair: {
      name: 'Repair',
      image: 'Repair',
      type: 'Skills',
      description: "The practical application of the Science skill for fixing broken equipment, machinery and electronics.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Repair'

    },
    Speech: {
      name: 'Speech',
      image: 'Speech',
      type: 'Skills',
      description: "The ability to communicate in practical and efficient manner. The skill of convincing others that your position is correct. The ability to lie and not get caught.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Speech'

    },
    Barter: {
      name: 'Barter',
      image: 'Barter',
      type: 'Skills',
      description: "Trading and trade-related tasks. The ability to get better prices for items you sell, and lower prices for items you buy.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Barter'

    },
    Gambling: {
      name: 'Gambling',
      image: 'Gambling',
      type: 'Skills',
      description: "The knowledge and practical skills related to wagering. The skill at cards, dice and other games. NOTE: Gambling is currently DISABLED!",
      wiki: ''

    },
    Outdoorsman: {
      name: 'Outdoorsman',
      image: 'Outdoorsman',
      type: 'Skills',
      description: "Practical knowledge of the outdoors, and the ability to live off the land. The knowledge of plants and animals. This skill increases the traveling speed on the world map and a chance to avoid Random Encounters.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Outdoorsman'

    },
  },
  Traits: {
    FastMetabolism: {
      name: 'Fast Metabolism',
      image: 'FastMetabolism',
      type: 'Traits',
      description: "Your metabolic rate is twice as normal. This means that effects of Drugs and medicines wear off twice as fast, but your body heals faster (every 30s instead of every 60s).",
      wiki: 'https://www.fonline-reloaded.net/wiki/Fast_Metabolism'

    },
    Bruiser: {
      name: 'Bruiser',
      image: 'Bruiser',
      type: 'Traits',
      description: "A little slower, but a little bigger. You may not hit as often, but they will feel it when you do! Your total number of Action Points is lowered, but your Strength increases, and your base melee damage doubles.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Bruiser'

    },
    OneHander: {
      name: 'One Hander',
      image: 'OneHander',
      type: 'Traits',
      description: "One of your hands is very dominant. You excel with single-handed weapons (+20 chance to hit), but two-handed weapons cause a problem (-40 chance to hit). You do +5 extra damage with single-handed ranged weapons.",
      wiki: 'https://www.fonline-reloaded.net/wiki/One_Hander'

    },
    Finesse: {
      name: 'Finesse',
      image: 'Finesse',
      type: 'Traits',
      description: "Your attacks show a lot of finesse. You don't do as much damage, but you cause more critical hits.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Finesse'

    },
    Kamikaze: {
      name: 'Kamikaze',
      image: 'Kamikaze',
      type: 'Traits',
      description: "By not paying attention to any threats, you do 10% more damage to enemies but your Damage Resistances are lowered by 10. NOTE: This Trait no longer affects Armor Class.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Kamikaze'

    },
    HeavyHanded: {
      name: 'Heavy Handed',
      image: 'HeavyHanded',
      type: 'Traits',
      description: "You swing harder, not better. Your attacks are very brutal, but lack finesse. You rarely cause a good critical (-20 critical power), but you always do more Unarmed damage (+5 final damage). Additionally, all your unarmed attacks knock down the opponent if a successful Strength roll is made.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Heavy_Handed'

    },
    FastShot: {
      name: 'Fast Shot',
      image: 'FastShot',
      type: 'Traits',
      description: "You don't have time to aim for an targeted attack, because you attack faster than normal people and your bullets can randomly hit different body parts. It costs you one less Action Point for guns and thrown weapons, and then one less with two-handed weapons.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Fast_Shot'

    },
    BloodyMess: {
      name: 'Bloody Mess',
      image: 'BloodyMess',
      type: 'Traits',
      description: "By some strange twist of fate, people around you die violently. You always see the worst way a person can die. Causes targets to die at 0 and less HP, but it works against you too.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Bloody_Mess'

    },
    Jinxed: {
      name: 'Jinxed',
      image: 'Jinxed',
      type: 'Traits',
      description: "The good thing is that everyone around you has more critical failures in combat, the bad thing is so do you!",
      wiki: 'https://www.fonline-reloaded.net/wiki/Jinxed'

    },
    GoodNatured: {
      name: 'Good Natured',
      image: 'GoodNatured',
      type: 'Traits',
      description: "There is a positive aura about you. People are more likely to follow you, but you can't own any slaves.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Good_Natured'

    },
    ChemReliant: {
      name: 'Chem Reliant',
      image: 'ChemReliant',
      type: 'Traits',
      description: "The drug effects last twice as long, but you regain only 2/3 the normal Hit Points while using medicines.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Chem_Reliant'

    },
    Bonehead: {
      name: 'Bonehead',
      image: 'Bonehead',
      type: 'Traits',
      description: "A thicker than average cranium means you can shrug off hits to the head that would floor others. Unfortunately that doesn't leave much room up there.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Bonehead'

    },
    Skilled: {
      name: 'Skilled',
      image: 'Skilled',
      type: 'Traits',
      description: "Since you spend more time improving your skills than a normal person, you gain 5 additional skill points per experience level. The tradeoff is that you do not gain as many extra abilities. You gain a perk every four levels.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Skilled'

    },
    Loner: {
      name: 'Loner',
      image: 'Loner',
      type: 'Traits',
      description: "You appreciate nature more than company of others. You gain 10% more experience, but you can't have any NPC followers.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Loner'

    },
  },
  Perks: {
    MoreCritical: {
      name: 'More Critical',
      image: 'MoreCritical',
      type: 'Perks',
      description: "",
      wiki: ''

    },
  },
  SupportPerks: {
    Awareness: {
      name: 'Awareness',
      image: 'Awareness',
      type: 'SupportPerks',
      description: "",
      wiki: ''

    },
  },
  Implants: {
    ST: {
      name: 'ST',
      image: 'ST',
      type: 'Implants',
      description: "",
      wiki: ''

    },
  },
  Books: {
    SmallGuns: {
      name: 'Small Guns',
      image: 'SmallGuns',
      type: 'Books',
      description: "",
      wiki: ''

    },
    FirstAid: {
      name: 'First Aid',
      image: 'FirstAid',
      type: 'Books',
      description: "",
      wiki: ''

    },
    Science: {
      name: 'Science',
      image: 'Science',
      type: 'Books',
      description: "",
      wiki: ''

    },
    Repair: {
      name: 'Repair',
      image: 'Repair',
      type: 'Books',
      description: "",
      wiki: ''

    },
    Barter: {
      name: 'Barter',
      image: 'Barter',
      type: 'Books',
      description: "",
      wiki: ''

    },
    Outdoorsman: {
      name: 'Outdoorsman',
      image: 'Outdoorsman',
      type: 'Books',
      description: "",
      wiki: ''

    },
  },
  Drugs: {
    Buffout: {
      name: 'Buffout',
      image: 'Buffout',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    NukaCola: {
      name: 'Nuka Cola',
      image: 'NukaCola',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    Psycho: {
      name: 'Psycho',
      image: 'Psycho',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    Cigarettes: {
      name: 'Cigarettes',
      image: 'Cigarettes',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    Beer: {
      name: 'Beer',
      image: 'Beer',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    Jet: {
      name: 'Jet',
      image: 'Jet',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    RadX: {
      name: 'RadX',
      image: 'RadX',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    Mentats: {
      name: 'Mentats',
      image: 'Mentats',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
    CharismaBoost: {
      name: 'CharismaBoost',
      image: 'CharismaBoost',
      type: 'Drugs',
      description: "",
      wiki: ''

    },
  },
  Professions: {},
  CharStats: {
    HitPoints: {
      name: 'Hit Points',
      image: 'HitPoints',
      type: 'CharStats',
      description: "Hit Points (or HP) define the amount of damage your character can take before dying.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Hit_Points'

    },
    ArmorClass: {
      name: 'Armor Class',
      image: 'ArmorClass',
      type: 'CharStats',
      description: "Modifies the chance to hit this particular character.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Armor_Class'

    },
    ActionPoints: {
      name: 'Action Points',
      image: 'ActionPoints',
      type: 'CharStats',
      description: "Action Points (AP) are the core of the combat system in the Fallout series. Each player Character performs actions per time in Real-Time mode, and actions per turn in Turn-Based mode. Actions are thus limited by how many Action Points you have, which regenerate depending on your combat mode. Walking, shooting, reloading, healing, picking locks, recovering from a knockdown, picking up and dropping items, are some examples of actions, each of which has an AP cost. A Character's AP is determined by their build, and Agility plays a major role.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Action_Points'

    },
    CarryWeight: {
      name: 'Carry Weight',
      image: 'CarryWeight',
      type: 'CharStats',
      description: "A character's Carry weight defines the amount of equipment they can carry, measured in kilograms.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Carry_Weight'

    },
    MeleeDamage: {
      name: 'Melee Damage',
      image: 'MeleeDamage',
      type: 'CharStats',
      description: "The damage dealt using close combat weapons. Or your bare fists.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Close_Combat'

    },
    DamageResistance: {
      name: 'Damage Resistance',
      image: 'DamageResistance',
      type: 'CharStats',
      description: "Damage Resistance (DR) is a derived statistic in the SPECIAL character system that reduces damage done to a critter.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Damage_Resistance'

    },
    PoisonResistance: {
      name: 'Poison Resistance',
      image: 'PoisonResistance',
      type: 'CharStats',
      description: "Poison resistance reduces the duration of character's poisoning.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Poisoned'

    },
    RadResisitance: {
      name: 'Rad Resisitance',
      image: 'RadResisitance',
      type: 'CharStats',
      description: "Radiation resistance lowers the percentage of background radiation that affects the player. It can be temporarily boosted by using Rad-X.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Radiated'

    },
    Sequence: {
      name: 'Sequence',
      image: 'Sequence',
      type: 'CharStats',
      description: "It's an ordered list of events. Characters with higher sequence can act sooner in Turn Based combat.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Sequence'

    },
    HealingRate: {
      name: 'Healing Rate',
      image: 'HealingRate',
      type: 'CharStats',
      description: "Healing Rate is a Character's ability to regenerate HP over time. Some lost Hit Points regenerate every minute (or 30 seconds if you have Fast Metabolism) based on a percentage of the Character's total health, rounded down, but no less than 3 points.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Healing_Rate'

    },
    CriticalChance: {
      name: 'Critical Chance',
      image: 'CriticalChance',
      type: 'CharStats',
      description: "Critical Chance is the probability of scoring a Critical Hit on a target.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Critical_Chance'

    },
    PartyPoints: {
      name: 'Party Points',
      image: 'PartyPoints',
      type: 'CharStats',
      description: "Party Points determine the number of followers a character can lead.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Followers'

    },
    MaximumPerks: {
      name: 'Maximum Perks',
      image: 'MaximumPerks',
      type: 'CharStats',
      description: "The total amount of Perks a character can obtain. Modified by the Skilled trait.",
      wiki: ''

    },
    SkillPointsPerLevel: {
      name: 'Skill Points/Level',
      image: 'SkillPoints/Level',
      type: 'CharStats',
      description: "The amount of Skill Points a character gets upon gaining a level.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Skill_Points'

    },
    HitPointsPerLevel: {
      name: 'Hit Points/Level',
      image: 'HitPoints/Level',
      type: 'CharStats',
      description: "The amount of Hit Points a character gets upon gaining a level.",
      wiki: 'https://www.fonline-reloaded.net/wiki/Hit_Points'

    },
  },
};

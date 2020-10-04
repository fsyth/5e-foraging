# Forage

A foraging calculator for use in D&D 5e.

### Motivation

Our homebrew 5e campaign involves crafting and survival mechanics based on *The Legend of Zelda: Breath of the Wild*, detailed below.

However, making many foraging checks requires rolling a lot of dice and table look-ups. This tool was made to speed up that process.

### Foraging (with this tool)

Set the environment, the forager's survival modifier, and the food availability (DC). If the player passes their foraging check, click 'Forage!'. The ingredients found will appear below.

The ingredient lists and foraging lists are designed to be as easy as possible to extend in the code as needed. In the future, it would be nice to be able to do this through the UI.

### Foraging (with dice)

This rule replaces the standard foraging rules for food in the *DM Guide* to instead find a number of specific ingredients, rather than generic pounds of food.

A foraging character makes a Widom (Survival) check with the DC determined by the abundance of food in the region.

##### Foraging DCs
|Food Availability    |DC |Ingredients Found|
|:--------------------|:--|:----------------|
|Abundant             |10 |1d4+1d6+1d8+1d12 |
|Limited              |15 |1d4+1d6+1d8      |
|Very  little, if any |20 |1d4+1d6          |

If multiple characters forage, each character makes a separate check. Each check takes 2 hours to complete and has a 1 in 6 chance of triggering an ambient encounter per group exploring the wilderness.

On a successful check, the forager rolls a number of dice for the ingredients found, dependent on the food availability. Each die corresponds to a different kind of ingredient, with the rolled value representing the amount found.

The DM rolls on the ingredients table for the region to determine which die corresponds to which kind of ingredient, factoring in the maximum ingredient rarity for each die. Optionally, the DM can reroll duplicates for greater variety.

##### Foraging Results
|Ingredient Die |Possible Rarities           |
|:-------------:|:---------------------------|
|d12            |Common (d6)                 |
|d8             |Common (d6)                 |
|d6             |Common, Uncommon (d10)      |
|d4             |Common, Uncommon, Rare (d12)|

The forager's Wisdom (Survival) modifier (minimum of 0) is added to each of the two largest die rolls, prioritising the larger of the dice in the event of ties. This usually helps to find extra common ingredients, but can sometimes give an occasional windfall of uncommon or rare ingredients if the forager was unlucky in finding the more common ingredients, making up for it.

> ##### Foraging for Water
>
>The rules for searching for water are unchanged from the *DM Guide*.
>
> On a successful Wisdom (Survival) check, with the DC determined by the abundance of water in the region, the forager finds a number of gallons of water equal to 1d6 + their Wisdom modifier.
> This can be done at the same time as foraging for food, but requires a separate check.

#### Ingredients Tables

Every region should have an ingredients table with 6 common ingredients, 4 uncommon ingredients and 2 rare ingredients. The ingredients should be appropriate for the environment. Ingredients with more powerful effects tend to be rarer.

##### Sample Ingredients Table
|Roll|Ingredient                             |Rarity  |
|:--:|:--------------------------------------|:------:|
| 1  |Apple                                  |Common  |
| 2  |Herb                                   |Common  |
| 3  |Shroom                                 |Common  |
| 4  |Spicy Pepper                           |Common  |
| 5  |Stamella Shroom                        |Common  |
| 6  |Raw Meat (Woodland Boar)               |Common  |
| 7  |Courser Bee Honey (Insect Swarm 50%)   |Uncommon|
| 8  |Endura Shroom                          |Uncommon|
| 9  |Hearty Radish                          |Uncommon|
|10  |Summerwing Butterfly (Sleight of hand) |Uncommon|
|11  |Endura Carrot                          |Rare    |
|12  |Rugged Rhino Beetle (Stealth)          |Rare    |


#### Additional Skill Checks

Certain ingredients require an additional check to obtain, noted in parentheses in the ingredients table.

Some critters flee when spooked and are too quick to catch if they detect you, so require a succesful Dexterity (Stealth) check to sneak up on and catch. Others are typically already in flight, so require a successful Dexterity (Sleight of hand) check to grab in mid-air. 

You can make one check per critter, or one for the whole group, but decide on a system and stick to it. Of course, the players may have other means to catch these critters.

##### Critter Ability Checks
|Critter               |Check                            |
|:---------------------|:--------------------------------|
|Cricket, Frog, Lizard |DC 10 Dexterity (Stealth)        |
|Beetle                |DC 15 Dexterity (Stealth)        |
|Butterfly, Firefly    |DC 10 Dexterity (Sleight of hand)|
|Darner, Fairy         |DC 15 Dexterity (Sleight of hand)|

#### Hunting

Some ingredients are obtained through hunting, with the animal indicated in the ingredients table in parentheses. These can be resolved with a combat encounter against the animal, who will either fight or flee.

The roll for ingredients found determines how much meat can be butchered from the animal. Therefore a particularly high or low roll might mean an encounter with a tougher or weaker specimen. It's straightforward to adjust the hit points of the animal within its statblock range, or even change how aggressive its behaviour is. On a max roll, if the animal has a giant or dire variant, consider using that instead.

Alternatively, the roll might correspond to multiple animals, particularly if each animal is Small or smaller, or if it only makes sense to gather one ingredient per animal.

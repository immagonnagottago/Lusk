const ROOMS = {

  // ============================================================
  // HARBOUR DISTRICT
  // ============================================================

  "the_bronze_anchor": {
    district: "harbour",
    name: "The Bronze Anchor Tavern",
    desc: "A low-beamed common room thick with pipe smoke and the smell of salted fish. Sailors crowd mismatched tables, arguing in half a dozen languages. A broad-shouldered woman behind the bar refills cups without being asked. The floorboards are stained dark from a century of spilled drink. Through a salt-crusted window, you can make out the shimmer of the harbour.",
    exits: {
      n: { to: "harbour_promenade", desc: "Rough-hewn steps lead up to the harbour promenade and open air." },
      e: { to: "copper_lane", desc: "A narrow side door opens onto Copper Lane." },
      u: { to: "anchor_upstairs", desc: "A creaking staircase climbs to the inn's upper rooms." }
    }
  },

  "harbour_promenade": {
    district: "harbour",
    name: "Harbour Promenade",
    desc: "A long sweep of stone walkway along the inner harbour, busy at all hours. Ships of every size and flag are moored below — fat-bellied merchant carracks, lean brigantines, low fishing skiffs, and vessels whose rigs you don't recognise. The air is warm and briny. Dockworkers move cargo in human chains down to the quays. Gulls and stranger birds wheel overhead. To the south, the open sea glitters hard and bright.",
    exits: {
      n: { to: "sun_plaza", desc: "The promenade climbs north toward Sun Plaza." },
      e: { to: "east_quay", desc: "The promenade continues to the East Quay and the merchant fleet moorings." },
      w: { to: "west_quay", desc: "The promenade runs west toward the West Quay and the fishing boats." },
      s: { to: "the_bronze_anchor", desc: "Steps lead down into the Bronze Anchor Tavern." },
      d: { to: "lower_docks", desc: "Iron rungs bolted into the sea wall descend to the lower docks." }
    }
  },

  "east_quay": {
    district: "harbour",
    name: "East Quay",
    desc: "The merchant end of the harbour, smelling of timber, tar, and exotic spices from opened crates. Customs officers in blue coats inspect manifests with studied boredom. Porters argue over loads. Several ships are being careened — tipped on their sides for hull repairs — and the hammering rings off the water. A chandlery and a rope-walk face the quay, both doing brisk business.",
    exits: {
      w: { to: "harbour_promenade", desc: "The promenade runs west back toward the centre." },
      n: { to: "copper_lane", desc: "A steep street climbs north into the city proper." },
      e: { to: "harbourmaster_office", desc: "A squat building at the quay's edge bears the harbourmaster's seal." },
      d: { to: "lower_docks", desc: "Wooden stairs descend to the lower dock level." }
    }
  },

  "west_quay": {
    district: "harbour",
    name: "West Quay",
    desc: "The fishing fleet is in, and the smell announces it before you arrive. Nets are spread across the stones to dry, patched by old hands moving from long habit. The catch is being sorted, iced, and loaded onto carts for the morning market. Children sit on bollards watching the water. A small shrine to some sea-deity, strung with dried kelp and small silver fish-shaped tokens, occupies a niche in the harbour wall.",
    exits: {
      e: { to: "harbour_promenade", desc: "The promenade runs east toward the main harbour." },
      n: { to: "tanners_street", desc: "A narrow street climbs north into the western quarters." },
      d: { to: "lower_docks", desc: "A ramp of salt-roughened planks leads down to the lower docks." }
    }
  },

  "harbourmaster_office": {
    district: "harbour",
    name: "Harbourmaster's Office",
    desc: "A squat, salt-bleached building wedged between the East Quay and the sea wall, its windows facing the water at all times. Inside, the walls are covered in tide tables, shipping registries, and a large chalked board listing every vessel currently in port, its flag, its declared cargo, and its departure date. The harbourmaster herself is a compact, unhurried woman with ink on her fingers and an expression that suggests she has heard every lie a ship's captain has ever told.",
    exits: {
      w: { to: "east_quay", desc: "The office door opens west onto the East Quay." },
      d: { to: "lower_docks", desc: "A private stair descends to the lower docks." }
    }
  },

  "lower_docks": {
    district: "harbour",
    name: "Lower Docks",
    desc: "The waterline itself — a sloshing, shadowed world beneath the promenade. The stone pillars holding up the city above are encrusted with barnacles and dark weed. Small boats are tied here, some clearly in long disuse. The light comes in low and broken off the water. It is quieter than it should be. Somewhere in the dimness, something drips steadily. A rusted iron door is set into one of the pillars.",
    exits: {
      u: { to: "harbour_promenade", desc: "Iron rungs lead back up to the harbour promenade." },
      e: { to: "lower_docks_east", desc: "The dock walkway continues east beneath the East Quay." },
      w: { to: "lower_docks_west", desc: "The walkway runs west under the fishing quay." },
      d: { to: "sewer_entrance", desc: "A trapdoor in the dock planking, its lock recently broken, drops into darkness." }
    }
  },

  "lower_docks_east": {
    district: "harbour",
    name: "Lower Docks — East Section",
    desc: "The easternmost reach of the lower dock walkway, beneath the East Quay. The light barely reaches here. The sound of the merchant fleet overhead — creaking hull timbers, shouted orders, the thud of cargo — carries clearly through the stones. Several small rowing boats are moored in the darkness, their registration marks rubbed off. A narrow passage leads into the stone itself, its entrance hung with a strip of old canvas.",
    exits: {
      w: { to: "lower_docks", desc: "The walkway runs west along the lower docks." },
      n: { to: "sewer_east_branch", desc: "The passage in the wall leads north into the sewer system." }
    }
  },

  "lower_docks_west": {
    district: "harbour",
    name: "Lower Docks — West Section",
    desc: "Under the West Quay, the dock level is lower — some of this section floods at high tide, and the watermark is clearly visible on the pillars. The wood is soft and black. Old fishing equipment is stored here: broken traps, rotting nets, a stack of floats. A smell of deep water and old fish. Something moves in the water near the wall, not a fish.",
    exits: {
      e: { to: "lower_docks", desc: "The walkway runs east along the lower docks." },
      d: { to: "sewer_entrance", desc: "An iron ladder descends into a flooded lower passage." }
    }
  },

  // ============================================================
  // OLD QUARTER
  // ============================================================

  "sun_plaza": {
    district: "old_quarter",
    name: "Sun Plaza",
    desc: "The heart of Lusk spreads open here — a wide, sun-hammered square of pale stone worn smooth by generations of foot traffic. Vendors hawk fruit, charms, and news from canvas stalls. Children dart between the legs of merchants. At the centre, a saltwater fountain carved in the shape of a coiling sea-serpent runs constantly, fed by some unseen pipe from the harbour below. The city rises around you in every direction, its towers leaning slightly inward as though listening.",
    exits: {
      n: { to: "silk_market", desc: "The entrance to the Silk Market, draped in coloured awnings." },
      s: { to: "harbour_promenade", desc: "The broad slope of the promenade descends toward the water." },
      e: { to: "temple_row", desc: "A cobbled avenue lined with the competing facades of a dozen temples." },
      w: { to: "copper_lane", desc: "Copper Lane twists west into the older part of the city." },
      u: { to: "sun_plaza_bridge", desc: "A rope-and-plank bridge arches over the plaza from a merchant's gallery above." }
    }
  },

  "copper_lane": {
    district: "old_quarter",
    name: "Copper Lane",
    desc: "One of Lusk's oldest streets, narrow enough that neighbours could shake hands from their opposing windows — and probably do. The buildings here have been added to, subdivided, and repurposed so many times that the ground floor of one structure becomes the third floor of the next. Copper lanterns hang on brackets at uneven heights, giving the lane a warm, slightly disorienting glow even in daylight. A smell of cooking, burned herbs, and old stone.",
    exits: {
      n: { to: "old_wall_gate", desc: "The lane narrows further north, toward the old wall gate." },
      s: { to: "the_bronze_anchor", desc: "Steps descend south toward the Bronze Anchor Tavern." },
      e: { to: "sun_plaza", desc: "Copper Lane opens east onto Sun Plaza." },
      w: { to: "tanners_street", desc: "A cross-lane runs west toward Tanners' Street." },
      u: { to: "copper_lane_bridge", desc: "A narrow stone bridge connects the upper floors of two buildings above." }
    }
  },

  "tanners_street": {
    district: "old_quarter",
    name: "Tanners' Street",
    desc: "The smell here is forceful and specific. The tanneries that gave this street its name are still operating — you can hear the churning of hides and the shouts of workers through open workshop doors. The street is stained in rust and ochre. Despite the smell, it is busy: raw materials come in from the west quay, finished leather goods go east toward the markets. A cluster of secondhand shops operates between the workshops, selling boots, belts, and saddlery.",
    exits: {
      e: { to: "copper_lane", desc: "Copper Lane runs east." },
      n: { to: "old_wall_gate", desc: "The street climbs north toward the old wall." },
      s: { to: "west_quay", desc: "Tanners' Street runs south down to the West Quay." }
    }
  },

  "old_canal_steps": {
    district: "old_quarter",
    name: "Old Canal Steps",
    desc: "A broad staircase of greenish stone descends to the edge of one of Lusk's inner canals. The water is dark and moves slowly, carrying flower petals, orange rinds, and the occasional paper lantern. Flat-bottomed canal boats drift past, poled by figures in wide hats. The buildings here crowd the water's edge, their lower floors stained with centuries of high tides. Washing hangs between the balconies above.",
    exits: {
      n: { to: "copper_lane", desc: "Copper Lane runs north through the old quarter." },
      e: { to: "sun_plaza", desc: "The canal steps give way to the broad approach of Sun Plaza." },
      d: { to: "canal_dock", desc: "Slick stone steps continue down to the waterline and a low wooden dock." }
    }
  },

  "canal_dock": {
    district: "old_quarter",
    name: "Canal Dock",
    desc: "The foot of the Old Canal Steps, at waterline. A small dock of dark, wet wood bobs gently with the canal's movement. A flat-bottomed water taxi is tied here, its operator asleep under a hat. The underside of the city bridges are visible from here — mossy stone arches, and the occasional bundle of rope or rusted chain hanging into the water. The canal here smells of mud and minerals rather than the sea.",
    exits: {
      u: { to: "old_canal_steps", desc: "The stone steps climb back up to street level." },
      n: { to: "lower_docks", desc: "The canal dock connects under the harbour-side buildings to the lower docks." }
    }
  },

  "old_wall_gate": {
    district: "old_quarter",
    name: "Old Wall Gate",
    desc: "A gatehouse from an earlier, smaller version of Lusk — the old city wall now stands deep in the middle of the island, long since absorbed by expansion. The gate itself is open and unguarded, serving now as a covered thoroughfare. The stonework is ancient and beautifully carved: ships, sea-creatures, and a procession of figures whose significance has been forgotten. Someone has placed fresh flowers at the base of the arch.",
    exits: {
      s: { to: "copper_lane", desc: "Copper Lane descends south through the old quarter." },
      n: { to: "middle_city_approach", desc: "Beyond the old gate, the city rises steeply north." },
      e: { to: "scholars_alley", desc: "An archway in the old wall leads east into Scholars' Alley." },
      u: { to: "gatehouse_top", desc: "A worn staircase inside the gatehouse leads to the top of the old wall." }
    }
  },

  "the_broken_wheel": {
    district: "old_quarter",
    name: "The Broken Wheel",
    desc: "A low drinking house that has been operating under various names and owners for at least two hundred years, the current name a reference to a cartwheel that came through the front wall during some forgotten incident and was never fully removed — its iron rim is still visible in the plaster above the door. The clientele are old quarter regulars: workers, insomniacs, people who prefer drinking in the afternoon. No one bothers anyone else.",
    exits: {
      e: { to: "tanners_street", desc: "The door opens east onto Tanners' Street." },
      d: { to: "sewer_west_branch", desc: "A loose flagstone in the cellar lifts to reveal an iron ladder going down." }
    }
  },

  "the_narrow": {
    district: "old_quarter",
    name: "The Narrow",
    desc: "A passage so tight between two ancient buildings that you must turn sideways to pass through. The walls above lean together until they nearly touch, three storeys up. It is inexplicably popular as a shortcut despite — or perhaps because of — the squeeze. Someone has hung a string of coloured glass beads across the entrance at head height, replacing them whenever they break. The sound of the city falls away to almost nothing in the middle.",
    exits: {
      n: { to: "old_wall_gate", desc: "The Narrow opens north near the old wall gate." },
      s: { to: "copper_lane", desc: "The passage opens south onto Copper Lane." }
    }
  },

  // ============================================================
  // THE MARKETS
  // ============================================================

  "silk_market": {
    district: "markets",
    name: "The Silk Market",
    desc: "A covered market of considerable age, its vaulted roof of iron and old glass letting in columns of dusty light. The stalls here sell cloth, dye, thread, and finished garments from every corner of the known world. The noise is constant: haggling in multiple languages, the snap of fabric being shaken out, the clatter of a dropped bolt. The colours are extraordinary — bolts of cloth in violent orange, deep indigo, and red so bright it hurts. Somewhere nearby, a musician is playing a stringed instrument no one has bothered to name.",
    exits: {
      s: { to: "sun_plaza", desc: "The market's main entrance opens south onto Sun Plaza." },
      n: { to: "spice_alley", desc: "A corridor of stalls leads north into Spice Alley." },
      e: { to: "money_changers_row", desc: "The eastern aisle runs to the money changers' booths." },
      u: { to: "silk_market_gallery", desc: "A wrought-iron staircase climbs to a gallery of more exclusive traders." }
    }
  },

  "silk_market_gallery": {
    district: "markets",
    name: "Silk Market — Upper Gallery",
    desc: "The upper level of the Silk Market, quieter and considerably more expensive. The traders here operate from proper enclosed shops rather than open stalls, and they are not in any hurry. The goods on display are extraordinary: cloth so fine it appears to dissolve at the edges, dyes that seem to shift colour in different lights, embroidery that must have taken years. One dealer works behind a locked glass case, by appointment only. The noise of the market floor below rises up, softened by distance.",
    exits: {
      d: { to: "silk_market", desc: "The iron staircase descends to the main market floor." },
      e: { to: "sun_plaza_bridge", desc: "A rope-and-plank bridge connects east above Sun Plaza." }
    }
  },

  "spice_alley": {
    district: "markets",
    name: "Spice Alley",
    desc: "The air here is so thick with competing smells that new arrivals often stop walking for a moment, simply overwhelmed. Open sacks of ground spice line the passage: yellows, reds, deep browns, pale whites. The vendors here are sharp-eyed and patient, letting the goods sell themselves. Some of what is for sale has no name in the common tongue — small paper packets labelled in scripts from distant places, their contents unknown to most buyers.",
    exits: {
      s: { to: "silk_market", desc: "Spice Alley opens south back into the Silk Market." },
      n: { to: "middle_city_approach", desc: "The alley climbs north toward the middle city." },
      e: { to: "scholars_alley", desc: "A side passage runs east." }
    }
  },

  "money_changers_row": {
    district: "markets",
    name: "Money Changers' Row",
    desc: "A cramped colonnade of narrow booths, each occupied by a changer and their scales, their foreign coin trays, their ledgers, and their assistants. The changers themselves are a cosmopolitan assortment, many of them conducting business in two or three languages at once. The rates are posted on small chalked boards, crossed out and rewritten throughout the day. Lusk's own currency — the mote, a small coin with a hole in its centre — is sold and bought here alongside half a hundred foreign denominations.",
    exits: {
      w: { to: "silk_market", desc: "The row opens west back into the Silk Market." },
      n: { to: "guildhall_approach", desc: "A broad street leads north toward the guild district." }
    }
  },

  "the_provisions_yard": {
    district: "markets",
    name: "The Provisions Yard",
    desc: "An open yard behind the Silk Market, surrounded by low warehouses and loading bays. This is where the market's back business happens — bulk deliveries, restocking, arguments over spoiled goods. Barrels and crates are stacked in orderly confusion. Several large cats sit atop a pile of grain sacks, watching everything. A food stall operates out of a converted cart near the yard's gate, selling dense, flat bread and roasted meat to the workers.",
    exits: {
      s: { to: "silk_market", desc: "The yard connects south through a service entrance into the Silk Market." },
      e: { to: "money_changers_row", desc: "A gate in the yard wall opens east toward the money changers." }
    }
  },

  "sun_plaza_bridge": {
    district: "markets",
    name: "Sun Plaza — Merchant's Bridge",
    desc: "A rope-and-plank bridge spanning the gap above Sun Plaza, connecting a gallery of upper-floor merchants on its east end to a storage loft on the west. The bridge sways slightly when walked, and the drop to the plaza stones below is considerable. From here the fountain looks small and the crowd like a single moving thing. A spice merchant has colonised the bridge's midpoint with a display of hanging dried goods — peppers, herbs, small bundles of bark.",
    exits: {
      d: { to: "sun_plaza", desc: "Rope ladders descend to Sun Plaza below." },
      w: { to: "silk_market_gallery", desc: "The bridge connects west to the Silk Market's upper gallery." }
    }
  },

  // ============================================================
  // TEMPLE DISTRICT
  // ============================================================

  "temple_row": {
    district: "temples",
    name: "Temple Row",
    desc: "An avenue of competitive piety. The temples here face each other across a wide cobbled street, each more elaborate than its neighbour — carved facades, gilded doors, smoking incense censers on the steps, priests and acolytes in a dozen different robes moving in and out. The gods being worshipped range from familiar to wholly alien. One low building has no sign, no windows, and a queue of people waiting patiently outside. You don't know what they're waiting for.",
    exits: {
      w: { to: "sun_plaza", desc: "Temple Row runs west to Sun Plaza." },
      n: { to: "the_wayfarers_garden", desc: "The row ends at the gate of the Wayfarer's Garden." },
      e: { to: "scholars_alley", desc: "A passage between two temple walls leads east." },
      s: { to: "the_unnamed_temple", desc: "The plain door of the building with no sign." },
      u: { to: "the_red_temple", desc: "Broad steps climb to the facade of the Red Temple." }
    }
  },

  "the_wayfarers_garden": {
    district: "temples",
    name: "The Wayfarer's Garden",
    desc: "A small public garden tucked between two leaning buildings, improbably green. Fig trees and bougainvillea spill over low walls. Stone benches are occupied by old men playing tiles and a young woman reading a thick, cloth-bound book. A painted sign on the gate reads: ALL ARE WELCOME — DO NOT FEED THE BIRDS. The birds, several large and confident ravens, are being fed anyway.",
    exits: {
      s: { to: "temple_row", desc: "The garden's south gate opens onto Temple Row." },
      w: { to: "sun_plaza", desc: "A short path leads west back toward Sun Plaza." },
      e: { to: "scholars_alley", desc: "A narrow gap between buildings leads east into Scholars' Alley." }
    }
  },

  "scholars_alley": {
    district: "temples",
    name: "Scholars' Alley",
    desc: "Narrow, quiet, and overflowing with books. The buildings here have had their ground floors converted into open-fronted shops selling manuscripts, printed texts, maps, and objects of uncertain scholarly purpose. The scholars themselves are visible through upper windows, bent over desks. A noticeboard outside the largest building is thick with pinned papers: notices of lectures, requests for research assistants, disputes over translation. Someone has pinned a hand-drawn map of something, then crossed it out completely.",
    exits: {
      w: { to: "temple_row", desc: "Scholars' Alley opens west onto Temple Row." },
      n: { to: "old_wall_gate", desc: "The alley runs north to the old wall gate." },
      e: { to: "the_wayfarers_garden", desc: "A gate in the alley wall leads east into the Wayfarer's Garden." },
      u: { to: "archive_reading_room", desc: "An external iron staircase leads up to the Archive Reading Room." }
    }
  },

  "archive_reading_room": {
    district: "temples",
    name: "Archive Reading Room",
    desc: "A long room with high windows and a smell of paper, wax, and slow time. Reading tables run its length, most of them occupied by scholars bent over documents, maps, or objects laid on cloth. The archive itself is through a locked door at the far end, accessible only with a reader's pass. The librarian — an elderly person of indeterminate age, wearing ink-stained grey — moves silently between the tables, replacing documents and occasionally correcting people's Latin.",
    exits: {
      d: { to: "scholars_alley", desc: "The iron staircase descends to Scholars' Alley." }
    }
  },

  "the_unnamed_temple": {
    district: "temples",
    name: "The Unnamed Temple — Anteroom",
    desc: "The inside of the building with no sign. The anteroom is plain white plaster, lit by a single oil lamp. A dozen wooden chairs face a curtained doorway. The queue you saw outside has become a seated wait in here. No one speaks. No one looks at anyone else. A small table holds cups of water and nothing else. Whatever is behind the curtain, the people waiting for it are very calm.",
    exits: {
      n: { to: "temple_row", desc: "The plain door opens north back onto Temple Row." }
    }
  },

  "the_red_temple": {
    district: "temples",
    name: "The Red Temple — Steps",
    desc: "The steps of the most aggressively decorated temple on the row, its facade covered in carved figures engaged in acts of commerce, war, harvest, and celebration — all in vivid red-painted stone. The god worshipped here appears to preside over abundance in general, and the priests reflect this: well-fed, richly robed, and extremely willing to discuss the faith with anyone who pauses. The incense from the censers on the steps is thick and sweet and slightly dizzying.",
    exits: {
      d: { to: "temple_row", desc: "The steps descend to Temple Row." }
    }
  },

  // ============================================================
  // MIDDLE CITY
  // ============================================================

  "middle_city_approach": {
    district: "middle_city",
    name: "Middle City Approach",
    desc: "The city begins to climb here in earnest. The streets grow wider and the buildings taller — four and five storeys, their upper floors connected by wooden and stone bridges that create a broken second layer above the street. The architecture becomes more deliberately impressive: carved lintels, tiled facades, wrought-iron balconies overflowing with plants. The population shifts subtly — better-dressed, moving with more purpose, less inclined to linger. The towers of the government district are visible above the rooftops.",
    exits: {
      s: { to: "old_wall_gate", desc: "The approach descends south toward the old wall gate." },
      n: { to: "guildhall_approach", desc: "The road climbs north toward the guild district." },
      e: { to: "spice_alley", desc: "A side street runs east into Spice Alley." },
      u: { to: "bridge_of_seven_arches", desc: "A stone staircase connects to the Bridge of Seven Arches above." },
      w: { to: "the_long_stair", desc: "A broad public staircase cuts directly up the slope." }
    }
  },

  "guildhall_approach": {
    district: "middle_city",
    name: "Guildhall Approach",
    desc: "A wide, purposeful street leading to Lusk's cluster of guild buildings. The guilds have money and they spend it on visible architecture — bronze plaques, polished stone, windows of expensive coloured glass. The street itself is well-maintained, the stones fitted tight and swept regularly. Guild messengers move quickly between buildings. At the end of the street, the Guildhall itself rises: a massive building that has been added to by every generation of guild masters, resulting in something impressive and slightly incoherent.",
    exits: {
      s: { to: "middle_city_approach", desc: "The approach descends south toward the middle city." },
      w: { to: "money_changers_row", desc: "A side street runs west toward the money changers." },
      n: { to: "government_district_gate", desc: "Beyond the guildhall, a guarded gate marks the government district." },
      e: { to: "the_mercantile_baths", desc: "The bathhouse entrance, marked by a plume of steam." },
      u: { to: "guildhall_upper_bridge", desc: "A covered bridge connects to the guildhall's upper floors from an adjacent building." }
    }
  },

  "the_mercantile_baths": {
    district: "middle_city",
    name: "The Mercantile Baths",
    desc: "A large, steam-filled bathhouse catering primarily to merchants and guild employees, though anyone who can pay the entrance fee is welcome. The changing rooms are cedar-panelled and the pool is heated by a furnace below. Business is conducted here as much as in any counting house — conversations held in the steam are considered private by long tradition. A barber operates from a chair near the entrance, doing steady work.",
    exits: {
      w: { to: "guildhall_approach", desc: "The baths' entrance opens west onto the Guildhall Approach." }
    }
  },

  "the_long_stair": {
    district: "middle_city",
    name: "The Long Stair",
    desc: "A broad public staircase cutting directly up the slope between the old quarter and the middle city, flanked by iron railings and lined with small vendors selling food, flowers, and amulets from folding tables. It is the fastest route between the two levels of the city and is always busy. People stop to rest on the landings, catching their breath and watching the city below. Halfway up, someone has painted a large mural of the harbour on the retaining wall: ships arriving, ships departing, the sea going in every direction.",
    exits: {
      d: { to: "old_wall_gate", desc: "The stair descends to the old wall gate level." },
      u: { to: "middle_city_approach", desc: "The stair climbs to the middle city approach." }
    }
  },

  // ============================================================
  // GOVERNMENT DISTRICT
  // ============================================================

  "government_district_gate": {
    district: "government",
    name: "Government District Gate",
    desc: "A pair of iron gates, open but watched by two guards in the livery of Lusk's civic authority — dark blue and salt-white, with the city's device (a coiled rope around an anchor) on their breastplates. They watch without obvious hostility; anyone may enter, but they are watching. Beyond the gates, the character of the city changes: the streets widen further, the buildings grow to four and five storeys with colonnaded ground floors, and the noise of commerce drops away. The towers of the highest government buildings are visible above, their flags catching the harbour wind.",
    exits: {
      s: { to: "guildhall_approach", desc: "The approach descends south toward the guild district." },
      n: { to: "civic_plaza", desc: "Beyond the gate, the civic plaza opens to the north." }
    }
  },

  "civic_plaza": {
    district: "government",
    name: "Civic Plaza",
    desc: "A grand open space at the elevated heart of the city, deliberately impressive. The paving is white stone, kept scrupulously clean. Official buildings line three sides — courts, records offices, the treasury, and others whose function is expressed only in carved lettering above closed doors. On the fourth side, the city falls away in a long view south: rooftops stepping down to the harbour and the sea beyond. A bronze statue of a figure holding up a set of balanced scales stands at the centre. The figure's face has been worn away by weather.",
    exits: {
      s: { to: "government_district_gate", desc: "The gate and the descent to the guildhall district lie south." },
      e: { to: "records_tower_base", desc: "The records tower rises to the east, its entrance at ground level." },
      w: { to: "court_of_arbiters", desc: "The court building occupies the western side of the plaza." },
      n: { to: "the_treasury_steps", desc: "The broad steps of the treasury building rise to the north." },
      u: { to: "civic_plaza_upper_terrace", desc: "A grand staircase climbs to the upper terrace." }
    }
  },

  "records_tower_base": {
    district: "government",
    name: "Records Tower — Base",
    desc: "The base of Lusk's central records tower, a tall and narrow building that leans almost imperceptibly toward the harbour. The ground floor is a public office, staffed by clerks who process requests for documents, titles, and historical records with professional slowness. The queue moves, but it does not hurry. The walls are lined with pigeonholes stuffed with scrolls. A circular staircase at the back climbs up into the tower proper, access restricted beyond the third floor.",
    exits: {
      w: { to: "civic_plaza", desc: "The tower entrance opens west onto Civic Plaza." },
      u: { to: "records_tower_top", desc: "The circular staircase climbs to the upper tower floors." }
    }
  },

  "records_tower_top": {
    district: "government",
    name: "Records Tower — Upper Floor",
    desc: "Near the top of the records tower, in a circular room with windows on all sides. The views from here are the finest in Lusk — the full circuit of the island is visible, the sea bright in every direction. The city sprawls below in extraordinary complexity: the tangled old quarter, the ordered grid of the middle city, the harbour full of ships. You can pick out the individual bridges and rooftop passages from up here. The horizon shows three or four other islands, the nearest with what might be another city.",
    exits: {
      d: { to: "records_tower_base", desc: "The circular staircase descends to the tower base." }
    }
  },

  "civic_plaza_upper_terrace": {
    district: "government",
    name: "Civic Plaza — Upper Terrace",
    desc: "A wide stone terrace above the main plaza, reached by the grand staircase. It is used for official assemblies and public announcements; today it is empty except for a sweeper moving methodically across the white stone. The terrace affords an elevated view south over the rooftops toward the sea. Behind you, a set of heavy doors leads into the main government building — closed, and flanked by two more guards.",
    exits: {
      d: { to: "civic_plaza", desc: "The grand staircase descends to Civic Plaza." }
    }
  },

  "court_of_arbiters": {
    district: "government",
    name: "Court of Arbiters",
    desc: "The court building's public waiting room — a long, stone-benched gallery where disputes are queued like cargo. Petitioners sit with their documents and their expressions of careful patience. Advocates in dark robes confer in low voices. A board on the wall lists today's cases in chalk, running to two columns. The sound of voices carries faintly from behind the heavy courtroom doors — someone is making an argument, at length. The clerk at the admittance desk does not look up.",
    exits: {
      e: { to: "civic_plaza", desc: "The court entrance opens east onto Civic Plaza." }
    }
  },

  "the_treasury_steps": {
    district: "government",
    name: "The Treasury Steps",
    desc: "The broad steps of Lusk's treasury building, flanked by columns of dark stone. The building itself is deliberately massive and deliberately plain — no ornament, no carving, just weight. Two guards stand at the top of the steps with the particular stillness of people who have been doing this for a long time. The treasury seal — the city's anchor-and-rope device, rendered in bronze — is set into the pavement at the foot of the steps.",
    exits: {
      s: { to: "civic_plaza", desc: "The steps lead south back onto Civic Plaza." }
    }
  },

  // ============================================================
  // THE ROOFTOPS
  // ============================================================

  "anchor_upstairs": {
    district: "rooftops",
    name: "The Bronze Anchor — Upper Rooms",
    desc: "A narrow corridor of doors, each numbered with a painted wooden plaque. The floorboards creak with every step. A window at the corridor's end looks out over the harbour — at this height you can see the curve of the bay and, on the horizon, the low shapes of islands. Someone has left a candle burning in a holder on the sill. The sounds of the common room below come up through the boards, muffled and companionable.",
    exits: {
      d: { to: "the_bronze_anchor", desc: "The stairs descend back to the common room." }
    }
  },

  "copper_lane_bridge": {
    district: "rooftops",
    name: "Copper Lane — Upper Bridge",
    desc: "A low stone bridge connecting two buildings at second-floor level. Standing here, you look down into Copper Lane, which seems narrower and more labyrinthine from above. The bridge is wide enough for two people to pass if they turn sideways. Pot plants have been placed along the parapet — no one is quite sure by whom. To the east, a door stands slightly ajar, leading into someone's cluttered upper room.",
    exits: {
      d: { to: "copper_lane", desc: "Steps at either end of the bridge descend to Copper Lane." },
      e: { to: "old_quarter_rooftops", desc: "A narrow gap in the parapet gives onto a ledge and the old quarter rooftops." }
    }
  },

  "gatehouse_top": {
    district: "rooftops",
    name: "Top of the Old Wall Gate",
    desc: "The top of the old gatehouse, surprisingly broad and battered by wind. The carved stonework up here is worn almost smooth — faces and sea-creatures reduced to gentle bumps. From here you can see a significant span of Lusk in every direction: the harbour to the south, the tiled rooftops of the old quarter, the rising towers of the government district to the north, and, far to the east and west, the glittering ring of sea that confirms what you already knew — this city is an island.",
    exits: {
      d: { to: "old_wall_gate", desc: "The staircase descends back into the gatehouse." },
      n: { to: "old_quarter_rooftops", desc: "A walkway along the old wall runs north toward the rooftops." }
    }
  },

  "old_quarter_rooftops": {
    district: "rooftops",
    name: "Old Quarter Rooftops",
    desc: "A precarious world above the streets — flat roofs, sloping tiles, and the occasional rooftop terrace connected by plank bridges and iron ladders. It is surprisingly populated: residents dry laundry, tend small gardens in clay pots, or simply sit watching the city below. A cat picks its way along a ridge tile with magnificent indifference. The footing is uncertain in places and the drop is real, but the view — and the privacy — is considerable.",
    exits: {
      d: { to: "copper_lane_bridge", desc: "A ladder descends to the Copper Lane upper bridge." },
      n: { to: "bridge_of_seven_arches", desc: "A rope bridge connects the old quarter rooftops to the Bridge of Seven Arches." },
      s: { to: "gatehouse_top", desc: "The old wall walkway leads south to the gatehouse top." },
      e: { to: "the_washing_terrace", desc: "A short plank bridge connects east to a shared washing terrace." }
    }
  },

  "bridge_of_seven_arches": {
    district: "rooftops",
    name: "Bridge of Seven Arches",
    desc: "A long, high bridge spanning a gap between two sections of the city — below it, a narrow street some forty feet down, and the alley cat life that goes on there unaware of being observed. The bridge is old and wide, with low parapets worn smooth by ten thousand elbows. People use it as a meeting place as much as a thoroughfare: a seller of hot pastries works from a cart, and two musicians have set up near the midpoint, their instruments competing cheerfully. The arches below frame seven distinct slices of the lower city.",
    exits: {
      d: { to: "middle_city_approach", desc: "Stone stairs at the bridge's end descend to the middle city approach." },
      s: { to: "old_quarter_rooftops", desc: "A rope bridge connects back to the old quarter rooftops." },
      n: { to: "guildhall_upper_bridge", desc: "The bridge continues north to a covered crossing at guildhall level." }
    }
  },

  "guildhall_upper_bridge": {
    district: "rooftops",
    name: "Guildhall Upper Bridge",
    desc: "A covered, glassed-in walkway connecting two wings of the guildhall complex at the third storey. The floor is polished dark wood. Framed documents — charters, treaties, deeds — line the walls under glass. It is quiet here, cut off from the street noise below. A guild clerk hurries past without making eye contact. Through the windows on one side, you can see the rooftops of the guildhall complex; on the other, the approach to the government district.",
    exits: {
      d: { to: "guildhall_approach", desc: "Stairs descend to the guildhall approach." },
      s: { to: "bridge_of_seven_arches", desc: "The crossing connects south to the Bridge of Seven Arches." }
    }
  },

  "the_washing_terrace": {
    district: "rooftops",
    name: "The Washing Terrace",
    desc: "A broad, flat rooftop shared by three adjoining buildings in the old quarter, given over by common agreement to drying laundry. Lines criss-cross the space at head height, hung with everything from sailcloth to fine linen. Navigating the terrace is a matter of ducking, turning sideways, and occasionally apologising to a sheet. In the gaps between the lines, the views are excellent. A trapdoor in the corner leads to the buildings below; it is never locked.",
    exits: {
      w: { to: "old_quarter_rooftops", desc: "A short plank bridge connects west to the main rooftop network." },
      d: { to: "copper_lane", desc: "The trapdoor drops into the upper floor of a building on Copper Lane." }
    }
  },

  // ============================================================
  // THE SEWERS & UNDERWORKS
  // ============================================================

  "sewer_entrance": {
    district: "sewers",
    name: "Sewer Entrance",
    desc: "You descend into Lusk's underside. The passage here is ancient — older than most of the city above — built of fitted stone blocks that have never been named or recorded. The ceiling is low and dripping. The sewer itself is dry at the moment, a narrow channel running with shallow water along one side of a walkway that is just wide enough for one person. The smell is powerful but not overwhelming. It is very dark. The sounds of the city above are muffled to near silence.",
    exits: {
      u: { to: "lower_docks", desc: "The iron rungs climb back up to the lower docks." },
      n: { to: "sewer_junction", desc: "The main sewer channel runs north under the old quarter." },
      e: { to: "sewer_east_branch", desc: "A side passage runs east under the harbour district." }
    }
  },

  "sewer_junction": {
    district: "sewers",
    name: "Sewer Junction",
    desc: "A wider chamber where several sewer channels meet. The ceiling is higher here — tall enough to stand straight — and the space has clearly been used by people over time: there are crude marks on the wall (arrows, symbols, a scratched map someone began and abandoned), and a wooden pallet in one corner with a folded piece of cloth on it. Someone lives here, or did. Three passages lead away in different directions. A grating in the ceiling lets in a thin column of grey light and the distant sounds of street life above.",
    exits: {
      s: { to: "sewer_entrance", desc: "The main channel runs south toward the entrance." },
      n: { to: "sewer_north", desc: "The north channel runs deeper under the city." },
      e: { to: "sewer_east_branch", desc: "The east passage runs toward the harbour district." },
      w: { to: "sewer_west_branch", desc: "A recently cleared passage runs west." },
      u: { to: "old_canal_steps", desc: "A rusty ladder climbs up through the grating to street level." }
    }
  },

  "sewer_east_branch": {
    district: "sewers",
    name: "Sewer — East Branch",
    desc: "A narrower passage running east beneath the harbour district. The walls here are wet, and somewhere ahead water drips steadily into the channel. The stone is older than old — blocks cut with tools no longer used. Several small alcoves are set into the walls at irregular intervals, their purpose unclear. One of them contains a small ceramic jar, sealed with wax.",
    exits: {
      w: { to: "sewer_junction", desc: "The east branch runs west back to the sewer junction." },
      s: { to: "sewer_entrance", desc: "The passage connects south to the sewer entrance." },
      n: { to: "lower_docks_east", desc: "A passage in the wall connects north to the lower docks east section." }
    }
  },

  "sewer_west_branch": {
    district: "sewers",
    name: "Sewer — West Branch",
    desc: "A recently discovered branch of the sewer system — recently in the sense that the crude torch bracket on the wall is not entirely rusted, and someone has swept the worst of the debris to one side. The passage runs west under the old quarter, its walls showing evidence of hasty excavation alongside the original stonework. Boot prints in the mud floor go in both directions.",
    exits: {
      e: { to: "sewer_junction", desc: "The west branch connects east back to the sewer junction." },
      u: { to: "the_broken_wheel", desc: "An iron ladder climbs up through a hole in the ceiling — into the cellar of something above." }
    }
  },

  "sewer_north": {
    district: "sewers",
    name: "Sewer — North Channel",
    desc: "Deep under the middle city now, and the passage is old enough that the stone has begun to show signs of an earlier structure beneath it — arched vaults of a different era visible where sections of the later sewer floor have cracked and subsided. The sound of running water is constant. The passage ahead is partly flooded — ankle deep — and the torchlight, if you had one, would show the water moving.",
    exits: {
      s: { to: "sewer_junction", desc: "The north channel runs south back to the junction." },
      n: { to: "old_cistern", desc: "The channel opens into a vast underground space ahead." }
    }
  },

  "old_cistern": {
    district: "sewers",
    name: "The Old Cistern",
    desc: "A vast underground chamber, its ceiling supported by rows of columns that vanish into the darkness above. The floor is a shallow lake — still, black, perfectly reflecting the faint light from a crack in the ceiling far above. It was built to hold the city's fresh water reserves in times of siege, and it is very old. The columns are carved, though the carvings are submerged and invisible. The silence here is total except for the occasional drip and a low, resonant hum that seems to have no source.",
    exits: {
      s: { to: "sewer_north", desc: "The channel runs south back toward the sewer junction." },
      e: { to: "cistern_far_side", desc: "A narrow ledge runs along the east wall through the darkness." }
    }
  },

  "cistern_far_side": {
    district: "sewers",
    name: "The Old Cistern — Far Side",
    desc: "The eastern edge of the cistern, reached by a ledge barely wide enough for careful walking. The water beside you is still and black. On this side, the wall has a door set into it — old iron, sea-green with age, sealed with a lock of a type you don't recognise. Above the door, carved into the stone in a script that predates Lusk, are letters you cannot read.",
    exits: {
      w: { to: "old_cistern", desc: "The ledge runs west back to the main cistern chamber." }
    }
  }

  // ============================================================
  // ADD NEW ROOMS BELOW — paste a new block anywhere in this file
  // Make sure every room except the last ends with a comma
  // ============================================================

};

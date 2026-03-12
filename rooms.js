\const ROOMS = {

  // ============================================================
  // THE HARBOUR
  // The southern edge of Lusk, wrapping a natural bay.
  // Where everything arrives. Busy, loud, international.
  // ============================================================

  "harbour_gate": {
    district: "harbour",
    name: "Harbour Gate",
    desc: "The main land entrance to the harbour district, a broad archway of salt-pitted stone that has stood long enough to lean slightly to one side without anyone worrying about it. The city's anchor-and-rope device is carved above the keystone, worn by weather to a suggestion. Through the arch, the smell of the sea arrives before anything else — brine, tar, fish, and something faintly foreign that changes depending on what's in port. The sound of the harbour is constant: voices, gulls, the groan of mooring ropes.",
    exits: {
      s: { to: "harbour_promenade", desc: "The archway opens south onto the harbour promenade." },
      n: { to: "chandlers_row", desc: "A commercial street runs north into the harbour district proper." },
      e: { to: "old_quarter_south", desc: "A lane runs east toward the southern edge of the Old Quarter." }
    }
  },

  "harbour_promenade": {
    district: "harbour",
    name: "Harbour Promenade",
    desc: "A long sweep of stone walkway along the inner bay, busy at all hours. Ships of every size and flag are moored below — fat-bellied merchant carracks, lean brigantines, low fishing skiffs, and vessels whose rigs you don't recognise. The air is warm and briny. Dockworkers move cargo in human chains down to the quays. Gulls and stranger birds wheel overhead. The bay curves east and west, and at its widest point you can see the open sea glittering beyond the harbour mouth.",
    exits: {
      n: { to: "harbour_gate", desc: "The promenade runs north toward the harbour gate." },
      e: { to: "east_quay", desc: "The promenade curves east toward the merchant fleet moorings." },
      w: { to: "west_quay", desc: "The promenade curves west toward the fishing boats and the old pier." },
      d: { to: "lower_docks_main", desc: "Iron rungs bolted into the sea wall descend to the lower docks." }
    }
  },

  "east_quay": {
    district: "harbour",
    name: "East Quay",
    desc: "The merchant end of the harbour. Customs officers in blue coats inspect manifests with professional boredom while porters argue over loads behind them. The smell here is timber, tar, and the exotic — opened crates releasing spices, dyes, and unfamiliar woods into the salt air. Several ships are being careened on the strand beyond the quay, tipped on their sides for hull scraping, the sound of iron on barnacled wood ringing across the water.",
    exits: {
      w: { to: "harbour_promenade", desc: "The promenade runs west along the bay." },
      n: { to: "customs_house", desc: "The customs house faces the quay, its blue-painted doors open." },
      e: { to: "east_quay_end", desc: "The quay continues east to its far end and the harbour mouth." },
      d: { to: "lower_docks_east", desc: "Wooden stairs descend to the lower dock level." }
    }
  },

  "east_quay_end": {
    district: "harbour",
    name: "East Quay — Far End",
    desc: "The eastern tip of the quay, where the harbour wall ends and the open sea begins. A lighthouse of modest size stands here, its lamp unlit in daylight but its keeper visible through the glass, moving about her duties. The view east is unobstructed — open water to the horizon, with the faint smudge of another island visible on a clear day. The wind is stronger here, and the spray reaches the stones.",
    exits: {
      w: { to: "east_quay", desc: "The quay runs west back toward the main harbour." },
      u: { to: "lighthouse_top", desc: "An iron door at the lighthouse base opens to a spiral stair." }
    }
  },

  "lighthouse_top": {
    district: "harbour",
    name: "Lighthouse Top",
    desc: "The lamp room of the harbour lighthouse, smelling of whale oil and warm glass. The lamp mechanism — a large lens mounted on a brass pivot — occupies the centre of the circular room. The keeper has left a logbook open on a small desk: weather observations, ship sightings, the occasional note of something unusual seen at night. The view from the windows is extraordinary, the full arc of the bay visible below and the sea extending in every direction beyond.",
    exits: {
      d: { to: "east_quay_end", desc: "The spiral stair descends to the quay." }
    }
  },

  "west_quay": {
    district: "harbour",
    name: "West Quay",
    desc: "The fishing end of the harbour. The fleet is in, and the smell announces it long before you arrive. Nets spread across the stones to dry, patched by old hands moving from habit. The catch is being sorted, iced, and loaded onto carts. Children sit on bollards watching the boats. A small shrine occupies a niche in the harbour wall — a sea-deity of local tradition, strung with dried kelp and small silver fish-shaped tokens left by sailors before departure.",
    exits: {
      e: { to: "harbour_promenade", desc: "The promenade runs east along the bay." },
      n: { to: "fish_market", desc: "The fish market occupies a long covered shed just off the quay." },
      w: { to: "old_pier", desc: "A narrow walkway leads to the old pier at the bay's western edge." },
      d: { to: "lower_docks_west", desc: "A ramp of salt-roughened planks leads down to the lower docks." }
    }
  },

  "old_pier": {
    district: "harbour",
    name: "The Old Pier",
    desc: "A pier of ancient timber, much repaired, extending into the western bay. It predates the harbour works by centuries and is no longer used for large vessels — the wood is too uncertain — but small boats still tie up here, and it has become a place people come to sit and look at the water. A man is fishing from the far end, paying no attention to anything else. The boards flex slightly underfoot. The view back toward the city is good: Lusk rising from the water, its buildings climbing toward the Heights.",
    exits: {
      e: { to: "west_quay", desc: "The pier connects back to the West Quay." }
    }
  },

  "fish_market": {
    district: "harbour",
    name: "Fish Market",
    desc: "A long covered shed running parallel to the West Quay, its floor perpetually wet and its smell something you eventually stop noticing. The stalls sell the morning's catch — some familiar, some not. One vendor has arranged a display of things dredged from deep water that he sells purely as curiosities, their edibility uncertain. The market is loud and fast, prices changing by the minute as the morning wears on and freshness becomes a negotiation.",
    exits: {
      s: { to: "west_quay", desc: "The market's south entrance opens onto the West Quay." },
      n: { to: "chandlers_row", desc: "A side door leads north into Chandler's Row." }
    }
  },

  "customs_house": {
    district: "harbour",
    name: "Customs House",
    desc: "A large, efficient building facing the East Quay, its ground floor divided into inspection bays where cargo is weighed, examined, and taxed. The clerks here work with the particular calm of people who hold significant power and know it. The waiting area for merchants and captains has benches worn smooth by generations of anxious sitting. A noticeboard lists current tariff rates in six languages. The upper floor is administrative — visible through the windows, people moving between desks with ledgers.",
    exits: {
      s: { to: "east_quay", desc: "The customs house doors open south onto the East Quay." },
      u: { to: "customs_house_upper", desc: "A staircase leads to the administrative upper floor." }
    }
  },

  "customs_house_upper": {
    district: "harbour",
    name: "Customs House — Upper Floor",
    desc: "The administrative heart of Lusk's import controls. Long tables covered in manifests, ledgers stacked to the ceiling in wooden racks, clerks moving between them with the efficiency of people who have done this for years. A senior official sits at a desk by the window overlooking the quay, reviewing documents. The walls are hung with maps of known trade routes, annotated in different hands over many years. A locked door at the back leads to the harbourmaster's private office.",
    exits: {
      d: { to: "customs_house", desc: "The staircase descends to the inspection floor." }
    }
  },

  "chandlers_row": {
    district: "harbour",
    name: "Chandler's Row",
    desc: "A street of marine suppliers running behind the harbour front — rope-walks, sail-makers, chandlers selling oil and wicking, instrument makers, chart sellers. The businesses here are practical and prosperous, supplying everything a ship needs before departure. The street smells of hemp, linseed oil, and beeswax. A chart-seller has pinned a large map of the known sea-lanes in his window, annotated with handwritten warnings at certain points.",
    exits: {
      s: { to: "harbour_gate", desc: "Chandler's Row runs south toward the harbour gate." },
      n: { to: "the_bronze_anchor", desc: "The Bronze Anchor Tavern occupies a corner at the row's north end." },
      e: { to: "customs_house", desc: "A side street runs east to the customs house." },
      w: { to: "fish_market", desc: "A side door connects west into the fish market." }
    }
  },

  "the_bronze_anchor": {
    district: "harbour",
    name: "The Bronze Anchor Tavern",
    desc: "A low-beamed common room thick with pipe smoke and the smell of salted fish. Sailors crowd mismatched tables, arguing in half a dozen languages. A broad-shouldered woman behind the bar refills cups without being asked. The floorboards are stained dark from a century of spilled drink. A bronze anchor, small and clearly decorative, hangs above the bar — the establishment's namesake and its only ornament. Through a salt-crusted window, the shimmer of the harbour is visible.",
    exits: {
      s: { to: "chandlers_row", desc: "The tavern's main door opens south onto Chandler's Row." },
      n: { to: "old_quarter_south", desc: "A back door leads north into the southern Old Quarter." },
      u: { to: "anchor_upstairs", desc: "A creaking staircase climbs to the inn's upper rooms." }
    }
  },

  "anchor_upstairs": {
    district: "harbour",
    name: "The Bronze Anchor — Upper Rooms",
    desc: "A narrow corridor of numbered doors, each with a painted wooden plaque. The floorboards creak with every step. A window at the corridor's end looks out over the harbour — at this height you can see the curve of the bay and, on the horizon, the low shapes of other islands. Someone has left a candle burning on the sill. The sounds of the common room below come up through the boards, muffled and companionable.",
    exits: {
      d: { to: "the_bronze_anchor", desc: "The stairs descend back to the common room." }
    }
  },

  "lower_docks_main": {
    district: "harbour",
    name: "Lower Docks",
    desc: "The waterline itself — a sloshing, shadowed world beneath the promenade. Stone pillars holding up the city above are encrusted with barnacles and dark weed. Small boats are tied here, some clearly long unused. Light comes in low and broken off the water. It is quieter than expected. Somewhere in the dimness, something drips steadily. A rusted iron door is set into one of the larger pillars, its hinges green with age.",
    exits: {
      u: { to: "harbour_promenade", desc: "Iron rungs lead back up to the harbour promenade." },
      e: { to: "lower_docks_east", desc: "The dock walkway continues east beneath the East Quay." },
      w: { to: "lower_docks_west", desc: "The walkway runs west under the fishing quay." },
      d: { to: "sewer_entrance", desc: "A trapdoor in the dock planking, its lock recently broken, drops into darkness." }
    }
  },

  "lower_docks_east": {
    district: "harbour",
    name: "Lower Docks — East",
    desc: "Beneath the East Quay, the light barely reaches. The sound of the merchant fleet overhead — creaking timbers, shouted orders, the thud of cargo — carries clearly through the stones above. Several small rowing boats are moored in the darkness, their registration marks rubbed off. A narrow passage leads into the stone wall, its entrance hung with a strip of old canvas.",
    exits: {
      w: { to: "lower_docks_main", desc: "The walkway runs west to the main lower docks." },
      n: { to: "sewer_east_branch", desc: "The passage in the wall leads into the sewer system." }
    }
  },

  "lower_docks_west": {
    district: "harbour",
    name: "Lower Docks — West",
    desc: "Under the West Quay, the dock level drops lower — this section floods at high tide, and the watermark is clearly visible on the pillars. The wood is soft and black. Old fishing equipment is stored here: broken traps, rotting nets, a stack of cork floats. A smell of deep water and old fish. Something moves in the water near the far wall, unhurried and too large for a fish.",
    exits: {
      e: { to: "lower_docks_main", desc: "The walkway runs east to the main lower docks." },
      d: { to: "sewer_entrance", desc: "An iron ladder descends into a flooded lower passage." }
    }
  },

  // ============================================================
  // THE OLD QUARTER
  // The original fishing village, absorbed by centuries of growth.
  // Cramped, layered, full of old families and older buildings.
  // Bleeds into the Harbour to the south, the Market to the north.
  // ============================================================

  "old_quarter_south": {
    district: "old_quarter",
    name: "Salters' Lane",
    desc: "The southern entrance to the Old Quarter, a narrow lane that smells of the sea even this far from the water. The buildings here are old and low, their ground floors converted over generations into workshops and small shops — a cobbler, a net-mender, a woman selling dried herbs from a basket outside her door. The lane is named for the salt-packers who used to work here, long since displaced by the harbour's expansion southward. A few of their descendants still live upstairs.",
    exits: {
      s: { to: "the_bronze_anchor", desc: "Salters' Lane runs south toward the Bronze Anchor and the harbour." },
      n: { to: "copper_lane", desc: "The lane opens north onto Copper Lane." },
      e: { to: "harbour_gate", desc: "A short cut runs east to the harbour gate." },
      w: { to: "tanners_yard", desc: "A wider passage runs west toward the tanners' yard." }
    }
  },

  "copper_lane": {
    district: "old_quarter",
    name: "Copper Lane",
    desc: "One of Lusk's oldest streets, narrow enough that neighbours can shake hands from opposing windows. The buildings have been added to, subdivided, and repurposed so many times that the ground floor of one structure becomes the second floor of the next as the street climbs. Copper lanterns hang on brackets at uneven heights, giving the lane a warm, disorienting glow even in daylight. A smell of cooking, burned herbs, and stone that has never quite dried out.",
    exits: {
      s: { to: "old_quarter_south", desc: "Copper Lane descends south toward Salters' Lane." },
      n: { to: "old_wall_gate", desc: "The lane runs north toward the old wall gate." },
      e: { to: "canal_steps", desc: "A side street runs east toward the canal steps." },
      w: { to: "tanners_yard", desc: "A cross-lane runs west toward the tanners' yard." },
      u: { to: "copper_lane_bridge", desc: "A narrow stone bridge connects the upper floors of two buildings above." }
    }
  },

  "tanners_yard": {
    district: "old_quarter",
    name: "Tanners' Yard",
    desc: "The smell here is forceful and unmistakable. The tanneries that gave this yard its name are still operating — the churning of hides and the shouts of workers audible through open workshop doors. The yard itself is stained rust and ochre, the stones permanently discoloured. Despite the smell it is busy: raw hides come in from the west, finished leather goes east toward the markets. A row of secondhand shops between the workshops sells boots, belts, and saddlery at prices that reflect their proximity to the source.",
    exits: {
      e: { to: "copper_lane", desc: "The yard connects east to Copper Lane." },
      n: { to: "old_wall_gate", desc: "A street climbs north toward the old wall." },
      s: { to: "old_quarter_south", desc: "The yard opens south toward Salters' Lane." }
    }
  },

  "canal_steps": {
    district: "old_quarter",
    name: "Canal Steps",
    desc: "A broad staircase of greenish stone descending to the edge of one of Lusk's inner canals. The water moves slowly, carrying flower petals, orange rinds, and the occasional paper lantern toward the harbour. Flat-bottomed canal boats drift past, poled by figures in wide hats. The buildings crowd the water's edge, their lower floors stained with centuries of high tides. Washing hangs between the balconies above, and someone is always leaning out of a window somewhere.",
    exits: {
      w: { to: "copper_lane", desc: "The canal steps connect west to Copper Lane." },
      n: { to: "the_narrow", desc: "A squeeze of a passage runs north." },
      d: { to: "canal_dock", desc: "Slick stone steps continue down to the waterline and a low wooden dock." }
    }
  },

  "canal_dock": {
    district: "old_quarter",
    name: "Canal Dock",
    desc: "The foot of the Canal Steps, at waterline. A small dock of dark wet wood bobs gently. A flat-bottomed water taxi is tied here, its operator asleep under a wide hat. The undersides of the city bridges are visible from here — mossy stone arches, the occasional bundle of rope or rusted chain hanging into the water. The canal smells of mud and minerals rather than the sea, a different kind of old.",
    exits: {
      u: { to: "canal_steps", desc: "The stone steps climb back up to street level." },
      s: { to: "lower_docks_main", desc: "The canal connects south under the harbour buildings to the lower docks." }
    }
  },

  "the_narrow": {
    district: "old_quarter",
    name: "The Narrow",
    desc: "A passage so tight between two ancient buildings that you must turn sideways. The walls above lean together until they nearly touch, four storeys up. Inexplicably popular as a shortcut. Someone has hung a string of coloured glass beads across the entrance at head height, replacing them whenever they break. The city noise falls away to almost nothing in the middle of it, replaced by a close, intimate quiet and the sound of your own footsteps.",
    exits: {
      s: { to: "canal_steps", desc: "The Narrow opens south near the canal steps." },
      n: { to: "the_broken_wheel", desc: "The passage opens north near the Broken Wheel." }
    }
  },

  "the_broken_wheel": {
    district: "old_quarter",
    name: "The Broken Wheel",
    desc: "A drinking house that has operated under various names for at least two hundred years. The current name references a cartwheel that came through the front wall during some forgotten incident and was never fully removed — its iron rim is still visible in the plaster above the door. The clientele are old quarter regulars: workers, insomniacs, people who prefer to drink in the afternoon. A fire burns even in warm weather. No one bothers anyone else.",
    exits: {
      s: { to: "the_narrow", desc: "The Broken Wheel's back passage connects south into the Narrow." },
      n: { to: "old_wall_gate", desc: "The street continues north toward the old wall gate." },
      d: { to: "sewer_west_branch", desc: "A loose flagstone in the cellar lifts to reveal an iron ladder going down." }
    }
  },

  "old_wall_gate": {
    district: "old_quarter",
    name: "Old Wall Gate",
    desc: "A gatehouse from an earlier, smaller Lusk — the old city wall now stands deep in the island's interior, long since absorbed by expansion. The gate is open and unguarded, serving as a covered thoroughfare. The stonework is ancient and beautifully carved: ships, sea-creatures, a procession of figures whose significance has been forgotten. Someone has placed fresh flowers at the base of the arch. They are replaced regularly, by whom no one seems to know.",
    exits: {
      s: { to: "copper_lane", desc: "Copper Lane descends south through the old quarter." },
      n: { to: "carnaby_approach", desc: "Beyond the old gate, the city opens northward toward the markets." },
      e: { to: "gnomon_alley", desc: "An archway in the old wall leads east toward the Gnomon temple." },
      w: { to: "the_broken_wheel", desc: "The street runs west toward the Broken Wheel." },
      u: { to: "gatehouse_top", desc: "A worn staircase inside the gatehouse leads to the top of the old wall." }
    }
  },

  "gnomon_alley": {
    district: "old_quarter",
    name: "Gnomon Alley",
    desc: "An unmarked side passage running east from the old wall. It looks like a shortcut to somewhere else, and most people treat it as one. The buildings on either side are domestic — someone's laundry overhead, a window box of herbs, the smell of a meal being cooked. There is nothing to suggest what lies at the end of it except that the stones underfoot are slightly more worn than anywhere else nearby, smoothed by more feet than a simple alley should have seen.",
    exits: {
      w: { to: "old_wall_gate", desc: "The alley opens west at the old wall gate." },
      e: { to: "order_of_gnomes", desc: "The alley ends at a plain door set into the wall." }
    }
  },

  "order_of_gnomes": {
    district: "old_quarter",
    name: "The Order of Gnomes — The Grotto",
    desc: "The door opens into a space that takes a moment to understand. The room is not large, but it opens inward in a way that feels larger than its walls allow — a grotto-like space of uneven stone, candlelit, cool. The ceiling is higher than expected. Alcoves line every wall, each one a shrine: a sea-god with offerings of salt and rope, a harvest deity with dried flowers, a hooded figure of uncertain origin with coins at its feet, a dozen others. The shrines are modest and worn smooth from use. Two people sit on plain wooden benches in silence. A priest in undyed linen moves quietly between the alcoves, tending the candles. The air smells of a dozen different incenses, none of them overwhelming.",
    exits: {
      w: { to: "gnomon_alley", desc: "The plain door opens west back into the alley." }
    }
  },

  "copper_lane_bridge": {
    district: "old_quarter",
    name: "Copper Lane — Upper Bridge",
    desc: "A low stone bridge connecting two buildings at second-floor level. Looking down into Copper Lane, the street seems narrower and more labyrinthine from above. The bridge is wide enough for two people to pass sideways. Pot plants have been placed along the parapet — by whom no one can agree. To the east, a door stands slightly ajar into someone's cluttered upper room, the sound of a typewriter or loom audible within.",
    exits: {
      d: { to: "copper_lane", desc: "Steps descend to Copper Lane below." },
      n: { to: "old_quarter_rooftops", desc: "A gap in the parapet gives onto a ledge and the rooftops." }
    }
  },

  "gatehouse_top": {
    district: "old_quarter",
    name: "Top of the Old Wall Gate",
    desc: "The top of the old gatehouse, broad and battered by wind. The carved stonework up here is worn almost smooth — faces and sea-creatures reduced to gentle suggestions. From here you can see a significant arc of Lusk: the harbour to the south, the tiled rooftops of the old quarter below you, the rising jumble of the market district to the north, and, far in every direction, the sea that confirms what you already know — this city is an island, and the water is never far.",
    exits: {
      d: { to: "old_wall_gate", desc: "The staircase descends back into the gatehouse." },
      e: { to: "old_quarter_rooftops", desc: "A walkway along the old wall leads east to the rooftop network." }
    }
  },

  // ============================================================
  // CARNABY MARKET
  // The commercial heart of Lusk. Loud, colourful, central.
  // Sits between the Old Quarter and the Government District.
  // Bleeds east into the Temple District, west toward the Residency.
  // ============================================================

  "carnaby_approach": {
    district: "carnaby",
    name: "Carnaby Approach",
    desc: "The street widens here as the old quarter gives way to the market district, the buildings stepping back to allow for the flow of commerce. Cart traffic is heavy. Street vendors occupy the margins, selling food and small goods to people too busy to stop. The noise increases as you go north — the layered sound of the market proper becoming audible above the general city. The paving changes from the old quarter's irregular stone to a more intentional grid, though centuries of repair have made it irregular again.",
    exits: {
      s: { to: "old_wall_gate", desc: "The approach runs south back through the old wall gate." },
      n: { to: "carnaby_market_square", desc: "The approach opens north into Carnaby Market Square." },
      e: { to: "spice_colonnade", desc: "A covered colonnade runs east toward the spice traders." },
      w: { to: "residency_approach", desc: "A side street runs west toward the Residency district." }
    }
  },

  "carnaby_market_square": {
    district: "carnaby",
    name: "Carnaby Market — The Square",
    desc: "The open heart of the market district, a wide irregular square that has resisted every attempt to make it rectangular. Canvas awnings of every colour shade the stalls around its edges. At the centre, a stone platform serves as an impromptu stage for auctioneers, announcers, and occasionally musicians. The crowd is dense and cosmopolitan — you can hear five languages in as many steps. The goods for sale range from the mundane to the inexplicable. A child is selling maps she has drawn herself, and they are surprisingly accurate.",
    exits: {
      s: { to: "carnaby_approach", desc: "The square narrows south into the approach." },
      n: { to: "money_changers_row", desc: "The northern end of the square opens onto Money Changers' Row." },
      e: { to: "silk_market", desc: "The east side of the square leads into the Silk Market." },
      w: { to: "provisions_yard", desc: "A wide gate leads west into the Provisions Yard." },
      u: { to: "market_gallery_bridge", desc: "An iron staircase climbs to a covered gallery running above the square's east side." }
    }
  },

  "money_changers_row": {
    district: "carnaby",
    name: "Money Changers' Row",
    desc: "A cramped colonnade of narrow booths, each occupied by a changer, their scales, their foreign coin trays, and their assistants. The changers conduct business in two or three languages at once, rates posted on small chalked boards that are updated throughout the day. Lusk's own currency — the mote, a small coin with a hole at its centre — is traded here alongside half a hundred foreign denominations. The atmosphere is of controlled urgency. No one wastes time.",
    exits: {
      s: { to: "carnaby_market_square", desc: "Money Changers' Row opens south into the market square." },
      n: { to: "government_district_approach", desc: "The row runs north toward the government district." },
      e: { to: "spice_colonnade", desc: "A connecting passage runs east to the spice colonnade." }
    }
  },

  "silk_market": {
    district: "carnaby",
    name: "The Silk Market",
    desc: "A covered market of considerable age, its vaulted roof of iron and old glass letting in columns of dusty light. The stalls sell cloth, dye, thread, and finished garments from every corner of the known world. The noise is constant: haggling in multiple languages, the snap of fabric being shaken out, the clatter of a dropped bolt. The colours are extraordinary — violent orange, deep indigo, a red so bright it hurts. Somewhere nearby, a musician plays a stringed instrument no one has bothered to name.",
    exits: {
      w: { to: "carnaby_market_square", desc: "The silk market opens west into the market square." },
      n: { to: "spice_colonnade", desc: "A corridor of stalls leads north into the spice colonnade." },
      e: { to: "temple_district_west", desc: "The market's east exit leads toward the Temple District." },
      u: { to: "silk_market_gallery", desc: "A wrought-iron staircase climbs to a gallery of more exclusive traders." }
    }
  },

  "silk_market_gallery": {
    district: "carnaby",
    name: "Silk Market — Upper Gallery",
    desc: "The upper level of the Silk Market, quieter and considerably more expensive. The traders here operate from proper enclosed shops and are not in any hurry. The goods are extraordinary: cloth so fine it appears to dissolve at its edges, dyes that shift colour in different lights, embroidery that must have taken years. One dealer works behind a locked glass case, by appointment only. The noise of the market floor rises up, softened by distance.",
    exits: {
      d: { to: "silk_market", desc: "The iron staircase descends to the main market floor." },
      w: { to: "market_gallery_bridge", desc: "A covered bridge connects west above the market square." }
    }
  },

  "market_gallery_bridge": {
    district: "carnaby",
    name: "Market Gallery Bridge",
    desc: "A covered bridge running above the eastern side of Carnaby Square, connecting the Silk Market's upper gallery to a row of upper-floor merchants. The bridge sways very slightly when walked. The drop to the square stones below is considerable, and the view down into the crowd is vertiginous and fascinating — the market reduced to a pattern of awnings and moving heads. A spice merchant has colonised the midpoint with hanging dried goods.",
    exits: {
      e: { to: "silk_market_gallery", desc: "The bridge connects east into the Silk Market gallery." },
      d: { to: "carnaby_market_square", desc: "Iron stairs descend to the market square below." }
    }
  },

  "spice_colonnade": {
    district: "carnaby",
    name: "Spice Colonnade",
    desc: "A covered colonnade thick enough with competing smells that new arrivals often stop walking, simply overwhelmed. Open sacks of ground spice line the passage: yellows, reds, deep browns, pale whites. Some of what is for sale has no name in the common tongue — small paper packets labelled in scripts from distant places, their contents unknown to most buyers. The vendors are patient and sharp-eyed, letting the goods sell themselves.",
    exits: {
      s: { to: "silk_market", desc: "The colonnade opens south into the Silk Market." },
      w: { to: "money_changers_row", desc: "A connecting passage runs west to Money Changers' Row." },
      n: { to: "government_district_approach", desc: "The colonnade runs north toward the government district approach." }
    }
  },

  "provisions_yard": {
    district: "carnaby",
    name: "Provisions Yard",
    desc: "An open yard behind the western market buildings, surrounded by low warehouses and loading bays. Bulk deliveries, restocking, arguments over spoiled goods. Barrels and crates stacked in orderly confusion. Several large cats observe everything from the top of a grain stack. A food stall operates from a converted cart near the gate, selling dense flatbread and roasted meat to the workers at prices that don't require negotiation.",
    exits: {
      e: { to: "carnaby_market_square", desc: "The yard connects east into the market square." },
      n: { to: "residency_approach", desc: "The yard's north gate opens toward the Residency." },
      d: { to: "market_cellars", desc: "Broad steps descend to the market cellars below." }
    }
  },

  "market_cellars": {
    district: "carnaby",
    name: "Market Cellars",
    desc: "A network of vaulted stone cellars beneath the market district, used for cold storage of perishable goods. The temperature drops noticeably. Shelves and racks of goods line the walls — cured meats, sealed crocks of preserved vegetables, wine in unlabelled bottles. The cellars extend further than the market above them, running under several neighbouring streets. Workers move quietly here, their voices low by instinct. A passage at the far end connects to an older section that predates the market by some centuries.",
    exits: {
      u: { to: "provisions_yard", desc: "The broad steps climb back up to the provisions yard." },
      e: { to: "sewer_junction", desc: "The old passage connects east into the sewer system." }
    }
  },

  // ============================================================
  // TEMPLE DISTRICT
  // East of the market, running north toward the government district.
  // Embassy churches, foreign shrines, scholars, the Order of Gnomes
  // (whose actual temple is just over the border in the Old Quarter).
  // ============================================================

  "temple_district_west": {
    district: "temples",
    name: "Temple Row — West End",
    desc: "The western entrance to Temple Row, where the market district gives way to something more solemn. The buildings here are more deliberate — carved facades, gilded details, steps leading up to heavy doors. The smell changes from cooking and commerce to incense and old stone. A priest in foreign robes passes without making eye contact. Two men are arguing quietly but intensely outside a doorway, in a language you don't recognise, about something that seems to matter enormously.",
    exits: {
      w: { to: "silk_market", desc: "Temple Row runs west back into the market district." },
      e: { to: "temple_row_main", desc: "The row continues east toward the main temple buildings." },
      n: { to: "scholars_alley", desc: "A passage runs north into Scholars' Alley." }
    }
  },

  "temple_row_main": {
    district: "temples",
    name: "Temple Row",
    desc: "The heart of the Temple District — an avenue of competitive piety. The temples face each other across a wide cobbled street, each more elaborate than its neighbour. Carved facades, gilded doors, smoking incense censers on the steps, priests and acolytes in a dozen different robes. The gods being worshipped range from familiar to wholly alien. One low building has no sign, no windows, and a queue of people waiting patiently outside. You don't know what they're waiting for.",
    exits: {
      w: { to: "temple_district_west", desc: "Temple Row runs west toward the market district." },
      e: { to: "temple_row_east", desc: "The row continues east toward its far end." },
      n: { to: "wayfarers_garden", desc: "The row opens north at the gate of the Wayfarer's Garden." },
      s: { to: "the_unnamed_temple", desc: "The plain door of the building with no sign." }
    }
  },

  "the_unnamed_temple": {
    district: "temples",
    name: "The Unnamed Temple — Anteroom",
    desc: "The inside of the building with no sign. The anteroom is plain white plaster, lit by a single oil lamp. A dozen wooden chairs face a curtained doorway. The queue from outside has become a seated wait in here. No one speaks. No one looks at anyone else. A small table holds cups of water and nothing else. Whatever is behind the curtain, the people waiting for it are very calm.",
    exits: {
      n: { to: "temple_row_main", desc: "The plain door opens north back onto Temple Row." }
    }
  },

  "temple_row_east": {
    district: "temples",
    name: "Temple Row — East End",
    desc: "The eastern end of Temple Row, where the avenue narrows and the buildings become less grand. A few smaller shrines occupy the gaps between the larger temples — temporary-looking structures that have nonetheless been here for decades, their gods apparently content with modest accommodation. The street ends at a wall with a gate, beyond which a quieter residential area begins. A vendor sells hot food from a cart, doing brisk business from the temple workers.",
    exits: {
      w: { to: "temple_row_main", desc: "Temple Row runs west toward the main district." },
      n: { to: "scholars_alley", desc: "A gate in the wall opens north into Scholars' Alley." },
      e: { to: "residency_east", desc: "A lane runs east toward the outer Residency." }
    }
  },

  "wayfarers_garden": {
    district: "temples",
    name: "The Wayfarer's Garden",
    desc: "A small public garden tucked between two leaning buildings, improbably green. Fig trees and bougainvillea spill over low walls. Stone benches are occupied by old men playing tiles and a young woman reading a thick cloth-bound book. A painted sign on the gate reads: ALL ARE WELCOME — DO NOT FEED THE BIRDS. The birds, several large and confident ravens, are being fed anyway. It is one of the quieter places in Lusk, which is probably why people keep coming back to it.",
    exits: {
      s: { to: "temple_row_main", desc: "The garden's south gate opens onto Temple Row." },
      e: { to: "scholars_alley", desc: "A gap between buildings leads east into Scholars' Alley." },
      n: { to: "government_district_approach", desc: "A path leads north toward the government district." }
    }
  },

  "scholars_alley": {
    district: "temples",
    name: "Scholars' Alley",
    desc: "Narrow, quiet, and overflowing with books. The ground floors of the buildings here have been converted into open-fronted shops selling manuscripts, printed texts, maps, and objects of uncertain scholarly purpose. The scholars themselves are visible through upper windows, bent over desks. A noticeboard outside the largest building is dense with pinned papers: notices of lectures, requests for research assistants, disputes about translation. Someone has pinned a hand-drawn map of something, then crossed it out completely.",
    exits: {
      s: { to: "temple_district_west", desc: "Scholars' Alley runs south toward Temple Row's west end." },
      e: { to: "temple_row_east", desc: "A gate connects east to the east end of Temple Row." },
      w: { to: "wayfarers_garden", desc: "A gate in the alley wall opens west into the Wayfarer's Garden." },
      n: { to: "government_district_approach", desc: "The alley runs north toward the government district." },
      u: { to: "archive_reading_room", desc: "An external iron staircase leads up to the Archive Reading Room." }
    }
  },

  "archive_reading_room": {
    district: "temples",
    name: "Archive Reading Room",
    desc: "A long room with high windows and a smell of paper, wax, and slow time. Reading tables run its length, most of them occupied by scholars bent over documents, maps, or objects laid on cloth. The archive itself is through a locked door at the far end, accessible only with a reader's pass. The librarian — an elderly person of indeterminate age, wearing ink-stained grey — moves silently between the tables, replacing documents and occasionally correcting people's Latin in a whisper.",
    exits: {
      d: { to: "scholars_alley", desc: "The iron staircase descends to Scholars' Alley." }
    }
  },

  "the_red_temple": {
    district: "temples",
    name: "The Red Temple — Steps",
    desc: "The steps of the most aggressively decorated temple on the row — its facade covered in carved figures engaged in acts of commerce, war, harvest, and celebration, all in vivid red-painted stone. The god here presides over abundance in general, and the priests reflect this: well-fed, richly robed, and extremely willing to discuss the faith with anyone who pauses. The incense from the censers is thick, sweet, and slightly dizzying. They are always looking for new members.",
    exits: {
      s: { to: "temple_row_main", desc: "The steps descend to Temple Row." }
    }
  },

  // ============================================================
  // THE RESIDENCY
  // West-central Lusk. Where foreign nationals live long-term.
  // Embassies, foreign food, foreign customs, foreign tensions.
  // Includes the hidden cliff path at the island's western edge.
  // ============================================================

  "residency_approach": {
    district: "residency",
    name: "Residency Gate",
    desc: "The entrance to the Residency district, marked by a change in atmosphere more than any physical barrier. The buildings here are slightly larger than elsewhere, built to impress rather than accommodate. Foreign flags hang from upper windows — you can identify perhaps half of them. The street is quieter than the market, more deliberate. A guardhouse stands at the gate, staffed by two city guards who note arrivals without stopping them. Diplomatic courtesy, maintained carefully.",
    exits: {
      e: { to: "carnaby_approach", desc: "The gate connects east back toward the market district." },
      n: { to: "embassy_row", desc: "The main street of the Residency runs north." },
      s: { to: "provisions_yard", desc: "A back route runs south to the provisions yard." }
    }
  },

  "embassy_row": {
    district: "residency",
    name: "Embassy Row",
    desc: "A wide, well-maintained street lined with the official residences and embassy buildings of Lusk's major trading partners. The architecture varies wildly — each embassy built in the style of the nation it represents, creating a street that looks like a collection of disagreeing ideas about what a building should be. The gardens are immaculate. The windows are curtained. Occasionally a door opens and someone emerges with the careful expression of a person who is always being watched.",
    exits: {
      s: { to: "residency_approach", desc: "Embassy Row runs south to the residency gate." },
      n: { to: "the_foreign_quarter", desc: "The row opens north into the foreign quarter proper." },
      e: { to: "temple_row_main", desc: "A side street connects east to Temple Row." },
      w: { to: "residency_west", desc: "A lane runs west toward the quieter western residency." }
    }
  },

  "the_foreign_quarter": {
    district: "residency",
    name: "The Foreign Quarter",
    desc: "North of the embassy buildings, the Residency becomes less formal and more lived-in. This is where foreign merchants and long-term visitors actually live — a neighbourhood of foreign food smells, unfamiliar music from upper windows, and signs in scripts you may not be able to read. It is not unwelcoming; Lusk's particular brand of hospitality extends here. But you are clearly a guest in someone else's version of the city.",
    exits: {
      s: { to: "embassy_row", desc: "The foreign quarter runs south toward Embassy Row." },
      n: { to: "government_district_approach", desc: "The quarter opens north toward the government district." },
      w: { to: "residency_west", desc: "A street runs west toward the quieter residency." },
      e: { to: "temple_row_east", desc: "A lane runs east to the east end of Temple Row." }
    }
  },

  "residency_west": {
    district: "residency",
    name: "Residency — West Lane",
    desc: "The quieter western side of the Residency, where the buildings thin out and the noise of the city drops. Older houses here, some converted into small boarding houses for short-term visitors. A laundry operates from a ground floor, its door open, steam drifting into the lane. At the far end the buildings stop entirely, replaced by a low stone wall beyond which the ground rises.",
    exits: {
      e: { to: "embassy_row", desc: "West Lane connects east to Embassy Row." },
      n: { to: "the_cliff_path", desc: "A gate in the wall opens onto a steep path climbing west." }
    }
  },

  "residency_east": {
    district: "residency",
    name: "Residency — East Lane",
    desc: "The eastern edge of the Residency, where it blurs into the Temple District. The buildings here are a mixture — a foreign boarding house next to a local family's home next to what appears to be a small private temple of entirely unclear affiliation. The lane is pleasant: shaded by overhanging upper floors, a fountain of no particular grandeur but good clean water at its centre.",
    exits: {
      w: { to: "embassy_row", desc: "East Lane runs west toward Embassy Row." },
      e: { to: "temple_row_east", desc: "The lane connects east to the east end of Temple Row." }
    }
  },

  "the_cliff_path": {
    district: "residency",
    name: "The Cliff Path",
    desc: "A steep, narrow path climbing through rough grass and sea-wind to a small headland at the island's western edge. The city falls away behind you. The path is not maintained but it is clearly used — the grass worn down, a stone placed conveniently as a step in one difficult section. At the top, the ground levels out to a small bare promontory with a view of the open sea in three directions. The wind is strong here. You are alone with the sound of it and the water far below.",
    exits: {
      s: { to: "residency_west", desc: "The path descends south back toward the city." },
      n: { to: "cliff_overlook", desc: "The path climbs to the headland's highest point." }
    }
  },

  "cliff_overlook": {
    district: "residency",
    name: "Cliff Overlook",
    desc: "The highest point of the western headland, a small flat space of bare rock at the island's edge. The drop to the sea is direct and considerable. On a clear day you can see the coastline of the mainland to the west, distant and grey. Closer, another island to the northwest, its own lights visible at night. The city of Lusk is spread out behind you — you can see the whole island from here, its buildings covering every available surface, the harbour curving at the south end, the Heights rising at the north. Someone has left a small cairn of stones at the edge. You don't disturb it.",
    exits: {
      s: { to: "cliff_path", desc: "The path descends back toward the city." }
    }
  },

  // ============================================================
  // GOVERNMENT DISTRICT
  // Upper-central Lusk, between the market districts and the Heights.
  // Where civic administration happens. Busy with bureaucracy.
  // ============================================================

  "government_district_approach": {
    district: "government",
    name: "Government District — Approach",
    desc: "The streets widen and the buildings grow more deliberate as the commercial districts give way to the civic ones. The architecture here is designed to communicate authority — wider facades, taller doors, stone rather than plaster. Guild messengers move quickly. Advocates in dark robes confer in low voices outside buildings whose function is expressed only in carved lettering above the doors. The noise of the market falls behind; the noise here is quieter and more serious.",
    exits: {
      s: { to: "money_changers_row", desc: "The approach runs south toward Money Changers' Row." },
      n: { to: "guildhall_street", desc: "The approach continues north toward the guildhall." },
      e: { to: "scholars_alley", desc: "A side street runs east to Scholars' Alley." },
      w: { to: "the_foreign_quarter", desc: "A street runs west into the Foreign Quarter." },
      u: { to: "bridge_of_seven_arches", desc: "A stone staircase climbs to the Bridge of Seven Arches above." }
    }
  },

  "guildhall_street": {
    district: "government",
    name: "Guildhall Street",
    desc: "A purposeful street leading to Lusk's cluster of guild buildings. The guilds spend their money on visible architecture — bronze plaques, polished stone, windows of expensive coloured glass. The street is well-maintained, the stones fitted tight. At the far end, the Guildhall itself rises: a massive building added to by every generation of guild masters, resulting in something impressive and slightly incoherent — three different architectural styles arguing with each other above a colonnade.",
    exits: {
      s: { to: "government_district_approach", desc: "Guildhall Street descends south toward the government approach." },
      n: { to: "heights_gate", desc: "Beyond the guildhall, a gate marks the entrance to the Heights." },
      e: { to: "the_mercantile_baths", desc: "The bathhouse entrance is marked by a plume of steam." },
      u: { to: "guildhall_upper_bridge", desc: "A covered bridge connects to the guildhall's upper floors." }
    }
  },

  "the_mercantile_baths": {
    district: "government",
    name: "The Mercantile Baths",
    desc: "A large steam-filled bathhouse catering to merchants and guild employees, though anyone who can pay is welcome. The changing rooms are cedar-panelled, the pool heated by a furnace below. Business is conducted here as much as in any counting house — conversations in the steam are considered private by long tradition. A barber operates from a chair near the entrance. The baths have been in continuous operation for over a century and the steam has darkened the ceiling a deep amber.",
    exits: {
      w: { to: "guildhall_street", desc: "The baths' entrance opens west onto Guildhall Street." }
    }
  },

  "guildhall_upper_bridge": {
    district: "government",
    name: "Guildhall Upper Bridge",
    desc: "A covered glassed-in walkway connecting two wings of the guildhall complex at the third storey. The floor is polished dark wood. Framed documents — charters, treaties, deeds — line the walls under glass. It is quiet here, cut off from the street noise below. A guild clerk hurries past without making eye contact. Through the windows on one side you can see the rooftops of the guildhall complex; on the other, the approach to the Heights.",
    exits: {
      d: { to: "guildhall_street", desc: "Stairs descend to Guildhall Street." },
      s: { to: "bridge_of_seven_arches", desc: "The bridge connects south to the Bridge of Seven Arches." }
    }
  },

  // ============================================================
  // THE HEIGHTS
  // The northernmost and highest district. The council sits here.
  // Old money, civic power, wide streets, deliberate grandeur.
  // ============================================================

  "heights_gate": {
    district: "heights",
    name: "Heights Gate",
    desc: "A pair of iron gates, open but watched by two guards in the livery of Lusk's civic authority — dark blue and salt-white, with the city's device on their breastplates. They watch without hostility; anyone may enter, but they are watching. Beyond the gates the streets widen, the buildings grow to five and six storeys with colonnaded ground floors, and the noise of commerce drops away entirely. The towers of the Heights are visible above, their flags catching the wind off the open water.",
    exits: {
      s: { to: "guildhall_street", desc: "The gate descends south toward Guildhall Street." },
      n: { to: "civic_plaza", desc: "Beyond the gate, the civic plaza opens to the north." }
    }
  },

  "civic_plaza": {
    district: "heights",
    name: "Civic Plaza",
    desc: "A grand open space at the elevated heart of Lusk, deliberately impressive. The paving is white stone, scrupulously clean. Official buildings line three sides — courts, records offices, the treasury, and others whose function is expressed only in carved lettering above closed doors. On the fourth side, the city falls away in a long view south: rooftops descending to the harbour, and beyond it the sea. A bronze statue at the centre holds a set of balanced scales. The figure's face has been worn away by weather and no one has recarved it.",
    exits: {
      s: { to: "heights_gate", desc: "The plaza descends south toward the heights gate." },
      e: { to: "records_tower_base", desc: "The records tower rises to the east." },
      w: { to: "court_of_arbiters", desc: "The court building occupies the western side of the plaza." },
      n: { to: "treasury_steps", desc: "The broad steps of the treasury rise to the north." },
      u: { to: "civic_plaza_terrace", desc: "A grand staircase climbs to the upper terrace." }
    }
  },

  "records_tower_base": {
    district: "heights",
    name: "Records Tower — Base",
    desc: "The base of Lusk's central records tower, tall and narrow, leaning almost imperceptibly toward the harbour. The ground floor is a public office where clerks process requests for documents, titles, and historical records with professional slowness. The queue moves, but it does not hurry. The walls are lined with pigeonholes stuffed with scrolls. A circular staircase at the back climbs into the tower proper; access is restricted beyond the third floor.",
    exits: {
      w: { to: "civic_plaza", desc: "The tower entrance opens west onto Civic Plaza." },
      u: { to: "records_tower_top", desc: "The circular staircase climbs to the upper floors." }
    }
  },

  "records_tower_top": {
    district: "heights",
    name: "Records Tower — Upper Floor",
    desc: "Near the top of the records tower, a circular room with windows on all sides. The views from here are the finest in Lusk — the full circuit of the island visible, the sea bright in every direction. The city sprawls below: the tangled old quarter, the market's coloured awnings, the harbour full of ships, the green patch of the cliff headland to the west. The horizon shows four other islands, the nearest with what might be another city, its own lights visible on clear evenings.",
    exits: {
      d: { to: "records_tower_base", desc: "The circular staircase descends to the tower base." }
    }
  },

  "civic_plaza_terrace": {
    district: "heights",
    name: "Civic Plaza — Upper Terrace",
    desc: "A wide stone terrace above the main plaza, used for official assemblies and public announcements. Today it is empty except for a sweeper moving methodically across the white stone. The view south from here is extraordinary — the whole city below, and the sea beyond it in both directions, the curve of the island visible at its edges. Behind you, heavy doors lead into the main government building, closed and flanked by two guards who are watching nothing in particular.",
    exits: {
      d: { to: "civic_plaza", desc: "The grand staircase descends to Civic Plaza." }
    }
  },

  "court_of_arbiters": {
    district: "heights",
    name: "Court of Arbiters",
    desc: "The court building's public waiting room — a long gallery with stone benches where disputes are queued like cargo. Petitioners sit with their documents and expressions of careful patience. Advocates in dark robes confer in low voices. A board lists today's cases in chalk, running to two columns. The sound of voices carries faintly from behind the heavy courtroom doors — someone is making an argument, at length, about something that appears to involve a warehouse and a promissory note.",
    exits: {
      e: { to: "civic_plaza", desc: "The court entrance opens east onto Civic Plaza." }
    }
  },

  "treasury_steps": {
    district: "heights",
    name: "The Treasury Steps",
    desc: "The broad steps of Lusk's treasury, flanked by columns of dark stone. The building is deliberately massive and deliberately plain — no ornament, no carving, just weight. Two guards stand at the top with the particular stillness of people who have been doing this for a long time. The treasury seal — the city's anchor-and-rope device in bronze — is set into the pavement at the foot of the steps. The building leans very slightly, like everything old in Lusk.",
    exits: {
      s: { to: "civic_plaza", desc: "The steps lead south back onto Civic Plaza." }
    }
  },

  // ============================================================
  // THE ROOFTOPS
  // A vertical district above the city proper.
  // Connected by bridges, ladders, plank walkways.
  // Its own world, its own community.
  // ============================================================

  "old_quarter_rooftops": {
    district: "rooftops",
    name: "Old Quarter Rooftops",
    desc: "A precarious world above the streets — flat roofs, sloping tiles, and the occasional rooftop terrace connected by plank bridges and iron ladders. It is surprisingly populated: residents dry laundry, tend small gardens in clay pots, sit watching the city below. A cat picks its way along a ridge tile with magnificent indifference. The footing is uncertain in places and the drop is real, but the view — and the privacy — is considerable.",
    exits: {
      d: { to: "copper_lane_bridge", desc: "A ladder descends to the Copper Lane upper bridge." },
      n: { to: "bridge_of_seven_arches", desc: "A rope bridge connects north to the Bridge of Seven Arches." },
      s: { to: "gatehouse_top", desc: "The old wall walkway leads south to the gatehouse top." },
      e: { to: "washing_terrace", desc: "A short plank bridge connects east to the washing terrace." }
    }
  },

  "washing_terrace": {
    district: "rooftops",
    name: "The Washing Terrace",
    desc: "A broad flat rooftop shared by three adjoining old quarter buildings, given over by common agreement to drying laundry. Lines criss-cross the space at head height, hung with everything from sailcloth to fine linen. Navigating it is a matter of ducking, turning sideways, and occasionally apologising to a sheet. In the gaps between the lines, the views are excellent. A trapdoor in the corner leads down and is never locked.",
    exits: {
      w: { to: "old_quarter_rooftops", desc: "A plank bridge connects west to the rooftop network." },
      d: { to: "copper_lane", desc: "The trapdoor drops into the upper floor of a building on Copper Lane." }
    }
  },

  "bridge_of_seven_arches": {
    district: "rooftops",
    name: "Bridge of Seven Arches",
    desc: "A long high bridge spanning a gap between two sections of the city — forty feet below it, a narrow street with its own oblivious life. The bridge is old and wide, its parapets worn smooth by ten thousand elbows. People use it as a meeting place as much as a thoroughfare: a seller of hot pastries works from a cart, two musicians have set up near the midpoint competing cheerfully. The arches below frame seven distinct slices of the lower city, each one a different view.",
    exits: {
      d: { to: "government_district_approach", desc: "Stone stairs descend to the government district approach." },
      s: { to: "old_quarter_rooftops", desc: "A rope bridge connects back to the old quarter rooftops." },
      n: { to: "guildhall_upper_bridge", desc: "The bridge continues north to the guildhall upper bridge." }
    }
  },

  "market_rooftops": {
    district: "rooftops",
    name: "Market Rooftops",
    desc: "Above the market district, the rooftops are more commercial than residential — skylights in the market hall below, ventilation chimneys, storage platforms for goods that don't quite fit in the buildings beneath them. A few enterprising vendors have set up stalls up here, selling to the rooftop regulars. The view down into Carnaby Square through a gap in the parapet is vertiginous and lively.",
    exits: {
      s: { to: "old_quarter_rooftops", desc: "A long bridge connects south to the old quarter rooftops." },
      n: { to: "guildhall_upper_bridge", desc: "A walkway connects north toward the guildhall bridge." },
      d: { to: "silk_market_gallery", desc: "A hatch connects down into the silk market gallery." }
    }
  },

  // ============================================================
  // THE SEWERS & UNDERWORKS
  // Below the city. Old, dark, occasionally inhabited.
  // Connected to the lower docks and the canal system.
  // ============================================================

  "sewer_entrance": {
    district: "sewers",
    name: "Sewer Entrance",
    desc: "You descend into Lusk's underside. The passage is ancient — older than most of the city above — built of fitted stone blocks that have never been named or recorded. The ceiling is low and dripping. The sewer runs as a narrow channel along one side of a walkway just wide enough for one person. The smell is powerful but not overwhelming. The sounds of the city above are muffled to near silence. In the darkness ahead, something small moves and then is still.",
    exits: {
      u: { to: "lower_docks_main", desc: "The iron rungs climb back up to the lower docks." },
      n: { to: "sewer_junction", desc: "The main sewer channel runs north under the old quarter." },
      e: { to: "sewer_east_branch", desc: "A side passage runs east under the harbour district." }
    }
  },

  "sewer_junction": {
    district: "sewers",
    name: "Sewer Junction",
    desc: "A wider chamber where several sewer channels meet. The ceiling is higher here — tall enough to stand straight. The space has clearly been used by people: crude marks on the wall (arrows, symbols, a scratched map someone began and abandoned), a wooden pallet in one corner with folded cloth on it. Someone lives here, or did. A grating in the ceiling lets in a thin column of grey light and the distant sounds of street life above.",
    exits: {
      s: { to: "sewer_entrance", desc: "The main channel runs south toward the entrance." },
      n: { to: "sewer_north", desc: "The north channel runs deeper under the city." },
      e: { to: "sewer_east_branch", desc: "The east passage runs toward the harbour district." },
      w: { to: "sewer_west_branch", desc: "A recently cleared passage runs west." },
      u: { to: "canal_steps", desc: "A rusty ladder climbs up through the grating to street level." }
    }
  },

  "sewer_east_branch": {
    district: "sewers",
    name: "Sewer — East Branch",
    desc: "A narrower passage running east beneath the harbour district. The walls are wet, and somewhere ahead water drips steadily. The stone is very old — blocks cut with tools no longer used. Small alcoves are set into the walls at irregular intervals, their purpose unclear. One of them contains a small ceramic jar sealed with wax, placed with deliberate care.",
    exits: {
      w: { to: "sewer_junction", desc: "The east branch runs west back to the sewer junction." },
      s: { to: "sewer_entrance", desc: "The passage connects south to the sewer entrance." },
      n: { to: "lower_docks_east", desc: "A passage connects north to the lower docks east section." }
    }
  },

  "sewer_west_branch": {
    district: "sewers",
    name: "Sewer — West Branch",
    desc: "A recently cleared branch of the sewer — recently in the sense that the torch bracket on the wall is not entirely rusted, and someone has swept the worst of the debris aside. The passage runs west under the old quarter, its walls showing evidence of hasty excavation alongside the original stonework. Boot prints in the mud floor go in both directions.",
    exits: {
      e: { to: "sewer_junction", desc: "The west branch connects east back to the sewer junction." },
      u: { to: "the_broken_wheel", desc: "An iron ladder climbs up through the ceiling — into the cellar of the Broken Wheel." },
      w: { to: "market_cellars", desc: "The passage connects west into the market cellars." }
    }
  },

  "sewer_north": {
    district: "sewers",
    name: "Sewer — North Channel",
    desc: "Deep under the government district now. The passage is old enough that the stone shows signs of an earlier structure beneath it — arched vaults of a different era visible where sections of the later sewer floor have cracked and subsided. The sound of running water is constant. The passage ahead is partly flooded — ankle deep — and the water moves with a slow deliberate current toward something further north.",
    exits: {
      s: { to: "sewer_junction", desc: "The north channel runs south back to the junction." },
      n: { to: "old_cistern", desc: "The channel opens into a vast underground space ahead." }
    }
  },

  "old_cistern": {
    district: "sewers",
    name: "The Old Cistern",
    desc: "A vast underground chamber, its ceiling supported by rows of columns that vanish into the darkness above. The floor is a shallow lake — still, black, perfectly reflecting the faint light from a crack in the ceiling far above. It was built to hold the city's fresh water reserves in times of siege, and it is very old indeed. The columns are carved, though the carvings are submerged and invisible from here. The silence is total except for the occasional drip and a low resonant hum that seems to have no source.",
    exits: {
      s: { to: "sewer_north", desc: "The channel runs south back toward the sewer junction." },
      e: { to: "cistern_far_side", desc: "A narrow ledge runs along the east wall through the darkness." }
    }
  },

  "cistern_far_side": {
    district: "sewers",
    name: "The Old Cistern — Far Side",
    desc: "The eastern edge of the cistern, reached by a ledge barely wide enough for careful walking. The water beside you is still and black. Set into the wall is a door of old iron, sea-green with age, sealed with a lock of a type you don't recognise. Above it, carved into the stone in a script that predates Lusk, are letters you cannot read. The hum is slightly louder here.",
    exits: {
      w: { to: "old_cistern", desc: "The ledge runs west back to the main cistern chamber." }
    }
  }

  // ============================================================
  // ADD NEW ROOMS HERE
  // Paste a new block anywhere in this file.
  // Every room except the last needs a trailing comma.
  // ============================================================

};

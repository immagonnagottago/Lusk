// =============================================================================
// ITEMS.JS — Item definitions and starting locations for Lusk
// =============================================================================
// Each item has:
//   id          — unique key (matches the key in this object)
//   name        — display name
//   roomDesc    — short line shown when item is in a room ("A battered tin cup sits on the table.")
//   examineDesc — longer text shown when player examines it
//   room        — starting room ID (where the item begins the game)
//   fixed       — (optional) true if item cannot be picked up
//   fixedMsg    — (optional) message shown if player tries to take a fixed item
// =============================================================================

const ITEMS = {

  // ---------------------------------------------------------------------------
  // THE HARBOUR
  // ---------------------------------------------------------------------------

  "bronze_anchor": {
    name: "the bronze anchor",
    roomDesc: "A small bronze anchor hangs above the bar on an iron hook.",
    examineDesc: "A decorative bronze anchor, old and well-polished. Someone has drilled a small hole in the back and run a chain through it — it has been on this wall for a very long time. The flukes are worn smooth where generations of people have run their fingers over them without thinking.",
    room: "the_bronze_anchor",
    fixed: true,
    fixedMsg: "The anchor is bolted to the wall. It has probably been there longer than you have been alive."
  },

  "harbour_logbook": {
    name: "a lighthouse logbook",
    roomDesc: "A logbook lies open on the keeper's desk.",
    examineDesc: "The lighthouse keeper's logbook, written in a small precise hand. Most entries are routine — weather conditions, ships identified by flag and rig, visibility reports. But there are occasional notes in a different ink, added later, that refer to something seen at night 'beyond the eastern shelf' that the keeper declines to describe in detail beyond the word 'lights'. The most recent of these notes is dated three weeks ago.",
    room: "lighthouse_top"
  },

  "chart_fragment": {
    name: "a torn chart fragment",
    roomDesc: "A piece of nautical chart is pinned to the noticeboard, half torn away.",
    examineDesc: "A fragment of a nautical chart showing a section of sea to the northeast of Lusk. Someone has drawn a course correction in red ink over the printed lines, and beside it written a single word in the margin that has been mostly torn away. What remains reads: '...AVOID'. The soundings in one area have been crossed out and replaced with question marks.",
    room: "chandlers_row"
  },

  "sailors_knife": {
    name: "a sailors knife",
    roomDesc: "A folding knife sits on one of the tavern tables, left behind or forgotten.",
    examineDesc: "A well-worn sailor's folding knife with a bone handle, the blade kept sharp despite the nicks in it. The initials 'P.V.' have been scratched into the handle. It folds cleanly and the lock is solid. Someone took care of this.",
    room: "the_bronze_anchor"
  },

  "fish_token": {
    name: "a small silver fish",
    roomDesc: "A small silver fish-shaped token has fallen near the harbour shrine.",
    examineDesc: "A small pressed-silver token in the shape of a leaping fish, the kind left at shrines by sailors before a long voyage. It is worn smooth from many hands. On the back, too faint to read without good light, is an inscription in a language you don't recognise.",
    room: "west_quay"
  },

  "customs_seal": {
    name: "an official wax seal",
    roomDesc: "A broken customs seal sits in the corner of the inspection bay.",
    examineDesc: "A disc of red wax bearing the impression of Lusk's anchor-and-rope device — the official seal used to certify inspected cargo. This one has been broken, cleanly, as if someone cut the cord it was threaded on rather than breaking the wax itself. It shouldn't be lying here.",
    room: "customs_house"
  },

  // ---------------------------------------------------------------------------
  // THE OLD QUARTER
  // ---------------------------------------------------------------------------

  "copper_lantern": {
    name: "a copper lantern",
    roomDesc: "A copper lantern hangs low on a bracket, unlit.",
    examineDesc: "One of Copper Lane's characteristic lanterns, detached from its bracket — whether it fell or was taken down for repair is unclear. The copper is green-tinged with age but the glass is intact. It still has oil in it and would light with a flame.",
    room: "copper_lane"
  },

  "the_sealed_jar": {
    name: "a sealed ceramic jar",
    roomDesc: "A small ceramic jar, sealed with wax, sits in an alcove in the sewer wall.",
    examineDesc: "A small ceramic jar of good quality, sealed carefully with red wax. It has been placed rather than dropped — set back in the alcove with some deliberateness. The wax seal shows the impression of a thumb rather than any official device. Whatever is inside makes no sound when you shake it gently. The jar is warm, which it shouldn't be down here.",
    room: "sewer_east_branch",
    fixed: true,
    fixedMsg: "Something makes you hesitant to take it. It was placed here deliberately. You leave it where it is."
  },

  "old_coin": {
    name: "an old coin",
    roomDesc: "An old coin lies in a crack between the flagstones.",
    examineDesc: "A thick coin of unfamiliar metal, heavier than it looks. The face shows a profile you don't recognise — a figure wearing something that might be a crown or might be something else entirely. The reverse shows a ship with too many masts. It's not a mote, not any currency currently in use in Lusk, and not from any nation you can place. It is very old.",
    room: "old_wall_gate"
  },

  "gnomon_pamphlet": {
    name: "a small printed pamphlet",
    roomDesc: "A small pamphlet has been left on one of the benches.",
    examineDesc: "A modest printed pamphlet, four pages, titled 'On the Nature of Knowing' in plain type. It is not a tract or a conversion document — it reads more like a series of honest questions. 'What do you know for certain? What do you believe without knowing? What does the difference cost you?' There is no author listed. The printing is careful and the paper is good quality.",
    room: "order_of_gnomes"
  },

  "glass_beads": {
    name: "a string of coloured glass beads",
    roomDesc: "A broken string of coloured glass beads lies on the ground at the entrance to the Narrow.",
    examineDesc: "A string of small glass beads in deep blue, green, and amber, the thread broken. These are the beads that hang across the entrance to the Narrow — someone replaces them when they break, and here is a broken set waiting to be replaced or discarded. The glass is thick and bubbled, clearly hand-made. Each bead is slightly different.",
    room: "the_narrow"
  },

  // ---------------------------------------------------------------------------
  // CARNABY MARKET
  // ---------------------------------------------------------------------------

  "childs_map": {
    name: "a hand-drawn map",
    roomDesc: "A child is selling hand-drawn maps from a corner of the square. One sits on the ground nearby.",
    examineDesc: "A map of Lusk drawn in careful ink on good paper by a child who clearly knows the city well. The proportions are slightly off but the major landmarks are all present — the harbour, the market, the Heights, the old wall. Several places have small annotations: 'good bread here', 'don't go here at night', 'the birds are friendly'. It is surprisingly useful.",
    room: "carnaby_market_square"
  },

  "spice_packet": {
    name: "an unmarked spice packet",
    roomDesc: "A small paper packet of spice sits on the edge of a stall, unlabelled.",
    examineDesc: "A small folded paper packet of ground spice in a deep reddish-brown, sealed with a twist. The label, if it had one, is gone. The smell is extraordinary — warm and complex, with something underneath it that you can't quite name. You've never smelled anything quite like it.",
    room: "spice_colonnade"
  },

  "mote_purse": {
    name: "a small leather purse",
    roomDesc: "A small leather purse sits on the floor beneath one of the changers' booths.",
    examineDesc: "A small leather purse containing eleven motes — Lusk's currency, small coins with a hole at the centre, threaded on a short cord for easy counting. The purse itself is plain but well-made. Someone dropped this and hasn't come back for it. Eleven motes is not a trivial amount.",
    room: "money_changers_row"
  },

  "bolt_of_cloth": {
    name: "a bolt of deep indigo cloth",
    roomDesc: "A bolt of deep indigo cloth leans against the wall, set aside from the main stalls.",
    examineDesc: "A bolt of cloth in a deep indigo so saturated it seems to absorb light rather than reflect it. The weave is tight and the hand is extraordinary — heavy enough to be substantial, light enough to drape. There's no vendor tag on it, no price. It has been placed here and left, which in the Silk Market suggests either an argument or an arrangement.",
    room: "silk_market",
    fixed: true,
    fixedMsg: "The bolt is too heavy and unwieldy to carry comfortably."
  },

  // ---------------------------------------------------------------------------
  // TEMPLE DISTRICT
  // ---------------------------------------------------------------------------

  "cancelled_map": {
    name: "a crossed-out map",
    roomDesc: "A hand-drawn map, heavily crossed out, is pinned to the scholars' noticeboard.",
    examineDesc: "A hand-drawn map of something — coastline, possibly, or the outline of a building's foundations — drawn with great care and then crossed out completely with thick strokes of a different pen. The crossings-out are angry rather than casual. Underneath them, if you hold the paper to the light at an angle, you can make out some of the original lines. Whatever was mapped here, someone decided it shouldn't be.",
    room: "scholars_alley"
  },

  "reader_pass": {
    name: "an archive reader's pass",
    roomDesc: "A reader's pass lies on one of the reading tables, apparently forgotten.",
    examineDesc: "An official reader's pass for Lusk's civic archive, printed on heavy card with the city seal embossed in the corner. The name written in the holder's field has been rubbed partially away — deliberately, it looks like. The pass is dated this year and hasn't expired. It would get you through the locked door at the back of the reading room.",
    room: "archive_reading_room"
  },

  "incense_stick": {
    name: "a stick of black incense",
    roomDesc: "An unlit stick of black incense has rolled under one of the pews.",
    examineDesc: "A single stick of incense in an unusual near-black colour, unlit and unbroken. The smell even unlit is remarkable — deep and resinous, with something underneath it that is harder to name. It doesn't match any of the burning incenses in the room. You haven't seen this kind before.",
    room: "order_of_gnomes"
  },

  // ---------------------------------------------------------------------------
  // THE RESIDENCY
  // ---------------------------------------------------------------------------

  "foreign_letter": {
    name: "a sealed letter",
    roomDesc: "A sealed letter has been slipped under a door and not retrieved.",
    examineDesc: "A letter sealed with plain wax, no device. The address on the front is written in two scripts — the outer address in the common tongue reads only 'for the attention of the house', which tells you nothing. The inner address, in a script you don't recognise, could say anything. The letter is thin — a single sheet, probably. The wax is unbroken.",
    room: "residency_east"
  },

  "cairn_stone": {
    name: "a cairn stone",
    roomDesc: "A small cairn of stones stands at the cliff's edge.",
    examineDesc: "The cairn is made of flat stones stacked with quiet care — not haphazardly piled but balanced, deliberate. Each stone is the same pale grey of the headland rock. There is no inscription, no marker, no explanation. Someone built this and comes back to maintain it. It has clearly stood through weather.",
    room: "cliff_overlook",
    fixed: true,
    fixedMsg: "You don't disturb it. Some things should stay where they are."
  },

  // ---------------------------------------------------------------------------
  // GOVERNMENT DISTRICT
  // ---------------------------------------------------------------------------

  "broken_seal": {
    name: "a broken guild seal",
    roomDesc: "A broken seal of pressed wax lies on the bridge floor.",
    examineDesc: "A disc of green wax bearing the impression of one of the merchant guilds — you can make out a stylised set of scales. It has been broken deliberately, the cord cut. Dropped here or left here. Guild seals certify documents and agreements; a broken one means something was voided, or someone wanted it to look that way.",
    room: "guildhall_upper_bridge"
  },

  "advocates_brief": {
    name: "an advocate's brief",
    roomDesc: "A sheaf of papers tied with black ribbon sits on one of the waiting benches.",
    examineDesc: "A legal brief tied with black ribbon — several pages of dense formal writing in the style used by Lusk's advocates. The case heading has been folded under, presumably for confidentiality, but the brief itself references a disputed claim over warehouse space on the East Quay and a promissory note that both parties appear to interpret differently. The arguing you can hear through the courtroom doors may well be about this.",
    room: "court_of_arbiters"
  },

  // ---------------------------------------------------------------------------
  // THE HEIGHTS
  // ---------------------------------------------------------------------------

  "worn_statue": {
    name: "the faceless statue",
    roomDesc: "A bronze statue stands at the centre of the plaza, holding a set of scales.",
    examineDesc: "A bronze figure of considerable age, holding a set of balanced scales. The body is in good condition — maintained, polished. But the face has been worn completely smooth by weather, or possibly by hands. You can't tell if this was deliberate. The scales it holds are balanced precisely. The plaque at the base reads only: LUSK. No name, no date, no title.",
    room: "civic_plaza",
    fixed: true,
    fixedMsg: "The statue is bolted to a stone plinth. It isn't going anywhere."
  },

  // ---------------------------------------------------------------------------
  // THE SEWERS & UNDERWORKS
  // ---------------------------------------------------------------------------

  "sewer_pallet": {
    name: "a wooden pallet with folded cloth",
    roomDesc: "A wooden pallet in the corner holds a folded piece of cloth.",
    examineDesc: "A rough wooden pallet — the kind used for cargo — with a piece of folded cloth on it that has been used as a blanket. The cloth is clean and was folded deliberately. Whoever slept here left in an orderly way. Under the edge of the pallet, scratched into the stone floor, is a small mark — an arrow pointing north, and beneath it, three lines.",
    room: "sewer_junction",
    fixed: true,
    fixedMsg: "The pallet is heavy and awkward. Not worth taking."
  },

  "iron_key": {
    name: "an old iron key",
    roomDesc: "A large iron key lies in the mud near the east branch entrance.",
    examineDesc: "A heavy iron key, old and pitted with rust but still solid. The bow — the ring at the top — is formed in an unusual shape, almost like a wave or a flame. It is too large for any ordinary door lock. You have not yet seen what it opens.",
    room: "sewer_junction"
  }

};

-- ============================================================
-- COMPLETE DATA OVERHAUL — Replace AI-generated content with
-- real game data from itch.io, YouTube, and fan community
-- ============================================================

-- Clear all existing (incorrect) data
DELETE FROM endings;
DELETE FROM routes;
DELETE FROM characters;

-- Reset auto-increment
DELETE FROM sqlite_sequence WHERE name IN ('characters', 'routes', 'endings');

-- ============================================================
-- CHARACTERS (real game characters)
-- ============================================================

INSERT INTO characters (name, slug, role, personality, route_hint, icon, sort_order) VALUES
-- MAIN ROUTES (playable in v0.2)
('Pierrot', 'pierrot', 'Silent Yandere',
 'The silent clown who wears white and carries a bell. Pierrot tilts his head with a soft chime — cat-like, endearing, and utterly devoted. But beneath the gentle exterior lies an obsessive yandere who will stop at nothing to keep you. He crosses the fourth wall, aware of being watched. In the forbidden love story, he was the only monster who didn''t eat Columbina — a mercy that haunts him still. His words cut deep: "My sweet angel, don''t make me devour you too."',
 'Pay attention to his bell sounds and body language — silence speaks louder than words',
 'ringmaster', 1),

('Harlequin', 'harlequin', 'The Rival',
 'Tall, green-clad, and dangerous. Harlequin has curly hair, claws, and zero trust in love. He doesn''t take physical affection well — hold his hand and he raises his claws defensively. He pursues you not out of love, but to "win" against Pierrot. He''s confident in his attractiveness but can''t believe anyone would truly choose him. In the forbidden love story, he killed Columbina out of jealousy. Green is the color of envy, and Harlequin wears it like armor.',
 'Be patient with his walls — physical affection confuses him',
 'fortune', 2),

-- SUPPORTING CHARACTERS (fans requesting routes)
('The Doctor', 'doctor', 'Mysterious Healer',
 'A Dracula-accented figure whose presence sends shivers down your spine. The Doctor''s scene in Day 2 is one of the most memorable in the game — fans consistently praise the voice acting and atmosphere. He operates in the shadows of the circus, and his true allegiance remains unclear. Players are campaigning hard for a romance route.',
 'Pay close attention during his Day 2 scene — every detail matters',
 'strongman', 3),

('The Jester', 'jester', 'Storyteller',
 'The keeper of the circus''s darkest secret. The Jester tells the forbidden love story — the tale of Harlequin, Pierrot, and Columbina that mirrors real Commedia dell''Arte. Don''t skip the Jester''s scenes: they contain the most important lore in the game, revealing why the circus exists and what happened to Columbina.',
 'Never skip the Jester''s story — it holds the key to everything',
 'trapeze', 4),

('Ticket Taker', 'ticket-taker', 'Gatekeeper',
 'The enigmatic figure who gave you the pink ticket at the café — and then appeared again at the circus entrance. The mirror scene in Day 2 confirms the connection. His famous line — "Don''t speak" — gives players goosebumps. The Day 2 voice acting elevates every scene he''s in.',
 'The mirror scene reveals his true connection to the circus',
 'fire', 5),

-- LORE CHARACTER
('Columbina', 'columbina', 'The Lost Love',
 'The original love interest from the forbidden love story. You take her place in the circus, but the game insists you are NOT her — the characters know you''re different. She says "obrigada" (Portuguese for "thank you"), hinting at a cultural connection. Naming yourself "Columbina" at the name entry screen triggers a full animation and reaction. She was loved by Pierrot and feared Harlequin — and was ultimately consumed by the circus.',
 'Try entering "Columbina" as your name for a hidden scene',
 'star', 6),

('Carol', 'carol', 'Supporting Character',
 'A supporting character in the circus world. Less is known about Carol compared to the main cast, but fans have expressed interest in a romance route. Her role may expand in future updates as the story continues into Day 3 and beyond.',
 'Watch for her appearances — her story may surprise you',
 'star', 7);

-- ============================================================
-- ROUTES
-- ============================================================

INSERT INTO routes (character_slug, title, slug, summary, difficulty, ending_count, sort_order) VALUES
('pierrot', 'The Silent Devotion', 'pierrot-route',
 'Pierrot''s route is the most developed path in v0.2. Follow his silent, obsessive devotion as he becomes increasingly fixated on you. Key scenes include: the first meeting where he tilts his head with a bell chime, the café scene where the rude customer appears later killed in his performance, the fourth-wall-breaking moment where he acknowledges being watched, and the devastating line "My sweet angel, don''t make me devour you too." The route explores whether his love is genuine or just another act in the circus. Day 2 adds voice acting by Darthsuki and deeper character development.',
 'Normal', 1, 1),

('harlequin', 'The Green-Eyed Game', 'harlequin-route',
 'Harlequin''s route is reportedly difficult — players keep accidentally triggering Pierrot interactions instead. His path explores jealousy, distrust, and the desperate need to "win." Key scenes include: his intimidating first appearance (tall, green-clad, claws), moments where physical affection confuses him (he raises his claws defensively when you hold his hand), and his confession that he doesn''t believe anyone would choose him. In the forbidden love story revealed by the Jester, Harlequin killed Columbina out of jealousy. The challenge: can you break through his walls without accidentally falling into Pierrot''s orbit?',
 'Hard', 0, 1),

('doctor', 'The Healer''s Secret', 'doctor-route',
 'No confirmed route yet — but the Doctor''s Day 2 scene is one of the most praised moments in the game. His Dracula-like accent and mysterious demeanor have fans demanding a full romance route. The Doctor operates in the shadows, and his true role in the circus remains unclear. Watch this space.',
 'Unknown', 0, 1),

('jester', 'The Forbidden Tale', 'jester-route',
 'No confirmed route yet. The Jester serves as the game''s primary lore keeper, telling the forbidden love story of Pierrot, Harlequin, and Columbina. His scenes reference real Commedia dell''Arte tradition. Fans want a romance route, and his importance to the story suggests he may become playable in future updates.',
 'Unknown', 0, 1),

('ticket-taker', 'Behind the Mirror', 'ticket-taker-route',
 'No confirmed route yet. The Ticket Taker''s connection between the café and the circus is one of the game''s biggest reveals. His mirror scene in Day 2 and the iconic "Don''t speak" line have made him a fan favorite. The fact that he gave you the pink ticket before you even knew the circus existed raises deep questions about fate and free will.',
 'Unknown', 0, 1),

('columbina', 'The Echo of Columbina', 'columbina-route',
 'Not a playable route — Columbina is the ghost that haunts the circus. She was the original love interest in the forbidden love story: loved by Pierrot, stalked by Harlequin, and ultimately consumed by the circus. You are NOT Columbina, but the characters can''t help seeing echoes of her in you. Her story is told through the Jester''s narration and scattered clues throughout Day 1 and Day 2.',
 'Lore', 0, 1),

('carol', 'The Supporting Act', 'carol-route',
 'Carol''s role in the current build is limited, but fan interest in her character has been noted. Her story may expand significantly in Day 3 and beyond as the developer continues building out the circus world.',
 'Unknown', 0, 1);

-- ============================================================
-- ENDINGS (only confirmed ones)
-- ============================================================

INSERT INTO endings (route_slug, name, slug, ending_type, description, unlock_hint, sort_order) VALUES
('pierrot-route', 'The Devouring', 'pierrot-ending-bad', 'bad',
 'The only confirmed ending in v0.2. When you fail to navigate the dangerous balance between Pierrot''s obsession and the circus''s dark hunger, the show reaches its inevitable conclusion. This ending reveals the true nature of the circus — and why Pierrot''s love was always destined to consume. Both beautiful and devastating, it''s a must-play for understanding the full story. The ending connects to the forbidden love story told by the Jester, closing the loop on Columbina''s tragedy.',
 'Fail to resist the circus''s pull — let Pierrot''s obsession run unchecked',
 1);

-- Update site_pages with real game content
UPDATE site_pages SET
  hero_title = 'Your Fan Guide to The Freak Circus',
  hero_subtitle = 'Character profiles, route hints, and ending guides for The Freak Circus by Garula. Updated as the game develops.',
  hero_cta = 'Browse Character Guides — Free',
  meta_description = 'Fan-made guide for The Freak Circus by Garula. Pierrot and Harlequin route walkthroughs, Day 1 & Day 2 choices, hidden scenes, name easter eggs, and lore breakdowns. Updated for v0.2.',
  meta_title = 'The Freak Circus Guide — Pierrot & Harlequin Routes, Endings, Secrets'
WHERE slug = 'home';

-- Update Features section
UPDATE site_blocks SET content = '1 Bad Ending confirmed (v0.2) — more planned as the game develops. Track which ones you''ve found.' WHERE section = 'features' AND position = 1;
UPDATE site_blocks SET content = 'Deep character profiles for all 7 characters — Pierrot, Harlequin, the Doctor, the Jester, the Ticket Taker, Columbina, and Carol.' WHERE section = 'features' AND position = 2;
UPDATE site_blocks SET content = 'Spoilers hidden by default. Click to reveal route details, ending descriptions, and hidden scene triggers.' WHERE section = 'features' AND position = 3;

-- Update FAQs with real game questions
UPDATE site_faqs SET question = 'How many endings are in The Freak Circus?', answer = 'As of v0.2, there is 1 confirmed bad ending. The developer has planned endings for Pierrot, Harlequin, the Protagonist, and a combined ending — but the script is still a work in progress.' WHERE sort_order = 1;

UPDATE site_faqs SET question = 'How do I access Day 2?', answer = 'Day 2 is included in v0.2 of the game. After finishing Day 1, the game should continue to Day 2. If you see "End of Chapter 1" and can''t proceed, make sure you''re playing the latest version (v0.2) from the official itch.io page at garula.itch.io/the-freak-circus.' WHERE sort_order = 2;

UPDATE site_faqs SET question = 'Which character route should I play first?', answer = 'Pierrot''s route is the most developed in v0.2, with voice acting by Darthsuki in Day 2. Harlequin''s route is harder — players report accidentally triggering Pierrot interactions. Start with Pierrot if you want the fullest experience.' WHERE sort_order = 3;

UPDATE site_faqs SET question = 'What is the forbidden love story?', answer = 'Told by the Jester in Day 2, it reveals the backstory of Pierrot, Harlequin, and Columbina — inspired by real Commedia dell''Arte. In the game''s version, Harlequin killed Columbina out of jealousy, and Pierrot was the only monster who didn''t consume her. Don''t skip the Jester''s scenes — they contain critical lore.' WHERE sort_order = 4;

UPDATE site_faqs SET question = 'What are the name entry easter eggs?', answer = 'Entering specific character names triggers reactions: "Pierrot", "Harlequin", "Jester", "Doctor", "Ticket Taker" show colored text but are rejected. "Columbina" triggers a full animation. "Neko" (the developer''s name) shows a reaction but CAN be used. Try them all!' WHERE sort_order = 5;

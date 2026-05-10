-- TFC Guide Seed Data

INSERT OR IGNORE INTO characters (id, name, slug, role, personality, route_hint, icon, sort_order) VALUES
(1, 'Luka', 'luka', 'Circus Ringmaster', 'Charismatic, manipulative, hides dark secrets behind a dazzling smile', 'Choose trust over suspicion at the crossroads', 'ringmaster', 1),
(2, 'Vesper', 'vesper', 'Fortune Teller', 'Mysterious, cold exterior but deeply loyal once trust is earned', 'Follow the tarot readings consistently', 'fortune', 2),
(3, 'Kazimir', 'kazimir', 'Strongman', 'Gentle giant with a tragic past, protective instincts', 'Defend him during the Act 2 confrontation', 'strongman', 3),
(4, 'Nyx', 'nyx', 'Trapeze Artist', 'Free-spirited, unpredictable, fears commitment', 'Let her go at the Midnight Bridge scene', 'trapeze', 4),
(5, 'Dmitri', 'dmitri', 'Fire Breather', 'Intense, passionate, struggles with inner demons', 'Choose honesty over flattery in Act 1', 'fire', 5);

INSERT OR IGNORE INTO routes (id, character_slug, title, slug, summary, difficulty, ending_count, sort_order) VALUES
(1, 'luka', 'The Ringmaster''s Game', 'luka-route', 'Navigate Luka''s web of lies and discover the truth behind the circus. Multiple branching paths lead to dramatically different conclusions.', 'Hard', 3, 1),
(2, 'vesper', 'Cards of Fate', 'vesper-route', 'Vesper''s tarot readings are never wrong. Follow the cards to unlock hidden truths about the circus and yourself.', 'Normal', 3, 2),
(3, 'kazimir', 'Behind the Curtain', 'kazimir-route', 'The strongest man in the circus carries the heaviest burden. Help Kazimir confront his past.', 'Normal', 2, 3),
(4, 'nyx', 'Flight of the Acrobat', 'nyx-route', 'Nyx flies high but falls hard. Catch her before she disappears forever.', 'Hard', 3, 4),
(5, 'dmitri', 'Burning Truths', 'dmitri-route', 'Fire reveals and fire destroys. Dmitri''s path is a dance between passion and destruction.', 'Normal', 2, 5);

INSERT OR IGNORE INTO endings (id, route_slug, name, slug, ending_type, description, unlock_hint, sort_order) VALUES
(1, 'luka-route', 'The Final Act', 'luka-ending-final', 'good', 'Luka reveals the truth and you both escape the circus together', 'Trust Luka at every critical moment', 1),
(2, 'luka-route', 'Under the Spotlight', 'luka-ending-neutral', 'normal', 'The show goes on, but something feels off', 'Mix trust and suspicion evenly', 2),
(3, 'luka-route', 'The Last Curtain', 'luka-ending-bad', 'bad', 'Betrayal leads to the circus consuming you both', 'Challenge Luka repeatedly without evidence', 3),
(4, 'vesper-route', 'Written in the Stars', 'vesper-ending-good', 'good', 'The final card reveals a shared destiny', 'Follow all tarot readings faithfully', 1),
(5, 'vesper-route', 'The Tower', 'vesper-ending-neutral', 'normal', 'Truth comes at a painful cost', 'Question some readings but follow most', 2),
(6, 'vesper-route', 'The Fool''s Journey', 'vesper-ending-bad', 'bad', 'Ignoring the cards leads to disaster', 'Dismiss the tarot readings consistently', 3),
(7, 'kazimir-route', 'Unbreakable', 'kazimir-ending-good', 'good', 'Together you overcome the past and forge a new future', 'Stand by Kazimir through every trial', 1),
(8, 'kazimir-route', 'The Weight of the World', 'kazimir-ending-bad', 'bad', 'The burden proves too much for both of you', 'Try to fix things alone without his input', 2),
(9, 'nyx-route', 'Grounded', 'nyx-ending-good', 'good', 'Nyx finally finds a reason to stay', 'Let her go at Midnight Bridge, then wait', 1),
(10, 'nyx-route', 'Free Fall', 'nyx-ending-neutral', 'normal', 'She flies away but leaves something behind', 'Try to hold on but accept her choice', 2),
(11, 'nyx-route', 'Vanishing Act', 'nyx-ending-bad', 'bad', 'Nyx disappears and the trail goes cold', 'Chase her aggressively at every turn', 3),
(12, 'dmitri-route', 'Phoenix Rising', 'dmitri-ending-good', 'good', 'From the ashes, both of you are reborn', 'Be honest even when it hurts', 1),
(13, 'dmitri-route', 'Ashes to Ashes', 'dmitri-ending-bad', 'bad', 'The fire consumes everything you tried to build', 'Enable his destructive tendencies', 2);

INSERT OR IGNORE INTO tips (id, category, title, content, sort_order) VALUES
(1, 'beginner', 'Save Before Every Choice', 'The game does NOT auto-save before branching decisions. Manual save is your best friend.', 1),
(2, 'beginner', 'Read Every Letter', 'Collectible letters contain crucial backstory. Missing them locks you out of certain endings.', 2),
(3, 'advanced', 'Hidden Affection Meter', 'Each character has a hidden affection stat. Dialogue choices affect it in ways the game doesn''t show.', 3),
(4, 'advanced', 'The Midnight Bridge Trick', 'At the Midnight Bridge scene, waiting 10 seconds before choosing unlocks a hidden dialogue option.', 4),
(5, 'advanced', 'Act 3 Branching Point', 'Your choices in Act 1 determine which Act 3 paths are available. Plan ahead for the ending you want.', 5),
(6, 'general', 'All Endings Checklist', 'There are 13 total endings across 5 routes. Track your progress to find the True Ending.', 6);

INSERT OR IGNORE INTO faq (id, question, answer, sort_order) VALUES
(1, 'How many endings does The Freak Circus have?', 'There are 13 endings total across 5 character routes: 3 for Luka, 3 for Vesper, 2 for Kazimir, 3 for Nyx, and 2 for Dmitri.', 1),
(2, 'Is there a True Ending?', 'Yes. Unlock all 13 endings to access the hidden True Ending route, which reveals the circus''s real secret.', 2),
(3, 'Can I play routes in any order?', 'Yes, but Luka''s route is recommended last as it contains major spoilers for other routes.', 3),
(4, 'How long is one playthrough?', 'A single route takes about 2-3 hours. Completing all routes and endings takes approximately 15-20 hours.', 4),
(5, 'Does the game have voice acting?', 'Partial voice acting is available for main characters. Full voice acting is planned for a future update.', 5),
(6, 'Is The Freak Circus available on mobile?', 'Currently PC and Mac only. A mobile version is in development.', 6),
(7, 'How do I unlock the bonus gallery?', 'Complete at least one good ending on any route. The gallery tracks CGs, music, and scene replays.', 7),
(8, 'My save file got corrupted, what do I do?', 'Delete the save folder and restart. Cloud saves may help recover progress if enabled.', 8);

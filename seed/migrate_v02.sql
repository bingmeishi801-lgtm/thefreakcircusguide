-- Migration: Update data to match actual game state (v0.2)
-- Delete old data first (characters stay the same)

DELETE FROM endings;
DELETE FROM routes;
DELETE FROM tips;
DELETE FROM faq;

-- Re-insert routes
INSERT INTO routes (id, character_slug, title, slug, summary, difficulty, ending_count, sort_order) VALUES
(1, 'luka', 'The Ringmaster''s Game', 'luka-route', 'Navigate Luka''s web of lies and discover the truth behind the circus. The only route with a confirmed ending so far.', 'Hard', 1, 1),
(2, 'vesper', 'Cards of Fate', 'vesper-route', 'Vesper''s tarot readings are never wrong. Follow the cards to unlock hidden truths about the circus and yourself.', 'Normal', 0, 2),
(3, 'kazimir', 'Behind the Curtain', 'kazimir-route', 'The strongest man in the circus carries the heaviest burden. Help Kazimir confront his past.', 'Normal', 0, 3),
(4, 'nyx', 'Flight of the Acrobat', 'nyx-route', 'Nyx flies high but falls hard. Catch her before she disappears forever.', 'Hard', 0, 4),
(5, 'dmitri', 'Burning Truths', 'dmitri-route', 'Fire reveals and fire destroys. Dmitri''s path is a dance between passion and destruction.', 'Normal', 0, 5);

-- Re-insert endings (only 1 confirmed)
INSERT INTO endings (id, route_slug, name, slug, ending_type, description, unlock_hint, sort_order) VALUES
(1, 'luka-route', 'The Last Curtain', 'luka-ending-bad', 'bad', 'The only ending currently available in v0.2. Betrayal leads to the circus consuming you both.', 'Challenge Luka repeatedly without evidence', 1);

-- Re-insert tips
INSERT INTO tips (id, category, title, content, sort_order) VALUES
(1, 'beginner', 'Save Before Every Choice', 'The game does NOT auto-save before branching decisions. Manual save is your best friend.', 1),
(2, 'beginner', 'Read Every Letter', 'Collectible letters contain crucial backstory. Missing them may lock you out of certain paths.', 2),
(3, 'advanced', 'Hidden Affection Meter', 'Each character has a hidden affection stat. Dialogue choices affect it in ways the game doesn''t show.', 3),
(4, 'general', 'Game is in Development', 'The Freak Circus is currently at v0.2. Only 1 ending (Luka''s Bad Ending) is available. More endings and routes will be added in future updates.', 4);

-- Re-insert FAQ
INSERT INTO faq (id, question, answer, sort_order) VALUES
(1, 'How many endings does The Freak Circus have?', 'Currently (v0.2) there is only 1 confirmed ending — Luka''s Bad Ending. The developer has plans for more endings across all 5 character routes as the game develops.', 1),
(2, 'Is there a True Ending?', 'Not yet. A True Ending may be added in a future update once all character routes are completed.', 2),
(3, 'Can I play routes in any order?', 'Yes. Currently only parts of the story are available. Luka''s route is the most complete so far.', 3),
(4, 'How long is one playthrough?', 'A single playthrough of the current build takes about 1-2 hours. The full game will be longer as more content is added.', 4),
(5, 'Does the game have voice acting?', 'No voice acting currently. The game is in early development (v0.2).', 5),
(6, 'Is The Freak Circus available on mobile?', 'Currently PC and Mac only via itch.io. A mobile version has not been announced.', 6),
(7, 'When will more endings be added?', 'The developer has not given specific dates. Follow Garula on itch.io for update announcements.', 7);

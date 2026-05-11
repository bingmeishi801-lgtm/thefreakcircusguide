-- Update FAQ with real game data
UPDATE faq SET
  question = 'How many endings does The Freak Circus have?',
  answer = 'As of v0.2, there is 1 confirmed bad ending. The developer has planned endings for Pierrot, Harlequin, the Protagonist, and a combined ending — but the script is still a work in progress.'
WHERE id = 1;

UPDATE faq SET
  question = 'How do I access Day 2?',
  answer = 'Day 2 is included in v0.2 of the game. After finishing Day 1, the game should continue to Day 2. If you see "End of Chapter 1" and can''t proceed, make sure you''re playing the latest version (v0.2) from the official itch.io page at garula.itch.io/the-freak-circus.'
WHERE id = 2;

UPDATE faq SET
  question = 'Which character route should I play first?',
  answer = 'Pierrot''s route is the most developed in v0.2, with voice acting by Darthsuki in Day 2. Harlequin''s route is harder — players report accidentally triggering Pierrot interactions instead. Start with Pierrot if you want the fullest experience.'
WHERE id = 3;

UPDATE faq SET
  question = 'Does the game have voice acting?',
  answer = 'Yes! Day 2 added voice acting. Pierrot is voiced by Darthsuki. The Ticket Taker''s voice acting in Day 2 is particularly praised by fans.'
WHERE id = 4;

UPDATE faq SET
  question = 'What are the name entry easter eggs?',
  answer = 'Entering specific names triggers reactions: "Pierrot", "Harlequin", "Jester", "Doctor", "Ticket Taker" show colored text but are rejected. "Columbina" triggers a full animation and reaction. "Neko" (the developer''s name) shows a reaction but can still be used.'
WHERE id = 5;

UPDATE faq SET
  question = 'Is The Freak Circus available on mobile?',
  answer = 'Yes! The game is available for PC, Mac, Linux, and Android. Download it from garula.itch.io/the-freak-circus. Note: some players report sound issues on mobile.'
WHERE id = 6;

UPDATE faq SET
  question = 'When is Day 3 coming?',
  answer = 'Day 3 is in development. The developer (Neko Bueno / Garula) posts monthly updates on itch.io, Tumblr, and Bluesky. No confirmed release date yet — follow them for announcements.'
WHERE id = 7;

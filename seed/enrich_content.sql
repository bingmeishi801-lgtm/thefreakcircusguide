-- Enrich character content for v0.2

UPDATE characters SET
  personality = 'The charismatic ringmaster who draws you in with dazzling smiles and silver-tongued promises — but every word is calculated. Luka runs the Freak Circus with an iron fist wrapped in velvet charm. He knows more about the circus''s dark origins than he lets on, and his "trust" always comes with a price. Approach with caution: his warmth is real, but so is his willingness to sacrifice anyone for the show.'
WHERE slug = 'luka';

UPDATE characters SET
  personality = 'The enigmatic fortune teller whose tarot readings cut deeper than any blade. Vesper speaks in riddles and watches from the shadows, but beneath the icy exterior lies someone who has seen too much — and cares too deeply. Her cards never lie, but she will only share what she thinks you can handle. Earning her trust takes patience, consistency, and the willingness to face uncomfortable truths about yourself.'
WHERE slug = 'vesper';

UPDATE characters SET
  personality = 'The gentle giant whose massive frame hides an even bigger heart — and an unbearable burden of guilt. Kazimir is the strongest performer in the circus, but his real strength is his loyalty. A tragic past haunts every smile, and he carries secrets that could shatter the circus''s fragile peace. He won''t ask for help, but he desperately needs someone to see past the muscle and into the man beneath.'
WHERE slug = 'kazimir';

UPDATE characters SET
  personality = 'The daredevil trapeze artist who lives for the rush of the fall and the thrill of the catch. Nyx is a whirlwind of energy, laughter, and reckless abandon — but freedom is her armor against vulnerability. She''ll push you away just when you think you''ve gotten close. Her fear of commitment runs deeper than the circus tent''s rafters, and catching her means learning when to let go.'
WHERE slug = 'nyx';

UPDATE characters SET
  personality = 'The fire breather whose flames illuminate the darkest corners of the circus — and his own tortured soul. Dmitri burns with passion and intensity that draws everyone in, but his inner demons threaten to consume everything he touches. He is brutally honest when he wants to be and dangerously deceptive when he needs to be. His path is a tightrope between destruction and redemption.'
WHERE slug = 'dmitri';

-- Enrich route summaries

UPDATE routes SET
  summary = 'The most complete route in v0.2. Navigate Luka''s elaborate web of lies, half-truths, and manipulative charm as you uncover the dark secret at the heart of the Freak Circus. Every conversation is a test — trust too easily and you''ll be consumed by his game. Challenge him without evidence and face the consequences. This route features the only confirmed ending so far: The Last Curtain (Bad Ending).'
WHERE slug = 'luka-route';

UPDATE routes SET
  summary = 'Vesper''s route is unfolding in development. Follow her cryptic tarot readings and decipher the symbols she leaves behind. Her path promises to reveal the deeper mythology of the circus — why it exists, what it feeds on, and who truly controls it. Early choices in this route may lock or unlock future options as the game updates.'
WHERE slug = 'vesper-route';

UPDATE routes SET
  summary = 'Kazimir''s route explores the human cost of the circus''s supernatural bargain. His strength is both his gift and his curse. The Act 2 confrontation is a critical branching point — defending him costs something, but failing to act costs more. This route is expected to reveal the circus''s origins through Kazimir''s inherited memories.'
WHERE slug = 'kazimir-route';

UPDATE routes SET
  summary = 'Nyx''s route is the hardest to navigate because she doesn''t want to be caught. Her story is about freedom versus belonging, and the Midnight Bridge scene is the point of no return. Let her go and she may return on her own terms. Hold on too tight and she''ll vanish forever. This route rewards players who read between the lines of her jokes and bravado.'
WHERE slug = 'nyx-route';

UPDATE routes SET
  summary = 'Dmitri''s route burns bright and fast. His intensity makes him the most volatile character to follow — one wrong word in Act 1 can lock you out of his entire path. Honesty over flattery is the key, but honesty with Dmitri means confronting truths about the circus that other characters won''t share. His route intersects with the circus''s darkest lore.'
WHERE slug = 'dmitri-route';

-- Enrich ending description

UPDATE endings SET
  description = 'The only ending available in v0.2. When you challenge Luka repeatedly without gathering evidence first, his mask finally cracks — but not in the way you''d hope. The Last Curtain is a devastating conclusion where the circus itself becomes the final antagonist. Both you and Luka are consumed by the show he built. It''s a Bad Ending, but it reveals crucial lore about the circus''s true nature that will matter in future updates.'
WHERE slug = 'luka-ending-bad';

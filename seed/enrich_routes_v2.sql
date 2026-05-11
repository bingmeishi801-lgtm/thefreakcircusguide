-- Enrich route summaries with key decision nodes and version context
-- Vesper
UPDATE routes SET summary = 'Cards of Fate explores Vesper''s tarot-based storyline. In v0.2 this route introduces her tarot readings and cryptic warnings, but the full branching path is not yet available. Key scenes include her initial reading in Act 1 (where she reveals a hidden truth about the circus), the Midnight Tarot reading that hints at the protagonist''s fate, and her confrontation scene in Act 2 where her loyalty is tested. Early choices about whether to trust her readings or dismiss them as superstition appear to influence later dialogue, but the ending has not been confirmed in the current build.'
WHERE slug = 'vesper-route';

-- Kazimir
UPDATE routes SET summary = 'Behind the Curtain follows Kazimir''s story of guilt and redemption. In v0.2 this route introduces his tragic backstory and the secret he carries about the circus''s dark origins. Key scenes include the training ground conversation where he almost reveals his past, the Act 2 confrontation where his loyalty to the ringmaster is tested, and the scene where he must choose between protecting the protagonist or obeying Luka. Defending him during the Act 2 confrontation appears to be the critical branching point, but no ending has been confirmed yet.'
WHERE slug = 'kazimir-route';

-- Nyx
UPDATE routes SET summary = 'Flight of the Acrobat follows Nyx''s story of freedom versus connection. In v0.2 this route introduces her reckless personality and fear of emotional commitment. Key scenes include the trapeze practice scene where she opens up briefly, the Midnight Bridge scene where she threatens to leave the circus, and the Act 2 confrontation where her past is revealed. The critical choice appears to be whether to hold on or let her go at the Midnight Bridge — choosing to release her seems to build trust, while clinging pushes her away. No ending has been confirmed yet.'
WHERE slug = 'nyx-route';

-- Dmitri
UPDATE routes SET summary = 'Burning Truths follows Dmitri''s story of passion and inner demons. In v0.2 this route introduces his brutal honesty and the dark forces he keeps at bay with his fire-breathing. Key scenes include the campfire conversation in Act 1 where he tests the protagonist with uncomfortable questions, the fire performance scene where his control slips, and the Act 2 confrontation where he must choose between self-destruction and asking for help. Choosing honesty over flattery in Act 1 appears to be the key branching point, but no ending has been confirmed yet.'
WHERE slug = 'dmitri-route';

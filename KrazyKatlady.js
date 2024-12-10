var iFileName = "KrazyKatlady.js";

SourceList["HB:TMF"] = {
    name: "Thorondr's Magical Fantastics",
    abbreviation: "HB:TMF",
    date: "2024/12/10"
};

BackgroundList["krazy katlady"] = {
    regExpSearch: /^(?=.*krazy)(?=.*katlady).*$/i,
    name: "Krazy Katlady",
    source: ["HB:TMF", 1],
    skills: ["Animal Handling", "Intimidation"],
    gold: 9,
    equipleft: [
        ["Ball of yarn", 1, ""]
    ],
    feature: "Katwhisperer",
    trait: [
        "I’ve mastered the art of doing things one-handed while holding a cat on my lap, and I see no reason others shouldn’t be able to do the same.",
        "I have a talent for spotting subtle dangers and opportunities, a skill honed by years of avoiding Wilbur’s sudden pounces and mischief.",
        "My patience is boundless, having been tested by Wilbur’s constant interruptions and inconvenient naps on my open books.",
        "I instinctively consider Wilbur’s preferences and moods before making decisions, often forgetting that others might not care about a cat’s opinion.",
        "I believe that true companionship doesn’t require constant affection—just quiet understanding and shared moments of peace.",
        "I am an expert at interpreting feline behavior, especially when it comes to Wilbur, and often apply this knowledge to understand people, too.",
        "I treat minor inconveniences caused by others with the same resigned acceptance I show Wilbur’s antics—life’s just easier that way.",
        "I find it easier to express my emotions while in the comforting presence of Wilbur, and I sometimes wish people were as straightforward as cats."
    ],
    ideal: [
        ["Order", "Order: A harmonious home and clear boundaries lead to a contented life. Even cats thrive with structure. (Lawful)"],
        ["Freedom", "Freedom: A cat’s life is its own. Rules and restrictions are meant to be toyed with, not followed. (Chaotic)"],
        ["Companionship", "Companionship: The bonds we share—no matter how small or furry—make life meaningful. (Good)"],
        ["Balance", "Balance: Life, like a cat’s movements, must remain poised. Neither extreme should take hold. (Neutral)"],
        ["Domination", "Domination: Like a cat toying with its prey, one must establish superiority over others to survive. (Evil)"],
        ["Curiosity", "Curiosity: The world, like a cat’s endless pursuits, is full of mysteries to explore. (Any)"]
    ],
    bond: [
        "Wilbur is my constant companion, and I would go to great lengths to ensure his safety.",
        "I hold onto the worn blanket we shared during hard times; it reminds me of the bond between us.",
        "I will one day write a book about the countless antics Wilbur has gotten into and dedicate it to him.",
        "An old enemy once threatened Wilbur, and I will never forgive them for it.",
        "I see Wilbur as more than just a companion—he is a reflection of myself, and losing him would mean losing part of my soul.",
        "The first cat I ever cared for taught me patience and kindness. I honor its memory by extending those lessons to others."
    ],
    flaw: [
        "I let Wilbur's interruptions distract me from important tasks, often to my detriment.",
        "I struggle to prioritize others when Wilbur is demanding my attention.",
        "I assume everyone should love Wilbur as much as I do, and I take offense if they don’t.",
        "I am overly cautious in new environments, constantly worrying about Wilbur’s safety.",
        "I tend to underestimate the seriousness of situations, assuming they’re no worse than Wilbur’s usual antics.",
        "I stubbornly refuse to admit that Wilbur might occasionally be in the wrong."
    ],
    extra: [
        "The lonely katlady",
        "Katter chatter"
    ],
    toolProfs: [],
    languageProfs: ["Meowmeow"],
    lifestyle: "modest"
};

BackgroundFeatureList["katwhisperer"] = {
    description: "You share a profound and unique bond with your feline companion, Wilbur, allowing you to understand and empathize with the quirks of cats like no other. This connection grants you an uncanny ability to interpret feline behavior, communicate with cat-like creatures, and navigate their mysterious ways. Whether calming a feral beast or enduring Wilbur's well-timed chaos, your feline intuition sets you apart in a world that often underestimates the wisdom of cats.",
    source: ["HB:TMF", 1]
};

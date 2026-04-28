class Program {
  final String name;
  final String frequency;
  final String description;
  final String icon;

  const Program({
    required this.name,
    required this.frequency,
    required this.description,
    required this.icon,
  });
}

const programs = <Program>[
  Program(
    name: 'Fly with Flutter',
    frequency: 'Monthly',
    description:
        'Our flagship monthly meetup — talks, live coding, and networking for Flutter developers at every level. Open to all.',
    icon: '🚀',
  ),
  Program(
    name: 'Annual Beginner Workshop',
    frequency: 'Yearly',
    description:
        'A full-day hands-on workshop that takes complete beginners from zero to shipping their first Flutter app.',
    icon: '🎓',
  ),
  Program(
    name: 'Mini Hackathons',
    frequency: 'Quarterly',
    description:
        'Weekend sprints where teams of 2–4 build a working Flutter app in 24 hours. Past themes: games, fintech, accessibility.',
    icon: '⚡',
  ),
  Program(
    name: 'FOSS United Collabs',
    frequency: 'Ad-hoc',
    description:
        'Joint events with FOSS United Chennai — open-source contributions, workshops, and cross-community talks.',
    icon: '🤝',
  ),
  Program(
    name: 'Flutteristas / Singapengal in Flutter',
    frequency: 'Bi-annual',
    description: 'Dedicated sessions celebrating and amplifying women and non-binary voices in the Flutter ecosystem.',
    icon: '💜',
  ),
  Program(
    name: 'Namma Madurai',
    frequency: 'Yearly',
    description: 'Taking the community beyond Chennai — our regional expansion brings Namma Flutter events to Madurai.',
    icon: '🌟',
  ),
];

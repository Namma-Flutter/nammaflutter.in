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
    frequency: 'Regular',
    description:
        'College and school-focused events that bring Flutter to campuses across Tamil Nadu, sparking curiosity in the next generation of Flutter developers.',
    icon: '✈️',
  ),
  Program(
    name: 'Flut-Hacks',
    frequency: 'Annual',
    description:
        'Our annual Flutter hackathon where teams race to build innovative apps under the clock. A fresh identity is coming soon — stay tuned!',
    icon: '⚡',
  ),
  Program(
    name: 'Namma Workshops',
    frequency: 'Regular',
    description:
        'Hands-on sessions covering Flutter fundamentals to advanced topics — open to all skill levels and focused on real-world project building.',
    icon: '🎓',
  ),
  Program(
    name: 'Namma Devs',
    frequency: 'Regular',
    description:
        'The Namma Flutter podcast — developer stories, deep dives into Flutter and Dart, and candid conversations with builders from the community.',
    icon: '🎙️',
  ),
  Program(
    name: 'DevRooms',
    frequency: 'Regular',
    description:
        'A Flutter discussion arena where developers debate ideas, explore patterns, and dive deep into Flutter topics in an open forum format.',
    icon: '💬',
  ),
  Program(
    name: 'Namma Flutteristas',
    frequency: 'Regular',
    description:
        'Dedicated events celebrating and empowering women in Flutter — a welcoming space to learn, network, and lead within the community.',
    icon: '💜',
  ),
  Program(
    name: 'Namma Flutter RoadShow',
    frequency: 'Ad-hoc',
    description:
        'Taking Namma Flutter beyond Chennai — our road show travels to different cities and towns, growing the Flutter community everywhere.',
    icon: '🌍',
  ),
];

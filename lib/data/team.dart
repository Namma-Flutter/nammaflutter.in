class TeamMember {
  final String name;
  final String role;
  final String? bio;
  final String? photo;
  final String? github;
  final String? twitter;
  final String? linkedin;

  const TeamMember({
    required this.name,
    required this.role,
    this.bio,
    this.photo,
    this.github,
    this.twitter,
    this.linkedin,
  });
}

const founders = <TeamMember>[
  TeamMember(
    name: 'Justin Benito',
    role: 'Co-founder',
    bio:
        'Sparked Namma Flutter after connecting with Abhishek Doshi and the Flutter India community. Passionate about growing Flutter grassroots in Chennai.',
    github: 'https://github.com/JustinBenito',
    twitter: 'https://x.com/JustinBenito', // TODO: confirm
  ),
  TeamMember(
    name: 'Harish A',
    role: 'Co-founder',
    bio:
        'Co-built Namma Flutter from the ground up. Focused on community ops, speaker programs, and making every event count.',
    github: 'https://github.com/harishwarrior',
    twitter: 'https://x.com/harishwarrior', // TODO: confirm
  ),
];

const coreTeam = <TeamMember>[
  TeamMember(
    name: 'Akash Senthil',
    role: 'Core Team · Speaker',
    bio: 'Regular speaker and contributor — covers Flutter internals, performance, and tooling.',
    github: 'https://github.com/AkashSenthil', // TODO: confirm
  ),
  // TODO: add more core team members
  // TeamMember(name: 'Name', role: 'Role', bio: '...'),
];

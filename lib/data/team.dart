class TeamMember {
  final String name;
  final String? bio;
  final String? photo;
  final String? github;
  final String? twitter;
  final String? linkedin;

  const TeamMember({
    required this.name,
    this.bio,
    this.photo,
    this.github,
    this.twitter,
    this.linkedin,
  });
}

const team = <TeamMember>[
  TeamMember(
    name: 'Justin Benito',
    bio: 'Sparked Namma Flutter after connecting with Abhishek Doshi and the Flutter India community. Passionate about growing Flutter grassroots in Chennai.',
    github: 'https://github.com/JustinBenito',
    twitter: 'https://x.com/JustinBenito',
  ),
  TeamMember(
    name: 'Harish Anbalagan',
    bio: 'Creator of Namma Wallet. Focused on community ops, speaker programs, and making every event count.',
    github: 'https://github.com/harishwarrior',
    twitter: 'https://x.com/harishwarrior',
  ),
  TeamMember(name: 'Praveen Pandiyan'),
  TeamMember(name: 'Shiva Prasath R'),
  TeamMember(name: 'Harish Raj R'),
  TeamMember(name: 'Laksshitha B'),
  TeamMember(name: 'Jasim Anwar J S'),
  TeamMember(name: 'Kumaran Karunakaran'),
  TeamMember(name: 'Sanju R'),
  TeamMember(name: 'Vaishnavi G'),
  TeamMember(name: 'Lashika N B'),
  TeamMember(name: 'Santosh A M'),
];

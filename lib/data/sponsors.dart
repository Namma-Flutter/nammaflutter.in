class Sponsor {
  final String name;
  final String? logoUrl; // TODO: add actual logo URLs
  final String? website;

  const Sponsor({required this.name, this.logoUrl, this.website});
}

const sponsors = <Sponsor>[
  Sponsor(name: 'Ultra Dash'),
  Sponsor(name: 'Zoho Apptics', website: 'https://www.zoho.com/apptics/'),
  Sponsor(name: 'Dashling'),
  Sponsor(name: 'Revenueflo'),
  Sponsor(name: 'Doshi'),
  Sponsor(name: 'Thiran Technologies'),
];

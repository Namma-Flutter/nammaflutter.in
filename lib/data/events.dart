enum EventType { past, upcoming }

class EventItem {
  final String title;
  final String date;
  final String venue;
  final EventType type;
  final String? link;
  final String? description;

  const EventItem({
    required this.title,
    required this.date,
    required this.venue,
    required this.type,
    this.link,
    this.description,
  });
}

const events = <EventItem>[
  // Upcoming
  EventItem(
    title: 'DevCon 2025',
    date: '25 Oct 2025',
    venue: 'Chennai (venue TBA)',
    type: EventType.upcoming,
    description: 'Our biggest conference yet — full-day Flutter + Dart conference with national speakers.',
  ),
  EventItem(
    title: 'FOSS United Chennai',
    date: 'Sep 2025',
    venue: 'YuniQ, Chennai',
    type: EventType.upcoming,
    description: 'Co-hosted with FOSS United — open-source talks and Flutter track.',
  ),
  EventItem(
    title: 'Namma Madurai',
    date: '23 Aug 2025',
    venue: 'Madurai',
    type: EventType.upcoming,
    description: 'Namma Flutter lands in Madurai for a full-day workshop and meetup.',
  ),
  EventItem(
    title: 'Flutteristas Jul 2025',
    date: 'Jul 2025',
    venue: 'Chennai',
    type: EventType.upcoming,
    description: 'Celebrating women in Flutter — talks, portfolio reviews, and mentorship.',
  ),
  // Past
  EventItem(
    title: '1st Anniversary Meetup',
    date: '26 Apr 2025',
    venue: 'Entrans / Zoho Apptics, Chennai',
    type: EventType.past,
    description: 'Celebrating one year of Namma Flutter with community lightning talks and demos.',
  ),
  EventItem(
    title: 'ChennaiFOSS 2026',
    date: '18 Apr 2026',
    venue: 'Chennai',
    type: EventType.past,
    description: 'Flutter track at ChennaiFOSS — Dart FFI, Jaspr, and open-source tooling.',
  ),
  EventItem(
    title: 'Mini Hackathon',
    date: '21 Dec 2024',
    venue: 'Thiran, Chennai',
    type: EventType.past,
    description: '24-hour hackathon with 8 teams building Flutter apps. Theme: everyday tools.',
  ),
  EventItem(
    title: 'DevCon 2024',
    date: 'Nov 2024',
    venue: 'Freshworks, Chennai',
    type: EventType.past,
    description: 'First ever Namma Flutter DevCon — 200+ attendees, 10 talks, 3 workshops.',
  ),
];

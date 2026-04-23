import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/cta_band.dart';
import '../components/section.dart';
import '../constants/theme.dart';

@client
class About extends StatelessComponent {
  const About({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      Section(
        eyebrow: 'Our story',
        title: 'Born in Chennai, built for everyone.',
        subtitle:
            'Namma Flutter started with a simple idea: Flutter developers in Chennai deserve their own space to learn, build, and grow together.',
        child: div(classes: 'about-story', [
          p([
            .text(
              'In 2024, Justin Benito and Harish — inspired by the Flutter India community and mentors like Abhishek Doshi — organised the first Namma Flutter meetup in Chennai. '
              'What started as a small gathering quickly grew into a movement.',
            ),
          ]),
          p([
            .text(
              '"Namma" means "ours" in Tamil. That\'s the spirit behind everything we do — this community belongs to everyone in it. '
              'We\'re here for the first-time Flutter dev writing their first widget, and the veteran engineer shipping production apps.',
            ),
          ]),
        ]),
      ),
      div(classes: 'stats-band', [
        div(classes: 'container', [
          div(classes: 'stats-grid', [
            _stat('4,000+', 'Community members'),
            _stat('30+', 'Speakers featured'),
            _stat('10+', 'Events hosted'),
            _stat('4+', 'Open-source apps'),
          ]),
        ]),
      ]),
      Section(
        eyebrow: 'What we do',
        title: 'More than meetups.',
        muted: true,
        child: div(classes: 'about-pillars', [
          _pillar(
            '🎙️',
            'Monthly Meetups',
            'Fly with Flutter — our flagship monthly event — brings talks, live coding, and networking to Flutter developers of all levels.',
          ),
          _pillar(
            '⚡',
            'Hackathons',
            'Quarterly mini-hackathons where teams build real Flutter apps in 24 hours. Past themes: games, fintech, accessibility tools.',
          ),
          _pillar(
            '📱',
            'Open Source',
            'We ship real apps together — Namma Wallet, Flappy Dash, Namma UI Kit. Community-built, community-maintained.',
          ),
          _pillar(
            '🤝',
            'Inclusion',
            'Dedicated programs like Flutteristas celebrate underrepresented voices in tech. Everyone has a place here.',
          ),
        ]),
      ),
      Section(
        eyebrow: 'Where we are now',
        title: 'Growing beyond Chennai.',
        subtitle:
            'As of 2026, Namma Flutter has expanded to Madurai and collaborates regularly with FOSS United. DevCon is now an annual flagship event drawing 200+ attendees.',
        child: .empty(),
      ),
      const CtaBand(
        headline: 'Want to get involved? Come say hi.',
        buttonLabel: 'Contact us',
        buttonHref: '/contact',
      ),
    ]);
  }

  static Component _stat(String value, String label) => div(classes: 'stat-item', [
    p(classes: 'stat-value', [.text(value)]),
    p(classes: 'stat-label', [.text(label)]),
  ]);

  static Component _pillar(String icon, String title, String body) => div(classes: 'about-pillar', [
    span(classes: 'pillar-icon', [.text(icon)]),
    h3(classes: 'pillar-title', [.text(title)]),
    p(classes: 'pillar-body', [.text(body)]),
  ]);

  @css
  static List<StyleRule> get styles => [
    css('.about-story').styles(
      display: .flex,
      flexDirection: .column,
      gap: .all(16.px),
      maxWidth: 720.px,
    ),
    css('.about-story p').styles(fontSize: 1.05.rem, color: mutedTextColor, lineHeight: 1.75.em),
    css('.stats-band').styles(
      backgroundColor: primaryColor,
      padding: .symmetric(vertical: 48.px),
    ),
    css('.stats-grid').styles(
      display: .grid,
      gap: .all(24.px),
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(160px, 1fr))'},
      textAlign: .center,
    ),
    css('.stat-item').styles(display: .flex, flexDirection: .column, gap: .all(4.px)),
    css('.stat-value').styles(
      fontSize: 2.5.rem,
      fontWeight: .w700,
      color: Colors.white,
      margin: .zero,
    ),
    css('.stat-label').styles(
      fontSize: 0.9.rem,
      color: .rgba(255, 255, 255, 0.75),
      margin: .zero,
    ),
    css('.about-pillars').styles(
      display: .grid,
      gap: .all(24.px),
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(240px, 1fr))'},
    ),
    css('.about-pillar').styles(
      display: .flex,
      flexDirection: .column,
      gap: .all(10.px),
      padding: .all(24.px),
      backgroundColor: surfaceColor,
      radius: .all(.circular(12.px)),
    ),
    css('.pillar-icon').styles(fontSize: 1.8.rem),
    css('.pillar-title').styles(fontSize: 1.rem, fontWeight: .w700, color: textColor),
    css('.pillar-body').styles(fontSize: 0.9.rem, color: mutedTextColor, lineHeight: 1.6.em),
  ];
}

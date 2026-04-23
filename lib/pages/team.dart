import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/cta_band.dart';
import '../components/section.dart';
import '../constants/theme.dart';
import '../data/team.dart';

@client
class Team extends StatelessComponent {
  const Team({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      Section(
        eyebrow: 'The team',
        title: 'People behind Namma Flutter.',
        subtitle: 'A small but mighty crew of organisers, speakers, and contributors.',
        child: .fragment([
          h3(classes: 'team-group-heading', [.text('Founders')]),
          div(classes: 'founders-grid', [
            for (final m in founders) _memberCard(m, large: true),
          ]),
          h3(classes: 'team-group-heading', [.text('Core Team')]),
          div(classes: 'team-grid', [
            for (final m in coreTeam) _memberCard(m),
          ]),
        ]),
      ),
      const CtaBand(
        headline: 'Want to contribute? We\'d love to have you.',
        buttonLabel: 'Join the community',
        buttonHref: '/contact',
      ),
    ]);
  }

  static Component _memberCard(TeamMember m, {bool large = false}) {
    return div(classes: large ? 'member-card member-card-large' : 'member-card', [
      div(classes: 'member-avatar', [
        span(classes: 'member-initials', [.text(_initials(m.name))]),
      ]),
      div(classes: 'member-info', [
        h4(classes: 'member-name', [.text(m.name)]),
        p(classes: 'member-role', [.text(m.role)]),
        if (m.bio != null) p(classes: 'member-bio', [.text(m.bio!)]),
        div(classes: 'member-links', [
          if (m.github != null)
            a(
              href: m.github!,
              classes: 'member-link',
              attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
              [
                .text('GitHub →'),
              ],
            ),
          if (m.twitter != null)
            a(
              href: m.twitter!,
              classes: 'member-link',
              attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
              [
                .text('Twitter →'),
              ],
            ),
          if (m.linkedin != null)
            a(
              href: m.linkedin!,
              classes: 'member-link',
              attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
              [
                .text('LinkedIn →'),
              ],
            ),
        ]),
      ]),
    ]);
  }

  static String _initials(String name) {
    final parts = name.trim().split(' ');
    if (parts.length >= 2) return '${parts[0][0]}${parts[1][0]}'.toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }

  @css
  static List<StyleRule> get styles => [
    css('.team-group-heading').styles(
      fontSize: 1.1.rem,
      fontWeight: .w700,
      color: mutedTextColor,
      letterSpacing: 1.px,
      raw: {'text-transform': 'uppercase'},
      margin: .only(bottom: 20.px, top: 40.px),
    ),
    css('.founders-grid').styles(
      display: .grid,
      gap: .all(24.px),
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(320px, 1fr))'},
      margin: .only(bottom: 24.px),
    ),
    css('.team-grid').styles(
      display: .grid,
      gap: .all(20.px),
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(240px, 1fr))'},
    ),
    css('.member-card').styles(
      display: .flex,
      flexDirection: .row,
      gap: .all(16.px),
      padding: .all(20.px),
      backgroundColor: surfaceColor,
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(12.px)),
      alignItems: .start,
    ),
    css('.member-card-large').styles(padding: .all(28.px)),
    css('.member-avatar').styles(
      width: 48.px,
      height: 48.px,
      minWidth: 48.px,
      display: .flex,
      alignItems: .center,
      justifyContent: .center,
      backgroundColor: primaryColor,
      radius: .all(.circular(12.px)),
    ),
    css('.member-card-large .member-avatar').styles(
      width: 64.px,
      height: 64.px,
      minWidth: 64.px,
    ),
    css('.member-initials').styles(
      fontSize: 1.1.rem,
      fontWeight: .w700,
      color: Colors.white,
    ),
    css('.member-info').styles(display: .flex, flexDirection: .column, gap: .all(4.px)),
    css('.member-name').styles(fontSize: 1.rem, fontWeight: .w700, color: textColor),
    css('.member-role').styles(fontSize: 0.85.rem, color: primaryColor, fontWeight: .w500),
    css('.member-bio').styles(
      fontSize: 0.9.rem,
      color: mutedTextColor,
      lineHeight: 1.6.em,
      margin: .only(top: 4.px),
    ),
    css('.member-links').styles(
      display: .flex,
      gap: .all(12.px),
      flexWrap: .wrap,
      margin: .only(top: 4.px),
    ),
    css('.member-link').styles(fontSize: 0.85.rem, fontWeight: .w600, color: primaryColor),
    css('.member-link:hover').styles(color: primaryColorDark),
  ];
}

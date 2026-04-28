import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/cta_band.dart';
import '../components/section.dart';
import '../constants/theme.dart';
import '../data/programs.dart';

@client
class Programs extends StatelessComponent {
  const Programs({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      Section(
        eyebrow: 'What we run',
        title: 'Programs for every level.',
        subtitle: 'From monthly meetups to regional expansion — here\'s how we show up for the Flutter community.',
        child: div(classes: 'programs-list', [
          for (final (i, prog) in programs.indexed)
            div(classes: i.isEven ? 'program-item' : 'program-item program-item-alt', [
              div(classes: 'program-icon-wrap', [
                span(classes: 'program-icon', [.text(prog.icon)]),
              ]),
              div(classes: 'program-text', [
                div(classes: 'program-meta', [
                  h2(classes: 'program-name', [.text(prog.name)]),
                  span(classes: 'program-freq', [.text(prog.frequency)]),
                ]),
                p(classes: 'program-desc', [.text(prog.description)]),
              ]),
            ]),
        ]),
      ),
      const CtaBand(
        headline: 'Want to speak, sponsor, or volunteer?',
        buttonLabel: 'Get in touch',
        buttonHref: '/contact',
      ),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.programs-list').styles(display: .flex, flexDirection: .column, gap: .all(32.px)),
    css('.program-item').styles(
      display: .flex,
      flexDirection: .row,
      gap: .all(32.px),
      alignItems: .start,
      padding: .all(32.px),
      backgroundColor: surfaceColor,
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(12.px)),
    ),
    css('.program-item-alt').styles(backgroundColor: surfaceMuted),
    css('.program-icon-wrap').styles(
      width: 64.px,
      height: 64.px,
      minWidth: 64.px,
      display: .flex,
      alignItems: .center,
      justifyContent: .center,
      backgroundColor: Color('#E8F2FB'),
      radius: .all(.circular(16.px)),
    ),
    css('.program-icon').styles(fontSize: 2.rem),
    css('.program-text').styles(display: .flex, flexDirection: .column, gap: .all(8.px)),
    css('.program-meta').styles(display: .flex, alignItems: .center, gap: .all(12.px), flexWrap: .wrap),
    css('.program-name').styles(fontSize: 1.25.rem, fontWeight: .w700, color: textColor),
    css('.program-freq').styles(
      fontSize: 0.8.rem,
      fontWeight: .w600,
      color: primaryColor,
      backgroundColor: Color('#E8F2FB'),
      padding: .symmetric(vertical: 3.px, horizontal: 10.px),
      radius: .all(.circular(999.px)),
    ),
    css('.program-desc').styles(fontSize: 1.rem, color: mutedTextColor, lineHeight: 1.7.em),
    css.media(MediaQuery.screen(maxWidth: 600.px), [
      css('.program-item').styles(flexDirection: .column),
    ]),
  ];
}

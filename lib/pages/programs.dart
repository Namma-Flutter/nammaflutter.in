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
      padding: .all(32.px),
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(12.px)),
      flexDirection: .row,
      alignItems: .start,
      gap: .all(32.px),
      backgroundColor: surfaceColor,
    ),
    css('.program-item-alt').styles(backgroundColor: surfaceMuted),
    css('.program-icon-wrap').styles(
      display: .flex,
      width: 64.px,
      height: 64.px,
      minWidth: 64.px,
      radius: .all(.circular(16.px)),
      justifyContent: .center,
      alignItems: .center,
      backgroundColor: Color('#E8F2FB'),
    ),
    css('.program-icon').styles(fontSize: 2.rem),
    css('.program-text').styles(display: .flex, flexDirection: .column, gap: .all(8.px)),
    css('.program-meta').styles(display: .flex, flexWrap: .wrap, alignItems: .center, gap: .all(12.px)),
    css('.program-name').styles(color: textColor, fontSize: 1.25.rem, fontWeight: .w700),
    css('.program-freq').styles(
      padding: .symmetric(vertical: 3.px, horizontal: 10.px),
      radius: .all(.circular(999.px)),
      color: primaryColor,
      fontSize: 0.8.rem,
      fontWeight: .w600,
      backgroundColor: Color('#E8F2FB'),
    ),
    css('.program-desc').styles(color: mutedTextColor, fontSize: 1.rem, lineHeight: 1.7.em),
    css.media(MediaQuery.screen(maxWidth: 600.px), [
      css('.program-item').styles(flexDirection: .column),
    ]),
  ];
}

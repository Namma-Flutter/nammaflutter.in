import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';
import '../data/colleges.dart';

class CollegeTicker extends StatelessComponent {
  const CollegeTicker({super.key});

  @override
  Component build(BuildContext context) {
    // Duplicate items for a seamless infinite loop: animating -50% of 2× list = -100% of one pass
    final items = <Component>[];
    for (var pass = 0; pass < 2; pass++) {
      for (final college in flyWithFlutterColleges) {
        items.add(span(classes: 'ticker-item', [.text(college)]));
        items.add(span(classes: 'ticker-sep', [.text('·')]));
      }
    }

    return div(classes: 'ticker-wrap', [
      div(classes: 'ticker-badge', [
        span(classes: 'ticker-badge-icon', [.text('✈️')]),
        span([.text('Fly with Flutter')]),
      ]),
      div(classes: 'ticker-viewport', [
        div(classes: 'ticker-track', items),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('@keyframes ticker-scroll', [
      css('from').styles(raw: {'transform': 'translateX(0)'}),
      css('to').styles(raw: {'transform': 'translateX(-50%)'}),
    ]),
    css('.ticker-wrap').styles(
      display: .flex,
      alignItems: .center,
      padding: .symmetric(vertical: 14.px),
      backgroundColor: surfaceMuted,
      raw: {
        'border-top': '1px solid #E2E8F0',
        'border-bottom': '1px solid #E2E8F0',
        'overflow': 'hidden',
      },
    ),
    css('.ticker-badge').styles(
      display: .flex,
      alignItems: .center,
      gap: .all(8.px),
      padding: .symmetric(horizontal: 24.px),
      fontWeight: .w600,
      fontSize: 0.85.rem,
      color: primaryColor,
      raw: {
        'flex-shrink': '0',
        'white-space': 'nowrap',
        'border-right': '2px solid #E2E8F0',
      },
    ),
    css('.ticker-badge-icon').styles(fontSize: 1.1.rem),
    css('.ticker-viewport').styles(
      flex: Flex(grow: 1),
      raw: {'overflow': 'hidden'},
    ),
    css('.ticker-track').styles(
      display: .flex,
      alignItems: .center,
      gap: .all(0.px),
      raw: {
        'width': 'max-content',
        'animation': 'ticker-scroll 35s linear infinite',
      },
    ),
    css('.ticker-track:hover').styles(
      raw: {'animation-play-state': 'paused'},
    ),
    css('.ticker-item').styles(
      fontSize: 0.88.rem,
      fontWeight: .w500,
      color: textColor,
      padding: .symmetric(horizontal: 16.px),
      raw: {'white-space': 'nowrap'},
    ),
    css('.ticker-sep').styles(
      color: accentColor,
      fontSize: 0.75.rem,
      raw: {'flex-shrink': '0'},
    ),
    css.media(MediaQuery.screen(maxWidth: 640.px), [
      css('.ticker-badge').styles(display: .none),
    ]),
  ];
}

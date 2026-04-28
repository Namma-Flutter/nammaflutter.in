import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';
import 'button.dart';

class Hero extends StatelessComponent {
  final String kicker;
  final String headline;
  final String subtext;
  final String primaryLabel;
  final String primaryHref;
  final String secondaryLabel;
  final String secondaryHref;

  const Hero({
    required this.kicker,
    required this.headline,
    required this.subtext,
    required this.primaryLabel,
    required this.primaryHref,
    required this.secondaryLabel,
    required this.secondaryHref,
    super.key,
  });

  @override
  Component build(BuildContext context) {
    return div(classes: 'hero', [
      div(classes: 'container', [
        div(classes: 'hero-content', [
          p(classes: 'hero-kicker', [.text(kicker)]),
          h1(classes: 'hero-headline', [.text(headline)]),
          p(classes: 'hero-subtext', [.text(subtext)]),
          div(classes: 'hero-ctas', [
            Button.primary(primaryLabel, primaryHref),
            Button.secondary(secondaryLabel, secondaryHref),
          ]),
        ]),
        div(classes: 'hero-logo', [
          img(src: 'images/logo.png', width: 280, attributes: {'alt': 'Namma Flutter mascot'}),
        ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.hero').styles(
      padding: .symmetric(vertical: 96.px),
      backgroundColor: surfaceColor,
    ),
    css('.hero .container').styles(
      display: .flex,
      flexDirection: .row,
      alignItems: .center,
      justifyContent: .spaceBetween,
      gap: .all(48.px),
    ),
    css('.hero-content').styles(
      display: .flex,
      flexDirection: .column,
      gap: .all(16.px),
      maxWidth: 580.px,
    ),
    css('.hero-kicker').styles(
      color: accentColor,
      fontWeight: .w600,
      fontSize: 0.9.rem,
      letterSpacing: 1.5.px,
      margin: .zero,
      raw: {'text-transform': 'uppercase'},
    ),
    css('.hero-headline').styles(
      fontSize: 3.5.rem,
      fontWeight: .w700,
      lineHeight: 1.1.em,
      color: textColor,
    ),
    css('.hero-subtext').styles(
      fontSize: 1.15.rem,
      color: mutedTextColor,
      lineHeight: 1.7.em,
      maxWidth: 520.px,
    ),
    css('.hero-ctas').styles(
      display: .flex,
      flexDirection: .row,
      gap: .all(12.px),
      flexWrap: .wrap,
    ),
    css('.hero-logo').styles(raw: {'flex-shrink': '0'}),
    css.media(MediaQuery.screen(maxWidth: 768.px), [
      css('.hero .container').styles(flexDirection: .column),
      css('.hero-headline').styles(fontSize: 2.2.rem),
      css('.hero-logo').styles(display: .none),
    ]),
  ];
}

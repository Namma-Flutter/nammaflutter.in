import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

class NammaCard extends StatelessComponent {
  final String title;
  final String description;
  final String? href;
  final String? appStoreUrl;
  final String? playStoreUrl;
  final List<String> tags;
  final bool external;

  const NammaCard({
    required this.title,
    required this.description,
    this.href,
    this.appStoreUrl,
    this.playStoreUrl,
    this.tags = const [],
    this.external = false,
    super.key,
  });

  @override
  Component build(BuildContext context) {
    final titleNode = href != null
        ? a(
            href: href!,
            attributes: external ? {'target': '_blank', 'rel': 'noopener noreferrer'} : null,
            classes: 'card-title-link',
            [text(title)],
          )
        : text(title);

    return div(classes: 'card', [
      h3(classes: 'card-title', [titleNode]),
      p(classes: 'card-desc', [.text(description)]),
      if (tags.isNotEmpty)
        div(classes: 'card-tags', [
          for (final t in tags) span(classes: 'card-tag', [.text(t)]),
        ]),
      if (appStoreUrl != null || playStoreUrl != null)
        div(classes: 'card-stores', [
          if (appStoreUrl != null)
            a(
              href: appStoreUrl!,
              attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
              [
                img(src: 'images/appstore.svg', height: 40, attributes: {'alt': 'Download on the App Store'}),
              ],
            ),
          if (playStoreUrl != null)
            a(
              href: playStoreUrl!,
              attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
              [
                img(src: 'images/playstore.svg', height: 40, attributes: {'alt': 'Get it on Google Play'}),
              ],
            ),
        ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.card').styles(
      display: .flex,
      flexDirection: .column,
      gap: .all(12.px),
      padding: .all(24.px),
      backgroundColor: surfaceColor,
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(12.px)),
      textDecoration: TextDecoration(line: .none),
      color: textColor,
      transition: Transition('all', duration: 200.ms, curve: .easeOut),
    ),
    css('.card:hover').styles(
      transform: .translate(x: 0.px, y: (-2).px),
      shadow: BoxShadow(offsetX: 0.px, offsetY: 8.px, blur: 24.px, color: .rgba(1, 88, 155, 0.12)),
      border: .all(style: BorderStyle.solid, color: primaryColor, width: 1.px),
    ),
    css('.card-title').styles(fontSize: 1.1.rem, fontWeight: .w700, color: textColor),
    css('.card-title-link').styles(
      color: textColor,
      textDecoration: TextDecoration(line: .none),
      transition: Transition('color', duration: 150.ms),
    ),
    css('.card-title-link:hover').styles(
      color: primaryColor,
    ),
    css('.card-desc').styles(fontSize: 0.95.rem, color: mutedTextColor, lineHeight: 1.6.em, flex: .grow(1)),
    css('.card-tags').styles(display: .flex, flexWrap: .wrap, gap: .all(6.px)),
    css('.card-tag').styles(
      fontSize: 0.75.rem,
      fontWeight: .w500,
      color: primaryColor,
      backgroundColor: Color('#E8F2FB'),
      padding: .symmetric(vertical: 3.px, horizontal: 10.px),
      radius: .all(.circular(999.px)),
    ),
    css('.card-stores').styles(
      display: .flex,
      gap: .all(12.px),
      margin: .only(top: 8.px),
    ),
    css('.card-stores a').styles(
      display: .block,
      transition: Transition('transform', duration: 150.ms),
    ),
    css('.card-stores a:hover').styles(
      transform: .translate(x: 0.px, y: (-2).px),
    ),
  ];
}

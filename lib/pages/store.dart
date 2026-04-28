import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/button.dart';
import '../constants/theme.dart';

@client
class Store extends StatelessComponent {
  const Store({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'store-page', [
      div(classes: 'container', [
        div(classes: 'store-content', [
          span(classes: 'store-emoji', [.text('🛍️')]),
          h1(classes: 'store-title', [.text('NammaStore')]),
          p(classes: 'store-subtitle', [
            .text(
              'Official Namma Flutter merch is on its way — t-shirts, stickers, hoodies, and more. '
              'Be the first to know when we launch.',
            ),
          ]),
          Button.primary('Get notified — contact us', '/contact'),
        ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.store-page').styles(
      minHeight: .expression('calc(100vh - 64px)'),
      display: .flex,
      alignItems: .center,
      justifyContent: .center,
      padding: .symmetric(vertical: 80.px),
    ),
    css('.store-content').styles(
      display: .flex,
      flexDirection: .column,
      alignItems: .center,
      textAlign: .center,
      gap: .all(20.px),
      maxWidth: 520.px,
    ),
    css('.store-emoji').styles(fontSize: 3.5.rem, lineHeight: 1.em),
    css('.store-title').styles(fontSize: 2.5.rem, fontWeight: .w700, color: textColor),
    css('.store-subtitle').styles(fontSize: 1.05.rem, color: mutedTextColor, lineHeight: 1.7.em),
  ];
}

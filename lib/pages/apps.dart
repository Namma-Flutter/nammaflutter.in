import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/card.dart';
import '../components/section.dart';
import '../data/apps.dart';

@client
class Apps extends StatelessComponent {
  const Apps({super.key});

  @override
  Component build(BuildContext context) {
    return Section(
      eyebrow: 'NammaApps',
      title: 'Open-source Flutter apps.',
      subtitle: 'Real apps, built by our community. All open-source, all on GitHub.',
      child: div(classes: 'apps-grid', [
        for (final app in apps)
          NammaCard(
            title: app.name,
            description: app.description,
            href: app.repoUrl,
            appStoreUrl: app.appStoreUrl,
            playStoreUrl: app.playStoreUrl,
            tags: app.tags,
            external: true,
          ),
      ]),
    );
  }

  @css
  static List<StyleRule> get styles => [
    css('.apps-grid').styles(
      display: .grid,
      gap: .all(24.px),
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(280px, 1fr))'},
    ),
  ];
}

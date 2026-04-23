import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'components/footer.dart';
import 'components/header.dart';
import 'pages/about.dart';
import 'pages/apps.dart';
import 'pages/contact.dart';
import 'pages/events.dart';
import 'pages/home.dart';
import 'pages/programs.dart';
import 'pages/store.dart';
import 'pages/team.dart';

class App extends StatelessComponent {
  const App({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'main', [
      const Header(),
      Router(
        routes: [
          Route(path: '/', title: 'Home', builder: (context, state) => const Home()),
          Route(path: '/about', title: 'About', builder: (context, state) => const About()),
          Route(path: '/apps', title: 'Apps', builder: (context, state) => const Apps()),
          Route(path: '/programs', title: 'Programs', builder: (context, state) => const Programs()),
          Route(path: '/store', title: 'Store', builder: (context, state) => const Store()),
          Route(path: '/events', title: 'Events', builder: (context, state) => const Events()),
          Route(path: '/team', title: 'Team', builder: (context, state) => const Team()),
          Route(path: '/contact', title: 'Contact', builder: (context, state) => const Contact()),
        ],
      ),
      const Footer(),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.main').styles(
      display: .flex,
      minHeight: 100.vh,
      flexDirection: .column,
    ),
  ];
}

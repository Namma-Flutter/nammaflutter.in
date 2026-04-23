import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import '../constants/theme.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  static const _routes = [
    (label: 'About', path: '/about'),
    (label: 'Apps', path: '/apps'),
    (label: 'Programs', path: '/programs'),
    (label: 'Events', path: '/events'),
    (label: 'Team', path: '/team'),
    (label: 'Store', path: '/store'),
    (label: 'Contact', path: '/contact'),
  ];

  @override
  Component build(BuildContext context) {
    final active = context.url;

    return header([
      div(classes: 'header-inner container', [
        a(href: '/', classes: 'header-logo', [.text('Namma Flutter')]),
        nav(classes: 'header-nav', [
          for (final route in _routes)
            a(
              href: route.path,
              classes: active == route.path ? 'nav-link nav-link-active' : 'nav-link',
              [.text(route.label)],
            ),
        ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('header').styles(
      position: .sticky(top: 0.px),
      zIndex: ZIndex(100),
      backgroundColor: Colors.white,
      border: .only(
        bottom: BorderSide.solid(color: borderColor, width: 1.px),
      ),
      raw: {'backdrop-filter': 'blur(8px)'},
    ),
    css('.header-inner').styles(
      display: .flex,
      flexDirection: .row,
      alignItems: .center,
      justifyContent: .spaceBetween,
      height: 64.px,
      gap: .all(24.px),
    ),
    css('.header-logo').styles(
      fontSize: 1.1.rem,
      fontWeight: .w700,
      color: primaryColor,
      textDecoration: TextDecoration(line: .none),
      raw: {'white-space': 'nowrap'},
    ),
    css('.header-nav').styles(
      display: .flex,
      flexDirection: .row,
      alignItems: .center,
      gap: .all(4.px),
      flexWrap: .wrap,
    ),
    css('.nav-link').styles(
      display: .flex,
      alignItems: .center,
      padding: .symmetric(vertical: 6.px, horizontal: 12.px),
      fontSize: 0.9.rem,
      fontWeight: .w500,
      color: mutedTextColor,
      textDecoration: TextDecoration(line: .none),
      radius: .all(.circular(6.px)),
      transition: Transition('all', duration: 150.ms),
    ),
    css('.nav-link:hover').styles(color: primaryColor, backgroundColor: Color('#F0F6FC')),
    css('.nav-link-active').styles(
      color: primaryColor,
      fontWeight: .w700,
      backgroundColor: Color('#E8F2FB'),
    ),
    css.media(MediaQuery.screen(maxWidth: 768.px), [
      css('.header-nav').styles(gap: .all(2.px)),
      css('.nav-link').styles(
        padding: .symmetric(vertical: 4.px, horizontal: 8.px),
        fontSize: 0.82.rem,
      ),
    ]),
  ];
}

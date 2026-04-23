import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/button.dart';
import '../components/section.dart';
import '../constants/theme.dart';
import '../data/socials.dart';

@client
class Contact extends StatelessComponent {
  const Contact({super.key});

  @override
  Component build(BuildContext context) {
    return Section(
      eyebrow: 'Get in touch',
      title: 'We\'d love to hear from you.',
      subtitle: 'Questions, speaker pitches, sponsorship enquiries — all welcome.',
      child: div(classes: 'contact-grid', [
        div(classes: 'contact-info', [
          _row('✉️', 'Email', SocialLinks.contactEmail, 'mailto:${SocialLinks.contactEmail}'),
          _row('💬', 'Discord', 'Join the community server', SocialLinks.discord, external: true),
          _row('🐙', 'GitHub', 'Namma-Flutter on GitHub', SocialLinks.github, external: true),
          _row('🐦', 'Twitter / X', 'Follow us @NammaFlutter', SocialLinks.twitter, external: true),
          _row('💼', 'LinkedIn', 'Connect on LinkedIn', SocialLinks.linkedin, external: true),
          _row('✍️', 'Medium', 'Read our publication', SocialLinks.medium, external: true),
        ]),
        div(classes: 'contact-cta-panel', [
          h3(classes: 'contact-panel-title', [.text('Join the community')]),
          p(classes: 'contact-panel-desc', [
            .text(
              'The best way to be part of Namma Flutter is to show up. '
              'Join our Discord, come to a meetup, or open a pull request. We\'ll take it from there.',
            ),
          ]),
          div(classes: 'contact-panel-btns', [
            Button.primary('Join Discord', SocialLinks.discord, external: true),
            Button.secondary('Star on GitHub', SocialLinks.github, external: true),
          ]),
        ]),
      ]),
    );
  }

  static Component _row(String icon, String label, String display, String href, {bool external = false}) {
    final attrs = external ? {'target': '_blank', 'rel': 'noopener noreferrer'} : <String, String>{};
    return a(href: href, classes: 'contact-row', attributes: attrs, [
      span(classes: 'contact-row-icon', [.text(icon)]),
      div(classes: 'contact-row-text', [
        span(classes: 'contact-row-label', [.text(label)]),
        span(classes: 'contact-row-display', [.text(display)]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.contact-grid').styles(
      display: .grid,
      gap: .all(32.px),
      alignItems: .start,
      raw: {'grid-template-columns': 'repeat(auto-fit, minmax(300px, 1fr))'},
    ),
    css('.contact-info').styles(display: .flex, flexDirection: .column, gap: .all(12.px)),
    css('.contact-row').styles(
      display: .flex,
      flexDirection: .row,
      alignItems: .center,
      gap: .all(16.px),
      padding: .all(16.px),
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(10.px)),
      textDecoration: TextDecoration(line: .none),
      color: textColor,
      transition: Transition('all', duration: 150.ms),
    ),
    css('.contact-row:hover').styles(
      border: .all(style: BorderStyle.solid, color: primaryColor, width: 1.px),
      shadow: BoxShadow(offsetX: 0.px, offsetY: 2.px, blur: 8.px, color: .rgba(1, 88, 155, 0.08)),
    ),
    css('.contact-row-icon').styles(fontSize: 1.4.rem, lineHeight: 1.em),
    css('.contact-row-text').styles(display: .flex, flexDirection: .column, gap: .all(2.px)),
    css('.contact-row-label').styles(
      fontSize: 0.8.rem,
      fontWeight: .w600,
      color: mutedTextColor,
      letterSpacing: 0.5.px,
      raw: {'text-transform': 'uppercase'},
    ),
    css('.contact-row-display').styles(fontSize: 0.95.rem, color: textColor, fontWeight: .w500),
    css('.contact-cta-panel').styles(
      padding: .all(32.px),
      backgroundColor: surfaceMuted,
      border: .all(style: BorderStyle.solid, color: borderColor, width: 1.px),
      radius: .all(.circular(16.px)),
      display: .flex,
      flexDirection: .column,
      gap: .all(16.px),
    ),
    css('.contact-panel-title').styles(fontSize: 1.4.rem, fontWeight: .w700, color: textColor),
    css('.contact-panel-desc').styles(fontSize: 1.rem, color: mutedTextColor, lineHeight: 1.7.em),
    css('.contact-panel-btns').styles(display: .flex, gap: .all(12.px), flexWrap: .wrap),
  ];
}

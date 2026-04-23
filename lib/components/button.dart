import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

enum ButtonVariant { primary, secondary, ghost }

class Button extends StatelessComponent {
  final String label;
  final String href;
  final ButtonVariant variant;
  final bool external;

  const Button.primary(this.label, this.href, {this.external = false, super.key}) : variant = ButtonVariant.primary;

  const Button.secondary(this.label, this.href, {this.external = false, super.key}) : variant = ButtonVariant.secondary;

  const Button.ghost(this.label, this.href, {this.external = false, super.key}) : variant = ButtonVariant.ghost;

  @override
  Component build(BuildContext context) {
    final cls = switch (variant) {
      ButtonVariant.primary => 'btn btn-primary',
      ButtonVariant.secondary => 'btn btn-secondary',
      ButtonVariant.ghost => 'btn btn-ghost',
    };
    if (external) {
      return a(
        href: href,
        classes: cls,
        attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
        [.text(label)],
      );
    }
    return a(href: href, classes: cls, [.text(label)]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.btn').styles(
      display: .inlineFlex,
      alignItems: .center,
      justifyContent: .center,
      padding: .symmetric(vertical: 12.px, horizontal: 28.px),
      minHeight: 44.px,
      fontWeight: .w600,
      fontSize: 1.rem,
      textDecoration: TextDecoration(line: .none),
      cursor: .pointer,
      transition: Transition('all', duration: 180.ms, curve: .easeOut),
    ),
    css('.btn-primary').styles(
      backgroundColor: primaryColor,
      color: Colors.white,
      radius: .all(.circular(999.px)),
    ),
    css('.btn-primary:hover').styles(backgroundColor: primaryColorDark),
    css('.btn-secondary').styles(
      backgroundColor: Colors.transparent,
      color: primaryColor,
      border: .all(style: BorderStyle.solid, color: primaryColor, width: 2.px),
      radius: .all(.circular(8.px)),
    ),
    css('.btn-secondary:hover').styles(backgroundColor: primaryColor, color: Colors.white),
    css('.btn-ghost').styles(
      backgroundColor: Colors.transparent,
      color: primaryColor,
      radius: .all(.circular(8.px)),
    ),
    css('.btn-ghost:hover').styles(color: primaryColorDark),
  ];
}

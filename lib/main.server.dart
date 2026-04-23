library;

import 'dart:io';

import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_router/shelf_router.dart';

import 'app.dart';
import 'main.server.options.dart';

void main() async {
  Jaspr.initializeApp(
    options: defaultServerOptions,
  );

  var router = Router();

  router.mount('/api', (request) async {
    return Response.ok('Hello Api');
  });

  router.mount(
    '/',
    serveApp((request, render) {
      return render(
        Document(
          title: 'Namma Flutter — Chennai\'s Flutter Community',
          head: [
            meta(
              attributes: {
                'name': 'description',
                'content':
                    'Namma Flutter is Chennai\'s largest Flutter developer community — meetups, hackathons, open-source apps, and more.',
              },
            ),
            meta(attributes: {'name': 'og:title', 'content': 'Namma Flutter — Chennai\'s Flutter Community'}),
            meta(attributes: {'name': 'og:type', 'content': 'website'}),
            link(rel: 'manifest', href: 'manifest.json'),
            link(rel: 'icon', href: 'favicon.ico'),
          ],
          body: const App(),
        ),
      );
    }),
  );

  var handler = const Pipeline().addMiddleware(logRequests()).addHandler(router);

  var reloadLock = activeReloadLock = Object();
  var server = await shelf_io.serve(handler, InternetAddress.anyIPv4, 8080, shared: true);

  if (reloadLock != activeReloadLock) {
    server.close();
    return;
  }

  activeServer?.close();
  activeServer = server;

  print('Serving at http://${server.address.host}:${server.port}');
}

HttpServer? activeServer;
Object? activeReloadLock;

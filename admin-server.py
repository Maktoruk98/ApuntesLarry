#!/usr/bin/env python3
"""Local dev server for ApuntesLarry admin panel.

Serves the static site and exposes POST /api/commit-push, which runs
git add/commit/push in this repo so the admin panel can have a
one-click "Commit y Push" button. Only meant to run on localhost.
"""
import http.server
import json
import os
import subprocess

REPO_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = 8090


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=REPO_DIR, **kwargs)

    def do_POST(self):
        if self.path == '/api/commit-push':
            self._handle_commit_push()
        else:
            self.send_error(404)

    def _handle_commit_push(self):
        try:
            length = int(self.headers.get('Content-Length', 0) or 0)
            body = self.rfile.read(length) if length else b'{}'
            data = json.loads(body or b'{}')
            message = data.get('message') or 'Actualizacion desde panel admin'

            status = subprocess.run(['git', 'status', '--porcelain'], cwd=REPO_DIR, capture_output=True, text=True)
            if not status.stdout.strip():
                self._send_json(200, {'ok': True, 'skipped': True, 'output': 'No hay cambios que subir.'})
                return

            steps = []
            add = subprocess.run(['git', 'add', '-A'], cwd=REPO_DIR, capture_output=True, text=True)
            steps.append(add.stdout + add.stderr)

            commit = subprocess.run(['git', 'commit', '-m', message], cwd=REPO_DIR, capture_output=True, text=True)
            steps.append(commit.stdout + commit.stderr)
            if commit.returncode != 0:
                self._send_json(500, {'ok': False, 'output': '\n'.join(steps)})
                return

            push = subprocess.run(['git', 'push'], cwd=REPO_DIR, capture_output=True, text=True)
            steps.append(push.stdout + push.stderr)
            ok = push.returncode == 0
            self._send_json(200 if ok else 500, {'ok': ok, 'output': '\n'.join(steps)})
        except Exception as e:
            self._send_json(500, {'ok': False, 'output': str(e)})

    def _send_json(self, code, obj):
        body = json.dumps(obj).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == '__main__':
    os.chdir(REPO_DIR)
    server = http.server.ThreadingHTTPServer(('', PORT), Handler)
    print('Serving ApuntesLarry admin server on http://localhost:%d' % PORT)
    server.serve_forever()

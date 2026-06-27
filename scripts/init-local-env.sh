#!/usr/bin/env bash
set -euo pipefail

TARGET=".env.local"
if [[ -f "$TARGET" ]]; then
  echo "$TARGET already exists. Not overwriting."
  exit 0
fi

cp .env.example "$TARGET"
chmod 600 "$TARGET"
echo "Created $TARGET from .env.example. Edit it locally and never commit it."

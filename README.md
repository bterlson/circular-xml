Repro instructions:

1. npm install
2. npx rollup -c rollup.config.js (note circular reference warnings)
1. node bundle.js (note it fails)
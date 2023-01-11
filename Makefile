install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
eslint:
	find ./src -type f -name "*.js" -exec npx eslint --fix {} \; && find ./bin -type f -name "*.js" -exec npx eslint --fix {} \;  


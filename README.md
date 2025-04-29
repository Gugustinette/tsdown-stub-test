# tsdown-stub-test

## Usage

- Install dependencies
```bash
npm install
```

- Build and run the packages
```bash
# Build the foo package with tsdown
npm run build:tsdown --workspace=@tsdown-stub-test/foo
# Build the foo package with unbuild
npm run build:unbuild --workspace=@tsdown-stub-test/foo

# Run the bar package
npm run start --workspace=@tsdown-stub-test/bar
```

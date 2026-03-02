# Exercise B

1. **Linting & Unit Tests**
   - The existing GitHub Actions workflow (`.github/workflows/ci.yml`) now runs `npm run lint` before executing tests.
   - Tests are run using `npm run test:ci`, which invokes Jest in CI mode (`--ci`) and generates a coverage report and a JUnit-style results file (`test-results/junit.xml`).
   - The pipeline is configured to fail if either linting or any unit test fails, ensuring only passing code moves forward.
   - After test execution, two artifacts are uploaded:
     * `coverage/` directory (code coverage results)
     * `test-results/junit.xml` (structured test results for downstream processing)

2. **Security Scan (CodeQL)**
   - A new workflow file (`.github/workflows/codeql.yml`) has been added.
   - This job runs on pushes and pull requests against `main`/`master` and is scheduled daily.
   - It checks out the repo, initializes the CodeQL action for JavaScript, performs an autobuild, and runs the security analysis.
   - Any security alerts will appear in the repository’s Security tab under "Code scanning alerts."

## Why these changes were made

- **Quality assurance**: Enforcing linting and tests on every push reduces bugs and maintain code style consistency.
- **Visibility**: Uploading artifacts provides easy access to coverage and test results directly from workflow runs.
- **Security**: Integrating CodeQL enables automated detection of potential vulnerabilities, improving the safety of the codebase.

## How to run locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run lint**
   ```bash
   npm run lint
   ```

3. **Execute tests with coverage**
   ```bash
   npm run test:ci
   ```

   After tests complete, coverage files will be available in the `coverage/` directory and test results in `test-results/junit.xml`.

4. **(Optional) Manually trigger CodeQL scanning**
   - CodeQL runs automatically on GitHub; there’s no local command required. You can install and run the CodeQL CLI manually if needed, but it’s unnecessary for normal development.

---

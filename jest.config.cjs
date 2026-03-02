module.exports = {
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js"],
    coverageDirectory: "coverage",
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: "test-results",
          outputName: "junit.xml"
        }
      ]
    ]
  };
  
# @nrwl/cypress:cypress

Run Cypress e2e tests

Options can be configured in `workspace.json` when defining the executor, or when invoking it.
Read more about how to use executors and the CLI here: https://nx.dev/getting-started/nx-cli#common-commands.

## Options

### cypressConfig (_**required**_)

Type: `string`

The path of the Cypress configuration json file.

### tsConfig (_**required**_)

Type: `string`

The path of the Cypress tsconfig configuration json file.

### baseUrl

Type: `string`

Use this to pass directly the address of your distant server address with the port running your application

### browser

Type: `string`

The browser to run tests in.

### ciBuildId

Type: `string`

A unique identifier for a run to enable grouping or parallelization.

### ~~copyFiles~~

Type: `string`

**Deprecated:** A regex string that is used to choose what additional integration files to copy to the dist folder

### devServerTarget

Type: `string`

Dev server target to run tests against.

### exit

Default: `true`

Type: `boolean`

Whether or not the Cypress Test Runner will stay open after running tests in a spec file

### group

Type: `string`

A named group for recorded runs in the Cypress dashboard.

### headless

Default: `false`

Type: `boolean`

Whether or not to open the Cypress application to run the tests. If set to 'true', will run in headless mode

### ignoreTestFiles

Type: `string`

A String or Array of glob patterns used to ignore test files that would otherwise be shown in your list of tests. Cypress uses minimatch with the options: {dot: true, matchBase: true}. We suggest using https://globster.xyz to test what files would match.

### key

Type: `string`

The key cypress should use to run tests in parallel/record the run (CI only)

### parallel

Default: `false`

Type: `boolean`

Whether or not Cypress should run its tests in parallel (CI only)

### record

Default: `false`

Type: `boolean`

Whether or not Cypress should record the results of the tests

### reporter

Type: `string`

The reporter used during cypress run

### reporterOptions

Type: `string`

The reporter options used. Supported options depend on the reporter.

### skipServe

Default: `false`

Type: `boolean`

Skip dev-server build.

### spec

Type: `string`

A comma delimited glob string that is provided to the Cypress runner to specify which spec files to run. i.e. '**examples/**,**actions.spec**

### testingType

Default: `e2e`

Type: `string`

Possible values: `component`, `e2e`

Specify the type of tests to execute

### watch

Default: `false`

Type: `boolean`

Recompile and run tests when files change.

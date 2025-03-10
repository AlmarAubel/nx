import { runCommand } from '../tasks-runner/run-command';
import { createProjectGraphAsync } from '../core/project-graph';
import type { ProjectGraph } from '@nrwl/devkit';
import { readEnvironment } from '../core/file-utils';
import { RunOneReporter } from '../tasks-runner/run-one-reporter';
import { splitArgsIntoNxArgsAndOverrides } from './utils';
import { connectToNxCloudUsingScan } from './connect-to-nx-cloud';
import { performance } from 'perf_hooks';

export async function runOne(opts: {
  project: string;
  target: string;
  configuration: string;
  parsedArgs: any;
}): Promise<void> {
  performance.mark('command-execution-begins');
  performance.measure(
    'code-loading-and-file-hashing',
    'init-local',
    'command-execution-begins'
  );
  const { nxArgs, overrides } = splitArgsIntoNxArgsAndOverrides(
    {
      ...opts.parsedArgs,
      configuration: opts.configuration,
      target: opts.target,
    },
    'run-one'
  );

  await connectToNxCloudUsingScan(nxArgs.scan);

  const projectGraph = await createProjectGraphAsync('4.0');
  const { projects, projectsMap } = getProjects(projectGraph, opts.project);
  const env = readEnvironment(opts.target, projectsMap);
  const reporter = new RunOneReporter(opts.project);

  runCommand(
    projects,
    projectGraph,
    env,
    nxArgs,
    overrides,
    reporter,
    opts.project
  );
}

function getProjects(projectGraph: ProjectGraph, project: string): any {
  let projects = [projectGraph.nodes[project]];
  let projectsMap = {
    [project]: projectGraph.nodes[project],
  };

  return { projects, projectsMap };
}

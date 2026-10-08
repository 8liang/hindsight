#!/usr/bin/env node
/** hindsight-qoder-stop-hook — Qoder CLI `Stop` hook: reads the session transcript (Claude JSONL
 *  under Qoder's own projects dir, so the default reader applies) and writes the whole conversation
 *  back to memory. */
import { runHarnessRetain } from "./harness/hook-lifecycle";

void runHarnessRetain("qoder-cli");

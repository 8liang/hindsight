#!/usr/bin/env node
/**
 * hindsight-qoder-hook — the Qoder CLI entry point (a `UserPromptSubmit` hook).
 *
 * Install (Qoder CLI, user scope): ~/.qoder/settings.json
 *   { "hooks": { "UserPromptSubmit": [ { "hooks": [
 *       { "type": "command", "command": "node \"…/qoder-hook.js\"", "timeout": 30 } ] } ] } }
 *
 * Behavior (shared hook runtime, core/hook.ts): recall every prompt; reflect once per Qoder
 * session on the first prompt and cache the outcome so later prompts recall only. Reflect
 * outcomes recorded in the diagnostic file. Config: the layered files (~/.hindsight/coding-agent.json
 * + nearest project file), harness name "qoder-cli".
 */
import { runHarnessPrompt } from "./harness/hook-lifecycle";

void runHarnessPrompt("qoder-cli");

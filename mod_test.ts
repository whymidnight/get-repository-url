#!/usr/bin/env -S deno test --allow-all

/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

// var repositoryURL = require("./");
import { getRepositoryUrl } from "./mod.ts";

Deno.test("fetch", async () => {
  console.log(await getRepositoryUrl("@solana/web3.js"));
  console.log(await getRepositoryUrl("@solana/buffer-layout"));
});

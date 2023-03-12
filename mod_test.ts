#!/usr/bin/env -S deno test --allow-all

/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

// var repositoryURL = require("./");
import { getRepsitoryUrl } from "./mod.ts";

Deno.test("fetch", async () => {
  console.log(await getRepsitoryUrl("@solana/web3.js"));
  console.log(await getRepsitoryUrl("@solana/buffer-layout"));
});

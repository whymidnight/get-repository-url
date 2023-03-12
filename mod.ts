/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016-present, Jon Schlinkert.
 * Released under the MIT License.
 */

import parse from "npm:parse-github-url";
import pkg from "npm:get-pkg";

const isObject = (val?: Record<string, unknown>) =>
  val !== null && typeof val === "object";

export type Repository = {
  repository: string;
  url: string;
};

async function repository(pkg: {
  repository: {
    url: string;
  };
  homepage: {
    url: string;
  };
  bugs: {
    url: string;
  };
}): Promise<Repository> {
  let url: { url: string } | string =
    pkg.repository || pkg.homepage || (pkg.bugs && pkg.bugs.url);
  if (isObject(url)) {
    url = url.url;
  }

  if (/github\.com/.test(url as string) && /\/issues$/.test(url as string)) {
    return {
      url: (url as string).replace(/\/issues$/, ""),
      repository: pkg.repository.url,
    };
  }

  const parsed = await parse(url);
  return {
    url: pkg.repository.url,
    repository: `https://github.com/${parsed.repository}`,
  };
}

export async function getRepsitoryUrl(name: string) {
  return await repository(await pkg(name));
}

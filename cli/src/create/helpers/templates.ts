import got from "got";
import tar from "tar";
import { Stream } from "stream";
import { promisify } from "util";
import { join } from "path";
import { tmpdir } from "os";
import { createWriteStream, promises as fs } from "fs";

const pipeline = promisify(Stream.pipeline);

type RepoInfo = {
  name: string;
  filePath: string;
};

export async function isUrlOk(url: string): Promise<boolean> {
  const res = await got.head(url).catch((e) => e);
  return res.statusCode === 200;
}

async function downloadTar(url: string) {
  const tempFile = join(tmpdir(), `next.js-cna-example.temp-${Date.now()}`);
  await pipeline(got.stream(url), createWriteStream(tempFile));
  return tempFile;
}

export async function downloadAndExtractRepo(
  root: string,
  { name, filePath }: RepoInfo
): Promise<void> {
  const tempFile = await downloadTar(
    `https://codeload.github.com/jarrodwatts/${name}/tar.gz/main`
  );

  await tar.x({
    file: tempFile,
    cwd: root,
    strip: filePath.split("/").length + 1,
    filter: (path) => path.includes(`/template/`),
  });
}

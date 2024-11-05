"use server";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function RemoteMdxPage(data: string) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...

  return <MDXRemote source={data} />;
}

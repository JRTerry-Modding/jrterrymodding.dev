/**
 * @import {MDXModule} from 'mdx/types.js'
 * @import {Dispatch, SetStateAction} from 'react'
 */

import { compile, run } from "@mdx-js/mdx";
import { Fragment, useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";

/**
 * @param {{code: string}} props
 * @returns {JSX.Element}
 */
export default function Page({ code }) {
  /** @type {[MDXModule | undefined, Dispatch<SetStateAction<MDXModule | undefined>>]} */
  const [mdxModule, setMdxModule] = useState();
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(
    function () {
      (async function () {
        setMdxModule(await run(code, { ...runtime, baseUrl: import.meta.url }));
      })();
    },
    [code],
  );

  return <Content />;
}

export async function getStaticProps() {
  const code = String(
    await compile("# hi", {
      outputFormat: "function-body",
      /* …otherOptions */
    }),
  );
  return { props: { code } };
}
